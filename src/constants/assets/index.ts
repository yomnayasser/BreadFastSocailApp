import {ImageSourcePropType} from 'react-native';

type images = {
  [key: string]: ImageSourcePropType;
};

export const IMAGES: images = {
  avatar: require('./images/avatar.png'),
};
