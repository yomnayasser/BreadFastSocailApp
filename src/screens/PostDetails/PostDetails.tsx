import React from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './PostDetails.styles';
import {Icon, InfoTicket, PostContent} from '@components/index';
import {Text, TouchableOpacity, View} from '@wrappers/index';
import {Comments} from '../../fakers';
import {PostDetailsScreenRouteProp} from '@navigation/navigationTypes';

type Props = {
  route: PostDetailsScreenRouteProp;
};

const PostDetails = ({route}: Props) => {
  const navigation = useNavigation();
  const post = route?.params?.post;
  return (
    <ScrollView
      style={styles.scrollViewContainer}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="arrow-left" color="@primaryColor" />
        </TouchableOpacity>
        <PostContent
          style={styles.postContent}
          title={post.user_id}
          content={post.title}
          body={post.body}
        />
        <View style={styles.separator} />
        <Text medium style={styles.commentTitle}>
          All comments
        </Text>
        {Comments.map(comment => {
          return (
            <InfoTicket
              title={comment.name}
              content={comment.body}
              size="small"
              backgroundColor="@secondaryBgColor"
              contentColor="@darkText"
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default PostDetails;
