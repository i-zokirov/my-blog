export interface IPost {
  frontmatter: {
    title: string;
    description: string;
    date: string;
    image: string;
    categories: string[];
    authors: string[];
    tags: string[];
    draft: boolean;
  };
  content: string;
  slug: string;
}

export interface IAuthor {
  title: string;
  image: string;
  description: string;
  social: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
}
