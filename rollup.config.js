import typescript from 'rollup-plugin-typescript2';
import scss from 'rollup-plugin-scss';
import { uglify } from 'rollup-plugin-uglify';
import svg from 'rollup-plugin-svg-import';
import copy from 'rollup-plugin-copy';

import pkg from './package.json';

const plugins = [
    typescript({
        typescript: require('typescript'),
        objectHashIgnoreUnknownHack: true,
    }),
    scss({
        output: false,
    }),
    svg(),
    copy({
        targets: [
            {
                src: 'src/icon/svg',
                dest: 'dist/svg',
            },
        ],
    }),
];

if (process.env.BUILD === 'production') {
    plugins.push(
        uglify({
            nameCache: {},
        })
    );
}

export default [
    {
        input: 'src/index.ts',
        dest: 'index.js',
        external: Object.keys(pkg.peerDependencies || {}),
        plugins,
        output: [
            { file: pkg.main, format: 'cjs' },
            { file: pkg.module, format: 'esm' },
        ],
    },
];
