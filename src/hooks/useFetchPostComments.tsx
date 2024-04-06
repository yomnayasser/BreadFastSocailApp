import {queryPostComments} from '@services/index';
import {useQuery} from '@tanstack/react-query';

const useFetchPostComments = (postID: number) => {
  return useQuery({
    queryKey: ['postComments'],
    queryFn: () => queryPostComments(postID),
  });
};
export default useFetchPostComments;
