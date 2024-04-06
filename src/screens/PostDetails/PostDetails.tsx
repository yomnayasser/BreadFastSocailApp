import React from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './PostDetails.styles';
import {useFetchPostComments} from '@hooks/index';
import {CommentSkeleton} from '@skeletons/index';
import {Text, TouchableOpacity, View} from '@wrappers/index';
import {Icon, InfoTicket, PostContent} from '@components/index';
import {PostDetailsScreenRouteProp} from '@navigation/navigationTypes';

type Props = {
  route: PostDetailsScreenRouteProp;
};

const PostDetails = ({route}: Props) => {
  const navigation = useNavigation();
  const post = route?.params?.post;
  const userName = route?.params?.userName;
  const {data: commentsList, isLoading} = useFetchPostComments(post?.id);
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
          title={userName}
          content={post.title}
          body={post.body}
        />
        <View style={styles.separator} />
        {commentsList?.length !== 0 ? (
          <Text medium style={styles.commentTitle}>
            All comments
          </Text>
        ) : (
          <Text medium center>
            No comments on this post
          </Text>
        )}
        {isLoading ? (
          <CommentSkeleton />
        ) : (
          <>
            {commentsList?.map(comment => {
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
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default PostDetails;
