/*
 * @Author: hhxy
 * @Date: 2022-04-23 14:01:24
 * @LastEditors: hhxy
 * @LastEditTime: 2022-04-23 14:06:45
 * @Description:
 * @Optimization:
 */
// rollup.config.js
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import { uglify } from "rollup-plugin-uglify";
import { obfuscator } from 'rollup-obfuscator';
import commonjs from 'rollup-plugin-commonjs'
export default {

  input: './src/GlslEditor.js',
  output: {
    file: 'glslEditor.es.js',
    format: 'es',
    name: 'GlslEditor',
  },
  plugins: [
    commonjs(),
    resolve(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime'
    }),
    obfuscator(),
    uglify(),
    terser()

  ],
}

