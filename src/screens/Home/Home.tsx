import React from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './Home.styles';
import {Text, View} from '@wrappers/index';
import {PostCard} from '@components/index';
import {useFetchPostsList} from '@hooks/index';
import {HomeSkeleton} from '@skeletons/index';
import {PostDetailsScreenNavigationProp} from '@navigation/navigationTypes';
import useFetchUsers from '@hooks/useFetchUsers';

const Home = () => {
  const navigation = useNavigation<PostDetailsScreenNavigationProp>();
  const {data: postsList, isLoading} = useFetchPostsList();
  const {data: users, isLoading: usersLoading} = useFetchUsers();

  return (
    <ScrollView
      style={styles.scrollViewContainer}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {isLoading && usersLoading ? (
          <HomeSkeleton />
        ) : (
          <>
            <Text largeSize bold style={styles.header}>
              Latest Posts
            </Text>
            {postsList?.map(post => {
              const user = users?.filter(e => e.id === post?.user_id)[0];
              return (
                <>
                  <PostCard
                    name={user?.name ?? post.user_id}
                    title={post.title}
                    body={post.body}
                    onPress={() => {
                      navigation.navigate('PostDetails', {
                        post: post,
                        userName: user?.name ?? post.user_id,
                      });
                    }}
                  />
                </>
              );
            })}
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default Home;
