import React from 'react';
import {GestureResponderEvent} from 'react-native';

import styles from './PostCard.styles';
import {Pressable} from '@wrappers/index';
import {PostContent} from '@components/index';

type Props = {
  name: number | string;
  title: string;
  body: string;
  onPress?: (event: GestureResponderEvent) => void;
};

const PostCard = ({name, title, body, onPress}: Props) => {
  return (
    <Pressable
      style={styles.pressableContainer}
      variant="primary"
      onPress={onPress}>
      <PostContent title={name} content={title} body={body} />
    </Pressable>
  );
};

export default PostCard;
