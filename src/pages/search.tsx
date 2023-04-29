import { useBlogContext } from '@/context';
import { BaseLayout } from '@/layouts';
import { slugify } from '@/lib/utils';
import { Posts } from '@/partials';
import { Post } from '@/types';
import { useRouter } from 'next/router';
const search: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { query } = router;
  const keyword = slugify(query.key as string);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { blogPosts } = useBlogContext();

  let searchResults;
  if (blogPosts && blogPosts.length > 0 && keyword) {
    searchResults = blogPosts.filter((post: Post) => {
      if (post.title && post.category && post.hashtags && post.content) {
        if ((slugify(post.title) as string).includes(keyword)) {
          return post;
        } else if (post.category.name.includes(keyword)) {
          return post;
        } else if (
          post.hashtags.find((tag) =>
            (slugify(tag.name) as string).includes(keyword)
          )
        ) {
          return post;
        } else if ((slugify(post.content) as string).includes(keyword)) {
          return post;
        }
      }
    });
  }

  return (
    <BaseLayout title={`Search results for ${query.key}`}>
      <div className="section">
        <div className="container">
          <h1 className="h2 mb-8 text-center">
            Search results for <span className="text-primary">{query.key}</span>
          </h1>
          {searchResults && searchResults.length ? (
            <Posts posts={searchResults as Post[]} />
          ) : (
            <div className="py-24 text-center text-h3 shadow">
              No Search Found
            </div>
          )}
        </div>
      </div>
    </BaseLayout>
  );
};

export default search;
