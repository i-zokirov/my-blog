export type Category = {
  _id: string;
  name: string;
};

export type Tag = {
  _id: string;
  name: string;
};

export type Post = {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  image: string;
  isPinned: boolean;
  isFeatured: boolean;
  category: Category;
  // authors?: string[];
  hashtags: Tag[];
  draft: boolean;
  views: number;
  likes: number;
  dislikes: number;
  shares: number;
  content: string;
  slug?: string;
};

export type Author = {
  title: string;
  image: string;
  description: string;
  social: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
};
