import React, { Component } from 'react';
import marked from 'marked';
import _ from 'lodash';
import { Heading } from '../../../component-lib/src/index';
import ComponentExample from './ComponentExample';
import { Button } from '../../../component-lib/src';

class ComponentDocs extends Component {
    state = {
        showProps: false,
        selectedComponent: this.props.component.name
    };

    handleDocsSelect = (componentName) => {
        this.setState({
            selectedComponent: componentName
        });
    };

    getPropsDocs = () => {
        const { docs } = this.props.component;
        if (!docs.length) {
            return null;
        }
        const ComponentButtons = docs
            .filter(it => it.composes[0].componentName.startsWith(this.props.component.name))
            .map(it => <Button key={it.composes[0].componentName} text={it.composes[0].componentName} size="small" onClick={() => {this.handleDocsSelect(it.composes[0].componentName);}} />);
        const doc = docs.find(it => it.composes[0].componentName === this.state.selectedComponent);
        return (
            <div>
                {ComponentButtons}
                <table className="full-width-table">
                    <thead className="full-width-table__header">
                        <tr className="full-width-table__row">
                            <th className="full-width-table__cell" align="left" style={{ minWidth: '13%' }}>Name</th>
                            <th className="full-width-table__cell" align="left" style={{ minWidth: '13%' }}>Default</th>
                            <th className="full-width-table__cell" align="left" style={{ minWidth: '20%' }}>Type</th>
                            <th className="full-width-table__cell" align="left" style={{}}>Description</th>
                        </tr>
                    </thead>
                    <tbody className="full-width-table__body">
                        {doc.props && (
                            _.keys(doc.props).sort((a, b) => a.localeCompare(b)).map(key => this.getPropsDocsRow(key, doc.props[key]))
                        )}
                        {doc.composes[0].properties.sort((a, b) => a.name.localeCompare(b.name)).map(property => this.getPropsDocsRowFromCompose(property))}
                    </tbody>
                </table>
            </div>
        );
    };

    getPropsDocsRow = (name, prop) => {
        const defaultValue = prop.defaultValue ? prop.defaultValue.value : '';
        const type = do {
            if (prop.type) {
                prop.type.name === 'union'
                    ? _.map(prop.type.value, (val) => val.name).join('|')
                    : prop.type.name;
            } else {
                console.warn(`PropType ${name} in ${this.props.component.name} has no specified type!`);
                'not specified';
            }

        };
        return (
            <tr className="full-width-table__row" key={name}>
                <td className="full-width-table__cell" align="left" style={{ minWidth: '12%' }}>{name}</td>
                <td className="full-width-table__cell" align="left" style={{ minWidth: '12%' }}>{defaultValue}</td>
                <td className="full-width-table__cell" align="left" style={{ minWidth: '20%' }}>{type}</td>
                <td className="full-width-table__cell" align="left" style={{}}>{prop.description}</td>
            </tr>
        );
    };

    getPropsDocsRowFromCompose = ({ name, defaultValue, type, comment }) => {
        return (
            <tr className="full-width-table__row" key={name}>
                <td className="full-width-table__cell" align="left" style={{ minWidth: '12%' }}>{name}</td>
                <td className="full-width-table__cell" align="left" style={{ minWidth: '12%' }}>{defaultValue}</td>
                <td className="full-width-table__cell" align="left" style={{ minWidth: '20%' }}>{type}</td>
                <td className="full-width-table__cell" align="left" style={{}}>{comment}</td>
            </tr>
        );
    };

    toggleProps = (e) => {
        e.preventDefault();
        this.setState({
            showProps: !this.state.showProps
        });
    };

    render() {
        const { component, ...rest } = this.props;
        const { showProps } = this.state;
        if (!component) {
            console.error(component);
        }

        const { reactExamples, name, docs } = component;

        const propsDocs = this.getPropsDocs(docs);
        const html = do {
            try {
                marked(docs.description);
            } catch (e) {
                console.error(e);
                null;
            }
        };
        return (
            <div className="sg-component" {...rest}>
                <div className="container container--medium container--no-margin">
                    <Heading level={2} text={_.startCase(name)} />
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                    {propsDocs && (
                        <a href="#" className="link" onClick={this.toggleProps}>
                            {showProps ? 'Hide Props' : 'Show Props'}
                        </a>
                    )}
                    {showProps && (
                        propsDocs
                    )}
                    {reactExamples.length === 0 && (
                        <div>No React examples available yet.</div>
                    )}
                </div>
                {reactExamples.map(examplePath => (
                    <ComponentExample examplePath={examplePath} key={examplePath} />
                ))}
            </div>
        );
    }
}

export default ComponentDocs;
