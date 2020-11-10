import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'
// import image from '@rollup/plugin-image'

export default {
  input: 'src/index.tsx',
  plugins: [
    nodeResolve(),
    typescript(),
    commonjs,
    postcss({ sourceMap: true, extract: true, minimize: true }),
    terser()
  ],
  external: Object.keys(pkg.peerDependencies || {}),
  output: {
    dir: 'dist',
    format: 'cjs',
    sourcemap: true
  }
}
