import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';

const packageJson = require('./package.json');

// eslint-disable-next-line import/no-anonymous-default-export
export default [{
    input: 'src/index.ts',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
            name: '@wjbright/paystack',
        },
        // {
        //     file: packageJson.module,
        //     format: 'esm',
        //     sourcemap: true
        // }
    ],
    plugins: [
        external(),
        resolve(),
        esbuild(),
        commonjs(),
        typescript({ tsconfig: './tsconfig.json' }),
        postcss(),
        terser()
    ]
},
{
    input: packageJson.main,
    output: [{ file: 'dist/index.d.ts', format: "es" }],
    plugins: [dts()],
},
]