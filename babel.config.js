module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@common': './src/common',
          '@screens': './src/screens',
          '@wrappers': './src/wrappers',
          '@constants': './src/constants',
          '@components': './src/components',
          '@navigation': './src/navigation',
        },
      },
    ],
  ],
};
