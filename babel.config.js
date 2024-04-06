module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@hooks': './src/hooks',
          '@common': './src/common',
          '@screens': './src/screens',
          '@services': './src/services',
          '@wrappers': './src/wrappers',
          '@constants': './src/constants',
          '@components': './src/components',
          '@navigation': './src/navigation',
        },
      },
    ],
  ],
};
