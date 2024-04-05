import React, {ReactNode} from 'react';
import {NavigationContainer} from '@react-navigation/native';

type Props = {
  children: ReactNode;
};

export default function ProvidersWrapper({children}: Props) {
  return <NavigationContainer>{children}</NavigationContainer>;
}
