import React from 'react';
import {GestureResponderEvent} from 'react-native';

import styles from './PostCard.styles';
import {PostContent} from '@components/index';
import {Pressable, Text} from '@wrappers/index';

type Props = {
  name: number;
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
      <Text mediumSize right style={styles.comments} color={'@commentText'}>
        5 comments
      </Text>
    </Pressable>
  );
};

export default PostCard;
