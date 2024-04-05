import React from 'react';
import Theme from 'react-native-theming';
import {ViewProps} from 'react-native';

const View = ({children, style, ...reset}: ViewProps) => {
  return (
    <Theme.View style={style} {...reset}>
      {children}
    </Theme.View>
  );
};

export default View;
