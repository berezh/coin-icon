import typescript from 'rollup-plugin-typescript2';
import scss from 'rollup-plugin-scss';
import { uglify } from 'rollup-plugin-uglify';
import svgr from '@svgr/rollup';

import pkg from './package.json';

function getTypecriptPlugin(tsconfig) {
    return typescript({
        typescript: require('typescript'),
        objectHashIgnoreUnknownHack: true,
        tsconfig,
    });
}

const plugins = [
    scss({
        output: false,
    }),
    svgr(),
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
        plugins: [getTypecriptPlugin('tsconfig.main.json'), ...plugins],
        output: [
            { file: pkg.main, format: 'cjs' },
            {
                file: 'D:/berezh/varp/src/coin-icon/index.js',
                format: 'es',
                banner: '/* eslint-disable */',
            },
        ],
    },
];
