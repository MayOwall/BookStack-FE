const path = require("path");
module.exports = {
  stories: ["../**/*.stories.mdx", "../**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  webpackFinal: async (config) => {
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    const alias = {
      component: path.resolve(__dirname, "../component"),
      app: path.resolve(__dirname, "../app"),
      public: path.resolve(__dirname, "../public"),
      hooks: path.resolve(__dirname, "../hooks"),
      api: path.resolve(__dirname, "../api"),
    };
    config.resolve.alias = {
      ...config.resolve.alias,
      ...alias,
    };
    return config;
  },
};
