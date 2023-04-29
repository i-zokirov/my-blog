import { Author, Post } from './api';

export interface IPostsProps {
  posts: Post[];
  className?: string;
  authors?: Author[];
}
