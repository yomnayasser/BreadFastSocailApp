import {PostsType} from '@common/types';

type MainStackParamList = {
  Splash: undefined;
  Home: undefined;
  PostDetails: {
    post: PostsType;
    userName: string | number;
  };
};

export default MainStackParamList;
