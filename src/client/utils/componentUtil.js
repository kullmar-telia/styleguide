import _ from 'lodash';
import { defaultHandlers, parse, resolver, handlers, utils } from 'react-docgen';
import { html } from 'js-beautify';

import ReactComponents from '../../../component-lib/src/index';

function getFunctionName(path) {
    return _.get(path, 'value.id.name') || (path && getFunctionName(path.parentPath));
}

function getMemberName(path) {
    return `${_.get(path, 'parentPath.node.left.object.name')}.${_.get(path, 'parentPath.node.left.property.name')}`;
}

function getTypeFromProperty(property) {
    const name = _.get(property, 'key.name');
    const comments = _.get(property, 'comments') || [];
    const simpleType = _.get(property, 'value.property.name');
    if (simpleType) {
        return { name, comments, type: simpleType };
    }
    const complexType = _.get(property, 'value.callee.property');
    // const innerType = _.get(property, 'value.arguments[0].elements');
    if (complexType) {
        return { name, comments, type: complexType };
    }
    return 'TODO: more complex type';
}

const parserCustomHandler = (documentation, path) => {
    const name = path.value.id && path.value.id.name;
    const componentName = name || getFunctionName(path) || getMemberName(path);
    if (componentName.includes('.')) {
        const componentExpression = _.get(path, 'parentPath.parentPath.parentPath.value').find(it => it.type === 'ExpressionStatement' && componentName.endsWith(_.get(it, 'expression.left.object.property.name')));
        const props = _.get(componentExpression, 'expression.right.properties');
        const types = props ? props.map(getTypeFromProperty) : [];
        const properties = _.get(path, 'node.params[0].properties')
            .filter(it => it.type === 'Property')
            .map(it => {
                const name = it.key.name;
                const defaultValue = _.get(it, 'value.right.raw');
                if (!types) {
                    return null;
                }
                const propType = types.find(it => _.get(it, 'name') === name);
                if (!propType) {
                    return null;
                }
                const type = propType.type;
                const comment = propType.comments.map(it => it.replace(/^\*/, '')).join('\n');
                // const propertyName = utils.getPropertyName(it)
                // propertyName
                // const propDescriptor = documentation.getPropDescriptor(propertyName)
                // const valuePath = propertyPath.get('value')
                return {
                    name, defaultValue, type, comment
                };
            })
            .filter(it => it);
        if (componentName.startsWith('NumberBoxes')) {
            // console.log(componentName);
            // console.log(properties);
            // console.log(path);
            // console.log(documentation);
            // console.log(path)
            // const componentExpression = _.get(path, 'parentPath.parentPath.parentPath.value').find(it => it.type === 'ExpressionStatement' && componentName.endsWith(_.get(it, 'expression.left.object.property.name')));
            // console.log(componentExpression);
            // const types = componentExpression.expression.right.properties.map(getTypeFromProperty);
            // console.log(types);
            console.log(properties);
        }
        documentation.addComposes({ componentName, properties });
    } else {
        documentation.addComposes({ componentName });
    }
};

const components = (() => {
    // First load paths of all React and Html examples.
    // Btw. we cannot use variables in require.context
    const allReactExamplesPaths = require.context('!!raw-loader!../examples/', true, /(.*\.(js$))/).keys().map((path) => /^(.\/)?(.*)/.exec(path)[2]);
    // Now load paths of atoms, molecules and organisms
    const atomsPaths = require.context(`!!raw-loader!../../../component-lib/src/atoms`, true, /(.*\.(jsx|js|html|pcss)$)/).keys().map((path) => /^(.\/)?(\S*)/.exec(path)[2]); // remove ./ from relative path
    const moleculesPaths = require.context(`!!raw-loader!../../../component-lib/src/molecules`, true, /(.*\.(jsx|js|html|pcss)$)/).keys().map((path) => /^(.\/)?(\S*)/.exec(path)[2]); // remove ./ from relative path
    const organismsPaths = require.context(`!!raw-loader!../../../component-lib/src/organisms`, true, /(.*\.(jsx|js|html|pcss)$)/).keys().map((path) => /^(.\/)?(\S*)/.exec(path)[2]); // remove ./ from relative path
    const exportedComponents = ReactComponents;
    // Combine all those paths
    const componentsPaths = [
        ...atomsPaths.map(it => 'atoms/' + it),
        ...moleculesPaths.map(it => 'molecules/' + it),
        ...organismsPaths.map(it => 'organisms/' + it)
    ];

    const components = componentsPaths
    // Filter out .pcss paths if there is a React component + filter out React components, that are not exported by index
        .filter(path => !!exportedComponents.find(it => it === 'src/' + path))
        // Filter out .pcss paths if there is a React component + filter out React components, that are not exported by index
        .filter(path => {
            const js = path.match(/(.*\.(jsx|js)$)/);
            if (js) {
                return !!exportedComponents.find(it => it === 'src/' + path);
            }
            const pcss = path.match(/(.*\.(pcss)$)/);
            if (pcss) {
                const componentName = /([\w\s\-]*)\.(pcss)$/.exec(path)[1];
                return !componentsPaths.find(it => it.match(new RegExp(componentName + '\.(jsx|js)$')));

            }
        })
        // Load the react component's code
        .map(it => {
            try {
                const [type, folder, fileName] = it.split('/');
                const [name] = fileName.split('.');
                return {
                    type,
                    folder,
                    name,
                    component: require(`!!raw-loader!../../../component-lib/src/${it}`),
                };
            } catch (e) {
                console.error(`Catch require("!!raw-loader!../../../component-lib/src/${it}")`);
                console.error(it);
                console.error(e);
                return null;
            }
        })
        // Filter out nulls
        .filter(it => it)
        // load and parse documentation
        .map(it => {
            const docs = parse(it.component, resolver.findAllComponentDefinitions, [...defaultHandlers, parserCustomHandler]);
            return {
                ...it,
                docs: docs,
                reactExamples: allReactExamplesPaths.filter(path => path.startsWith(`${it.type}/${it.folder}/`) && path.endsWith('.js')),
            };
        });
    return components;
})();

export function getComponents() {
    return components;
}

export function isFullWidthComponent(componentName) {
    const fullWidthComponents = [
        // Atoms
        'Container',
        'FullWidthImage',
        'NumberBoxes',
        'PagePebbles',

        // Molecules
        'Alert',
        'ArticleMetaData',
        'BoxGrid',
        'FactBox',
        'FunkyTabs',
        'Header',
        'HeaderWithImage',
        'Hero',
        'PageHeader',
        'PageFooter',
        'PopUpLine',
        'RecommendedProducts',
        'RelatedArticles',
        'UserDashboard',

        // Organisms
        'FocusSubscription',
        'ThemeBoxes',
        'ThemeBoxesWithImage'
    ];
    return _.includes(fullWidthComponents, componentName);
}

export function beautifyHtml(staticMarkup) {
    // add new lines between almost all adjacent elements
    // moves inline elements to their own line
    const preFormattedHtml = staticMarkup.replace(/><(?!\/i|\/label|\/span|option)/g, '>\n<');

    /* eslint-disable camelcase */
    const beautifiedHtml = html(preFormattedHtml, {
        indent_size: 2,
        indent_char: ' ',
        wrap_attributes: 'auto',
        wrap_attributes_indent_size: 2,
        end_with_newline: false,
    });
    /* eslint-enable camelcase */
    return beautifiedHtml;
}

