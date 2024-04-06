import React from 'react';
import {ScrollView} from 'react-native';

import styles from './Home.styles';
import {Text, View} from '@wrappers/index';
import {PostCard} from '@components/index';
import {useNavigation} from '@react-navigation/native';
import {PostDetailsScreenNavigationProp} from '@navigation/navigationTypes';
import {useFetchPostsList} from '@hooks/index';
import {HomeSkeleton} from '../../skeletons';

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
