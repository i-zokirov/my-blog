import { Author, Post } from './api';

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
    [x: string]: any;
  };
}

export interface IAboutProps {
  content: string;
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
  post: Post;
  posts?: Post[];
  authors?: Author[];
  slug: string;
}

export interface IRegularPageProps {
  slug: string;
  postSlug: string;
  authors: Author[];
  posts: Post[];
  data: {
    frontmatter: {
      title: string;
      meta_title: string;
      description: string;
      image: string;
      noindex: boolean;
      canonical: string;
      layout: string;
    };
    content: string;
  };
}
