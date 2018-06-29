const requireContext = require('require-context');
const fs = require('fs');
const path = require('path');
const r2t = require('react-to-typescript-definitions');

const context = requireContext(path.resolve(__dirname, '../../component-lib/src/'), true, /\.jsx$/);
const typings = context.keys().map(componentPath => {
    const typings = r2t.generateFromFile('@telia/styleguide', path.resolve(__dirname, '../../component-lib/src/', componentPath), {});
    const typingsPath = path.resolve(__dirname, '../dist/', componentPath.replace(/[a-zA-Z]*\.jsx/, ''));
    return {
        typings: typings,
        folder: typingsPath,
        path: path.resolve(__dirname, '../dist/', componentPath.replace(/\.jsx$/, '.d.ts')),
        componentPath
    };
});
const joinedTypings = typings.map((it) => {
    const t1 = it.typings.replace('declare module \'@telia/styleguide\' {', '');
    const t2 = t1.lastIndexOf('}');
    const strippedTypings = t1.slice(0, t2);
    return strippedTypings.replace('import * as React from \'react\';', '');
}).join(' ');
const replaced = joinedTypings.replace(/(const) ([a-zA-z]*): React.SFC(<[a-zA-z]*>)?;\s*(export default ([a-zA-z]*);)/gm, `
interface zz_$2Component extends React.ComponentClass$3 {}
declare const $2: zz_$2Component;
`)
    .replace(/export default/g, 'export')
    .replace(/export type/g, 'type')
    .replace(/export interface ([a-zA-Z])Props/g, 'interface $1Props')
    .replace(/^\s*[\r\n]/gm, '\n');
const index = `
declare module '@telia/styleguide' {
    import * as React from 'react';
    ${replaced}
}
`;

fs.writeFileSync(path.resolve(__dirname, '../index.d.ts'), index);


