// https://storybook.js.org/blog/storybook-for-webpack-5/
module.exports = {
  stories: ['../stories/*.stories.tsx'],
  addons: ['@storybook/addon-knobs'],
  typescript: {
    checkOptions: {},
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  docs: {
    autodocs: false
  }
};