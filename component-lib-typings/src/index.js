const requireContext = require('require-context');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
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
typings.forEach(it => {
    const t1 = it.typings.replace('declare module \'@telia/styleguide\' {', '');
    const t2 = t1.lastIndexOf('}');
    const strippedTypings = t1.slice(0, t2);
    mkdirp(it.folder, () => {
        fs.writeFileSync(it.path, strippedTypings);
    });
});
const index = typings.map((it) => {
    const componentName = /([a-zA-Z]+)\.d\.ts/.exec(it.path.toString())[1];
    return `
export {
  default as ${componentName},
  ${componentName}Props
} from './dist/${it.componentPath.replace(/\\/g, '/').replace(/\.jsx$/, '.d.ts')}';
`;
}).join('');

fs.writeFileSync(path.resolve(__dirname, '../index.d.ts'), index);


