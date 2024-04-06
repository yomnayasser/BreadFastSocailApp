import {CommentType} from '@common/types';
import {httpClient} from './httpClient';

const queryPostComments = (postID: number): Promise<CommentType[]> => {
  console.log('postID:>>', postID);
  return httpClient
    .get(`https://gorest.co.in/public/v2/posts/${postID}/comments`)
    .then(res => {
      return res.data;
    });
};
export default queryPostComments;
