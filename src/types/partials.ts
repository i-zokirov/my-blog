import { IAuthor, IPost } from './api';

export interface IPostsProps {
  posts: IPost[];
  className?: string;
  authors: IAuthor[];
}
