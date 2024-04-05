import React, {useState} from 'react';
import {ScrollView} from 'react-native';

import styles from './Home.styles';
import {Text, View} from '@wrappers/index';
import {PostCard} from '@components/index';
import {useNavigation} from '@react-navigation/native';
import {PostDetailsScreenNavigationProp} from '@navigation/navigationTypes';
import {Posts} from '../../fakers';

const Home = () => {
  const [posts, setPosts] = useState(Posts);
  const navigation = useNavigation<PostDetailsScreenNavigationProp>();
  return (
    <ScrollView
      style={styles.scrollViewContainer}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text largeSize bold style={styles.header}>
          Latest Posts
        </Text>
        {posts.map(post => {
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
      </View>
    </ScrollView>
  );
};

export default Home;
