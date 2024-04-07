jest.mock('react-native-theming', () => {
  const {View: RNView} = require('react-native');

  return {
    createThemedComponent: jest
      .fn()
      .mockImplementation(themedComponent => themedComponent),
    // getCurrentTheme: jest.fn().mockReturnValue({def: {icon: 'mock-color'}}),
    __esModule: true,
    default: {View: RNView},
  };
});
