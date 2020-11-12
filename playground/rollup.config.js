import typescript from 'rollup-plugin-typescript';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

export default {
  input: `${__dirname}/src/index.tsx`,
  output: {
    file: 'public/bundle.js',
    format: 'iife',
    interop: 'auto'
  },
  plugins: [
    typescript({
      module: 'ES2015',
      jsx: 'react',
      esModuleInterop: true,
      lib: ["es6", "dom"],
      target: "es6"
    }),
    nodeResolve(),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
};
