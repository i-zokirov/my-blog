import Social from '@/components/Social';
import config from '@/config/config.json';
import menu from '@/config/menu.json';
import social from '@/config/social.json';
import { markdownify } from '@/lib/utils';
import Link from 'next/link';

const Footer: React.FC = () => {
  const { copyright } = config.params;
  return (
    <footer className="section bg-theme-dark  w-full">
      <div className="container text-center">
        {/* footer menu */}
        <ul className="mb-8 space-x-4">
          {menu.footer.map((menu) => (
            <li className="inline-block" key={menu.name}>
              <Link href={menu.url} className="p-4 text-light hover:text-white">
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>

        <Social source={social} className="social-icons mb-8" />

        {markdownify({ content: copyright, tag: 'p', className: 'text-light' })}
      </div>
    </footer>
  );
};

export default Footer;
