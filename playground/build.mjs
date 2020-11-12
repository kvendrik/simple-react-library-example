import {rollup} from 'rollup';
import typescript from 'rollup-plugin-typescript';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

let cache;

export default async function build() {
  const bundle = await rollup({
    input: `src/index.tsx`,
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript({
        module: 'ES2015',
        jsx: 'react',
        esModuleInterop: true,
        lib: ["es6", "dom"],
        target: "es6"
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production')
      })
    ],
    cache,
  });

  cache = bundle.cache;

  bundle.write({
    file: 'public/bundle.js',
    format: 'iife',
    interop: 'auto'
  });
}

if (process.env.DIRECT) await build();
