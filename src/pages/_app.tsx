import BlogContext from '@/context/blogContext';
import '@/styles/globals.scss';
import { Post } from '@/types';
import type { AppProps } from 'next/app';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [posts, setPosts] = useState<Post[]>([]);

  const addBlogPost = (blogPost: Post) => {
    setPosts([...posts, blogPost]);
  };

  const addBlogPosts = (blogPosts: Post[]) => {
    setPosts(blogPosts);
  };

  const deleteBlogPost = (index: number) => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  return (
    <BlogContext.Provider
      value={{ blogPosts: posts, addBlogPost, deleteBlogPost, addBlogPosts }}
    >
      <Component {...pageProps} />;
    </BlogContext.Provider>
  );
}
