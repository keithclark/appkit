import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import css from 'rollup-plugin-import-css';

const production = !process.env.ROLLUP_WATCH;

const html = (opts = {}) => {
  return {
    name: "string",
    transform(code, id) {
      if (id.endsWith('.html')) {
        return {
          code: `const x = document.createElement('template');x.innerHTML = ${JSON.stringify(code.replace(/\s+/g,' '))};export default x;`,
        };
      }
      return { code };
    }
  };
};

export default [
  {
    input: 'src/main.js',
    output: {
      file: production ? 'dist/bundle.min.js' : 'dist/bundle.js',
      format: 'esm'
    },
    plugins: [
      css({
        minify: true,
        modules: true
      }),
      html(),
      nodeResolve({
        browser: true
      }),
      production && terser()
    ]
  }
];
