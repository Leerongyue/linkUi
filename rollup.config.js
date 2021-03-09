import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import dartSass from 'sass'
import {terser} from 'rollup-plugin-terser'
import typescript2 from 'rollup-plugin-typescript2'

export default {
  input: 'src/lib/index.ts',
  output: {
    globals: {vue: 'Vue'},
    name: 'link',
    file: 'dist/lib/link.js',
    format: 'umd',
    plugins: [terser()],
  },
  plugins: [
    scss({include: /\.scss$/, sass: dartSass}),
    vue({include: /\.vue$/}),
    typescript2({
      include: /\.ts$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015',
    }),
  ],
}
