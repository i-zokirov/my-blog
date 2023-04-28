import { BaseLayout, SinglePostLayout } from '@/layouts';
import { slugify } from '@/lib/utils';
import { Post } from '@/types';
import React from 'react';

interface SinglePostProps {
  post: Post;
  slug: string;
}

const SinglePost: React.FC<SinglePostProps> = ({ post, slug }) => {
  return (
    <BaseLayout>
      <SinglePostLayout post={post} slug={slug} />
    </BaseLayout>
  );
};

export default SinglePost;

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/blogs');
  const posts = (await res.json()) as Partial<Post>[];
  const paths = posts.map((post) => ({
    params: { slug: slugify(post.title as string) + '&' + post._id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const res = await fetch(
    `http://localhost:3000/blogs/${params.slug.split('&')[1]}`
  );
  const data = (await res.json()) as Partial<Post>;
  const post: Post = {
    ...data,
    slug: slugify(data.title as string) + '&' + data._id,
  } as Post;

  return { props: { post, slug: params.slug } };
}
