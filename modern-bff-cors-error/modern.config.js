import { appTools, defineConfig } from '@modern-js/app-tools';
import { bffPlugin } from '@modern-js/plugin-bff';
import { koaPlugin } from '@modern-js/plugin-koa';


// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    // router: true
  },
  dev: {

    port: 8081
  },
  server: {

  },
  plugins: [
    appTools({
      bundler: 'rspack' // Set to 'webpack' to enable webpack
    }),
    bffPlugin(),
    koaPlugin(),
  ],
  tools: {
    tailwindcss: {
      content: ['./src/**/*.{js,jsx,ts,tsx}', './config/html/**/*.{html,ejs,hbs}', './storybook/**/*']
    },
  }
});