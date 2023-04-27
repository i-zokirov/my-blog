import { IAuthor, IPost } from './api';

export interface BaseLayoutProps {
  title?: string;
  meta_title?: string;
  description?: string;
  image?: string;
  noindex?: boolean;
  canonical?: string;
  children?: React.ReactNode;
}

export interface INotFoundProps {
  content: string;
  frontmatter: {
    title: string;
  };
}

export interface IAboutProps {
  mdxContent: string;
  frontmatter: {
    title: string;
    image: string;
    social: {
      facebook: string;
      twitter: string;
      instagram: string;
      // linkedin: string;
    };
  };
}

export interface ISinglePostProps {
  post: IPost;
  posts: IPost[];
  authors: IAuthor[];
  slug: string;
}
