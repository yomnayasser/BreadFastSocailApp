import {PostsType} from '@common/types';

type MainStackParamList = {
  Splash: undefined;
  Home: undefined;
  PostDetails: {
    post: PostsType;
  };
};

export default MainStackParamList;
