import {PostsType} from '@common/types';

type MainStackParamList = {
  Home: undefined;
  PostDetails: {
    post: PostsType;
  };
};

export default MainStackParamList;
