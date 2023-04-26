import { Pagination } from '@/components';
import config from '@/config/config.json';
import BaseLayout from '@/layouts/Base';
import { getSinglePage } from '@/lib';
import { Posts } from '@/partials';
import { GetStaticProps } from 'next';

const { blog_folder } = config.settings;

interface BlogPaginationProps {
  pagination: any;
  posts: any[];
  authors: any[];
  currentPage: number;
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
          <Posts posts={posts} authors={authors} />
          <Pagination totalPages={totalPages} currentPage={currentPage} />
        </div>
      </section>
    </BaseLayout>
  );
}
export const getStaticProps: GetStaticProps<BlogPaginationProps> = async ({
  params,
}) => {
  const currentPage = parseInt('1');
  const { pagination } = config.settings;
  const posts = getSinglePage(`src/content/${blog_folder}`);
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
