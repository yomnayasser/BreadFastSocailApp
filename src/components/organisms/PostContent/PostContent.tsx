import React, {useState} from 'react';
import {ViewStyle} from 'react-native';

import {Text, View} from '@wrappers/index';
import {CardActions, InfoTicket} from '@components/index';

type Props = {
  title: number;
  content: string;
  body: string;
  style?: ViewStyle;
};

const PostContent = ({title, content, body, style}: Props) => {
  const [savedPost, setSavedPost] = useState(false);

  return (
    <View style={style ?? {}}>
      <CardActions savedPost={savedPost} setSavedPost={setSavedPost} />
      <InfoTicket
        title={title}
        content={content}
        titleColor="@secondaryColor"
      />
      <Text color={'@darkText'}>{body}</Text>
    </View>
  );
};

export default PostContent;
