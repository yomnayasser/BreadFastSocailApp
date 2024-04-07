import React from 'react';

import {Icon} from '@components/index';
import styles from './CardActions.styles';
import {TouchableOpacity, View} from '@wrappers/index';

type Props = {
  savedPost: boolean;
  setSavedPost: Function;
};

const CardActions = ({savedPost, setSavedPost}: Props) => {
  return (
    <View style={styles.container} testID="cardActionId">
      <TouchableOpacity
        onPress={() => setSavedPost(!savedPost)}
        testID="cardActionOnPress">
        <Icon
          name="heart4"
          size={22}
          style={styles.saveIcon}
          color={savedPost ? '@primaryColor' : '@darkColor'}
        />
      </TouchableOpacity>
      <Icon name="export-14" style={styles.shareIcon} />
    </View>
  );
};

export default CardActions;
