import React from 'react';
import {createThemedComponent} from 'react-native-theming';

import RNCustomIcon from './CustomIcon';
import {ViewStyle} from 'react-native';

const ThemedCustomIcon = createThemedComponent(RNCustomIcon, ['color']);

type Props = {
  name: string;
  color?: string;
  size?: number;
  style?: ViewStyle;
};

const Icon = ({name, color, size, style}: Props) => {
  return (
    <ThemedCustomIcon
      name={name}
      color={color ?? '@icon'}
      size={size ?? 25}
      style={style}
    />
  );
};
export default Icon;
