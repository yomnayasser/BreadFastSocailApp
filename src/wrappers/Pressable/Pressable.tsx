import React from 'react';
import {
  PressableProps,
  Pressable as RNPressable,
  ViewStyle,
} from 'react-native';
import {createThemedComponent, getCurrentTheme} from 'react-native-theming';
import {ThemedViewStyle} from '@common/types';

interface props extends PressableProps {
  children: React.ReactNode;
  hitSlop?: number;
  disabled?: boolean;
  variant?: string;
  style?: ThemedViewStyle | ViewStyle[];
}

const Pressable = ({
  children,
  onPress,
  style,
  hitSlop,
  variant,
  ...restProps
}: props) => {
  const ThemedPressable = createThemedComponent(RNPressable, []);

  return (
    <ThemedPressable
      onPress={onPress}
      style={({pressed}) =>
        pressed
          ? {
              ...style,
              backgroundColor:
                getCurrentTheme().def[`${variant}PressedButtonBG`],
              borderColor: 'transparent',
            }
          : {
              ...style,
              backgroundColor: getCurrentTheme().def[`${variant}ButtonBG`],
              borderColor: getCurrentTheme().def[`${variant}ButtonBorder`],
            }
      }
      {...restProps}
      hitSlop={hitSlop ?? 5}>
      {children}
    </ThemedPressable>
  );
};

export default Pressable;
