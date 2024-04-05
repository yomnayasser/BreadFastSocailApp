// import fontSizes from '@constants/styles/fontSizes';
import {fontSizes} from '@constants/styles';
import colors from '../styles/colors';

const primary = {
  light: colors.purple[50], //#C5ADCF
  default: colors.purple[100], //#9C1F7E
  dark: colors.purple[110], //#941D77
  bg: colors.pink[50], //#FBEAF9
};
const secondary = {
  default: colors.aqua[25],
  dark: colors.aqua[100],
};

const black = {
  default: colors.black[100], //#222529
};

const error = {
  bg: colors.red[50], //#F3C0BE
  default: colors.red[50], //#D52942
};

const white = {
  default: colors.white[100], //#fff
};

export const light = {
  ...fontSizes,
  primaryColor: primary.default,
  secondaryColor: secondary.dark,
  darkText: black.default,
  primaryCardBackground: primary.bg,
  secondaryBgColor: secondary.default,
  primaryPressedButtonBG: primary.bg,
  primaryButtonBorder: '#d3d3d3',
  primaryButtonBG: white.default,
  commentText: '#95AAC2',
};
