import { Pagination } from '@/components';
import config from '@/config/config.json';
import BaseLayout from '@/layouts/Base';
import { getSinglePage } from '@/lib';
import { slugify } from '@/lib/utils';
import { Posts } from '@/partials';
import { Post } from '@/types';

interface BlogPaginationProps {
  pagination: any;
  posts: any[];
  authors: any[];
  currentPage: number;
  slug: string;
}

export default function BlogPagination(props: BlogPaginationProps) {
  const { pagination, posts, authors, currentPage } = props;
  const indexOfLastPost = currentPage * pagination;
  const indexOfFirstPost = indexOfLastPost - pagination;
  const totalPages = Math.ceil(posts.length / pagination);
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <BaseLayout>
      <section className="section">
        <div className="container">
          <Posts posts={currentPosts} authors={authors} />
          <Pagination totalPages={totalPages} currentPage={currentPage} />
        </div>
      </section>
    </BaseLayout>
  );
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/blogs');
  const data = (await res.json()) as Partial<Post>[];
  const posts = data.map((post) => ({
    params: { slug: slugify(post.title as string) + '&' + post._id },
  }));
  const { pagination } = config.settings;
  const totalPages = Math.ceil(posts.length / pagination);

  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { slug: (i + 1).toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const currentPage = parseInt(params && params.slug ? params.slug : '1');
  const { pagination } = config.settings;
  const res = await fetch('http://localhost:3000/blogs');
  const data = (await res.json()) as Partial<Post>[];

  const posts: Post[] = data.map((post) => ({
    ...post,
    slug: slugify(post.title as string) + '&' + post._id,
  })) as Post[];

  const authors = getSinglePage('src/content/authors');
  return {
    props: {
      pagination: pagination,
      posts: posts,
      authors: authors,
      currentPage: currentPage,
    },
  };
};
