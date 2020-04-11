module.exports = {
  stories: [
    // /\.stories\.ts$/,
    // /\.stories\.tsx$/
    '../src/**/*.stories.ts',
    '../src/**/*.stories.tsx',
    '../stories/**/*.stories.ts',
    '../stories/**/*.stories.tsx',
  ],
  addons: [
    '@storybook/preset-typescript',
    '@storybook/addon-actions',
    'storybook-addon-jsx',
    'storybook-readme/register',
    '@storybook/addon-links',
    '@storybook/addon-a11y/register',
  ],
}
