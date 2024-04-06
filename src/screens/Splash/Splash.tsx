import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './Splash.styles';
import {ANIMATION} from '@constants/assets';
import {HomeScreenNavigationProp} from '@navigation/navigationTypes';

const Splash = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);
  }, []);

  return (
    <LottieView autoPlay source={ANIMATION.loading} style={styles.container} />
  );
};

export default Splash;
