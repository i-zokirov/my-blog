import { Social } from '@/components';
import { markdownify } from '@/lib/utils';
import { IAboutProps } from '@/types';
import Image from 'next/image';
import React from 'react';

const About: React.FC<IAboutProps> = ({ frontmatter, mdxContent }) => {
  const { title, image, social } = frontmatter;
  return (
    <section className="section">
      <div className="container text-center">
        {image && (
          <div className="img-cover mb-8">
            <Image
              src={image}
              width={920}
              height={515}
              alt={title}
              className="rounded-lg"
            />
          </div>
        )}
        {markdownify({ content: title, tag: 'h2', className: 'h2' })}
        <Social source={social} className="social-icons-simple my-8" />

        <div className="content">{/* <MDXRemote {...mdxContent}  /> */}</div>
      </div>
    </section>
  );
};

export default About;
