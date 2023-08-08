const path = require('path');
module.exports = {
  stories: ['../../react-datepicker-user-event-test-failure/src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-mdx-gfm',
  ],
  features: {
    postcss: false,
  },
  babel: async (options) => {
    options.plugins = [...options.plugins, 'react-require'];
    options.plugins.push('babel-plugin-inline-react-svg');
    return options;
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  webpackFinal: async (config) => {
    // Return the altered config
    return config;
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      strictMode: true,
    },
  },
  docs: {
    autodocs: true,
  },
};
