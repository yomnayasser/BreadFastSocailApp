import React from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './Home.styles';
import {Text, View} from '@wrappers/index';
import {PostCard} from '@components/index';
import {useFetchPostsList} from '@hooks/index';
import {HomeSkeleton} from '@skeletons/index';
import {PostDetailsScreenNavigationProp} from '@navigation/navigationTypes';

const Home = () => {
  const navigation = useNavigation<PostDetailsScreenNavigationProp>();
  const {data: postsList, isLoading} = useFetchPostsList();
  return (
    <ScrollView
      style={styles.scrollViewContainer}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {isLoading ? (
          <HomeSkeleton />
        ) : (
          <>
            <Text largeSize bold style={styles.header}>
              Latest Posts
            </Text>
            {postsList?.map(post => {
              return (
                <>
                  <PostCard
                    name={post.user_id}
                    title={post.title}
                    body={post.body}
                    onPress={() => {
                      navigation.navigate('PostDetails', {post: post});
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
