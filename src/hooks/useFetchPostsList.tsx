import {queryPostsList} from '@services/index';
import {useQuery} from '@tanstack/react-query';

const useFetchPostsList = () => {
  return useQuery({
    queryKey: ['postsList'],
    queryFn: () => queryPostsList(),
  });
};
export default useFetchPostsList;
