module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  typescript: {
    // @see https://github.com/styleguidist/react-docgen-typescript/issues/356#issuecomment-857887751
    reactDocgen: "react-docgen",
  },
};
