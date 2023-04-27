import { markdownify } from '@/lib/utils';
import { INotFoundProps } from '@/types';
import React from 'react';

const NotFound: React.FC<INotFoundProps> = ({ frontmatter, content }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="flex h-[40vh] items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4">{frontmatter.title}</h1>
            {markdownify({
              content,
              tag: 'div',
              className: 'content prose-headings:text-text',
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
