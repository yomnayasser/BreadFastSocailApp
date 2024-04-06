import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import {View} from '@wrappers/index';
import styles from './CommentSkeleton.styles';

const CommentSkeleton = () => {
  return (
    <SkeletonPlaceholder>
      <>
        {[...new Array(4)]?.map(index => {
          return (
            <View style={styles.container} key={index}>
              <View style={styles.avatar} />
              <View style={styles.card} />
            </View>
          );
        })}
      </>
    </SkeletonPlaceholder>
  );
};

export default CommentSkeleton;
