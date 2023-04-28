import { formatDate, humanize, markdownify, slugify } from '@/lib/utils';
import { ISinglePostProps } from '@/types';
import { marked } from 'marked';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const SinglePost: React.FC<ISinglePostProps> = ({
  post,
  posts,
  authors,
  slug,
}) => {
  const {
    content,
    category,
    hashtags,
    description: postDescription,
    title,
    createdAt,
    image,
  } = post;

  const description = postDescription ? postDescription : content.slice(0, 120);
  // const similarPosts = getSimilerItems(post, posts, slug);

  return (
    <React.Fragment>
      <section className="section">
        <div className="container">
          <article className="text-center">
            {markdownify({ content: title, tag: 'h2', className: 'h2' })}
            <ul className="mt-4 mb-8 flex flex-wrap items-center justify-center space-x-3 text-text">
              {/* <li>
                {authors
                  .filter((author) =>
                    frontmatter.authors
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
              <li>{formatDate(new Date(createdAt))}</li>
              <li>
                <ul>
                  <li className="inline-block">
                    <Link
                      href={`/categories/${slugify(category.name)}`}
                      className="mr-3 hover:text-primary"
                    >
                      &#9635; {humanize(category.name)}
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            {image && (
              <Image
                src={image}
                height="500"
                width="1000"
                alt={title}
                className="rounded-lg"
              />
            )}
            <div className="content mb-16 text-left">
              {/* <MDXRemote
                compiledSource={''}
                scope={undefined}
                frontmatter={undefined}
                {...parseMDX(content)}
                components={{}}
              /> */}

              <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            </div>
            <div className="flex flex-wrap items-center justify-between">
              <ul className="mr-4 mb-4 space-x-3">
                {hashtags.map((tag, i) => (
                  <li className="inline-block" key={`tag-${i}`}>
                    <Link
                      href={`/hashtags/${slugify(tag.name)}`}
                      className="block rounded-lg bg-theme-light px-4 py-2 font-semibold text-dark hover:text-primary"
                    >
                      #{humanize(tag.name)}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* <Share
                className="social-share mb-4"
                title={title}
                description={description}
                slug={slug}
              /> */}
            </div>
          </article>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="mb-8 text-center">Similar Posts</h2>
          {/* <SimilarPosts posts={similarPosts.slice(0, 3)} /> */}
        </div>
      </section>
    </React.Fragment>
  );
};

export default SinglePost;
