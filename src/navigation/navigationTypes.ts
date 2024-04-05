import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {MainStackParamList} from './models';

export type PostDetailsScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'PostDetails'
>;
export type PostDetailsScreenRouteProp = RouteProp<
  MainStackParamList,
  'PostDetails'
>;
