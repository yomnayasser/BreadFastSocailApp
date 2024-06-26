import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home, PostDetails, Splash} from '@screens/index';
import {MainStackParamList} from '../models';

const MainStack = createNativeStackNavigator<MainStackParamList>();

const Main = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="Splash" component={Splash} />
      <MainStack.Screen name="PostDetails" component={PostDetails} />
    </MainStack.Navigator>
  );
};

export default Main;
