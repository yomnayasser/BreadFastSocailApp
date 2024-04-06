import {queryUsers} from '@services/index';
import {useQuery} from '@tanstack/react-query';

const useFetchUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => queryUsers(),
  });
};
export default useFetchUsers;
