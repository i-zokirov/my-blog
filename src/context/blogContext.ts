import { Post } from '@/types';
import { createContext, useContext } from 'react';

interface BlogContextProps {
  blogPosts: Post[];
  addBlogPosts: (post: Post[]) => void;
  addBlogPost: (post: Post) => void;
  deleteBlogPost: (index: number) => void;
  editBlogPost?: () => void;
}

const BlogContext = createContext<BlogContextProps>({
  blogPosts: [],
  addBlogPost: () => {},
  addBlogPosts: () => {},
  deleteBlogPost: () => {},
  editBlogPost: () => {},
});

export default BlogContext;

export const useBlogContext = () => useContext(BlogContext);
