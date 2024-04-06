import {PostsType} from '@common/types';
import {httpClient} from './httpClient';

const queryPostsList = (): Promise<PostsType[]> => {
  return httpClient.get('https://gorest.co.in/public/v2/posts').then(res => {
    return res.data;
  });
};
export default queryPostsList;
