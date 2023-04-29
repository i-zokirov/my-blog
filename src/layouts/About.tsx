import { markdownify } from '@/lib/utils';

import Image from 'next/image';
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="section">
      <div className="container text-center">
        <div className="img-cover mb-8">
          <Image
            src={'/images/author.jpg'}
            width={920}
            height={515}
            alt={'I am Ikboljon'}
            className="rounded-lg"
          />
        </div>

        {markdownify({ content: 'I am Ikboljon', tag: 'h2', className: 'h2' })}
        {/* <Social source={social} className="social-icons-simple my-8" /> */}

        <div className="content">
          <p>
            A content writer with over 12 years experience working across brand
            identity, publishing and digital products. Maecenas sit amet purus
            eget ipsum elementum venenatis. Aenean maximus urna magna elementum
            venenatis, quis rutrum mi semper non purus eget. Purus eget ipsum
            elementum venenatis. Aenean maximus urna magna elementum venenatis,
            quis rutrum mi semper non purus eget ipsum elementum venenatis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
