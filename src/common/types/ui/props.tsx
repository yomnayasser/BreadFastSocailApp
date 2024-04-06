export type PostsType = {
  id: number;
  user_id: number;
  title: string;
  body: string;
};

export type CommentType = {
  id: number;
  post_id: number;
  name: string;
  email: string;
  body: string;
};

export type UsersType = {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
};
