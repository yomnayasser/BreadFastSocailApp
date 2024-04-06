import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import {View} from '@wrappers/index';
import styles from './HomeSkeleton.styles';

const HomeSkeleton = () => {
  return (
    <SkeletonPlaceholder>
      <>
        <View style={styles.header} />
        {[...new Array(2)]?.map(index => {
          return (
            <View key={index} style={styles.container}>
              <View style={styles.card} />
            </View>
          );
        })}
      </>
    </SkeletonPlaceholder>
  );
};

export default HomeSkeleton;
