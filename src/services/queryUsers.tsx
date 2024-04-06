import {UsersType} from '@common/types';
import {httpClient} from './httpClient';

const queryUsers = (): Promise<UsersType[]> => {
  return httpClient.get('https://gorest.co.in/public/v2/users').then(res => {
    return res.data;
  });
};
export default queryUsers;
