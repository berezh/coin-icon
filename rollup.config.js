import typescript from 'rollup-plugin-typescript2';
import scss from 'rollup-plugin-scss';
import { uglify } from 'rollup-plugin-uglify';
import svgr from '@svgr/rollup';

import pkg from './package.json';

const plugins = [
    typescript({
        typescript: require('typescript'),
        objectHashIgnoreUnknownHack: true,
    }),
    scss({
        output: false,
    }),
    svgr(),
    // copy({
    //     targets: [
    //         {
    //             src: 'src/icon/svg',
    //             dest: ['dist', 'varp/src/coin-icon'],
    //         },
    //     ],
    // }),
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
            // { file: pkg.module, format: 'esm' },
            // {
            //     file: 'D:/berezh/varp/src/coin-icon/index.js',
            //     format: 'es',
            //     banner: '/* eslint-disable */',
            // },
        ],
    },
];
