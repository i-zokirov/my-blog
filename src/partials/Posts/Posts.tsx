import config from '@/config/config.json';
import { formatDate, humanize, slugify } from '@/lib/utils';
import { IPostsProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

const Posts: React.FC<IPostsProps> = ({ posts, className, authors }) => {
  const { summary_length } = config.settings;
  return (
    <div className={`row space-y-16 ${className}`}>
      {posts.map((post, i) => (
        <div
          key={`key-${i}`}
          className={i === 0 ? 'col-12' : 'col-12 sm:col-6'}
        >
          {post.image && (
            <Image
              className="rounded-lg"
              src={post.image}
              alt={post.title}
              width={i === 0 ? 925 : 445}
              height={i === 0 ? 475 : 230}
              priority={i === 0 ? true : false}
            />
          )}
          <ul className="mt-4 mb-4 flex flex-wrap items-center space-x-3 text-text">
            {/* <li>
              {authors
                .filter((author) =>
                  post.authors
                    .map((author) => slugify(author))
                    .includes(slugify(author.title))
                )
                .map((author, i) => (
                  <Link
                    href={`/authors/${slugify(author.title)}`}
                    key={`author-${i}`}
                    className="flex items-center hover:text-primary"
                  >
                    {author.image && (
                      <Image
                        src={author.image}
                        alt={author.title}
                        height={50}
                        width={50}
                        className="mr-2 h-6 w-6 rounded-full"
                      />
                    )}
                    <span>{author.title}</span>
                  </Link>
                ))}
            </li> */}
            <li>{formatDate(new Date(post.createdAt))}</li>
            <li>
              <ul>
                <li className="inline-block" key={`category-${i}`}>
                  <Link
                    href={`/categories/${slugify(post.category.name)}`}
                    className="mr-3 hover:text-primary"
                  >
                    &#9635; {humanize(post.category.name)}
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <h3 className="mb-2">
            <Link
              href={`/blogs/${post.slug}`}
              className="block hover:text-primary"
            >
              {post.title}
            </Link>
          </h3>
          <p className="text-text">
            {post.content && post.content.slice(0, Number(summary_length))}...
          </p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
