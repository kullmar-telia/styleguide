import React, { Component } from 'react';
import _ from 'lodash';

import { Header } from '../../../component-lib/src/index';
import ComponentDocs from '../components/ComponentDocs';
import { getComponents } from '../utils/componentUtil';

class ComponentsByTypePage extends Component {
    state = {
        componentsByType: _.groupBy(getComponents(), 'type')
    };

    render() {
        const { componentType, componentName } = this.props.match.params;
        const components = this.state.componentsByType[componentType];
        const component = components.find(it => it.folder === componentName);
        return (
            <div>
                <Header
                    iconUrl="/public/ico_code.svg"
                    pageTitle={componentName}
                    withMask={false}
                    withContentOverlap={false} />
                <div className="container container--no-padding container--extra-margin-bottom">
                    <ComponentDocs id={component.name} component={component} key={component.name} />
                </div>
            </div>
        );
    }
}

export default ComponentsByTypePage;
