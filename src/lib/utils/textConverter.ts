import { slug } from 'github-slugger';
import { marked } from 'marked';
const htmlEntityDecoder = (htmlWithEntities: string): string => {
  let entityList: { [key: string]: string } = {
    '&nbsp;': ' ',
    '&lt;': '<',
    '&gt;': '>',
    '&amp;': '&',
    '&quot;': '"',
    '&#39;': "'",
  };
  let htmlWithoutEntities = htmlWithEntities.replace(
    /(&amp;|&lt;|&gt;|&quot;|&#39;)/g,
    (entity) => {
      return entityList[entity];
    }
  );
  return htmlWithoutEntities;
};

// slugify
export const slugify = (content: string) => {
  if (!content) return null;
  return slug(content);
};

// humanize
export const humanize = (content: string) => {
  if (!content) return null;

  return content
    .replace(/^[\s_]+|[\s_]+$/g, '')
    .replace(/[_\s]+/g, ' ')
    .replace(/^[a-z]/, function (m) {
      return m.toUpperCase();
    });
};

export const plainify = (content: string | null): string | null => {
  if (!content) return null;

  const mdParsed = marked.parseInline(String(content));
  const filterBrackets = mdParsed.replace(/<\/?[^>]+(>|$)/gm, '');
  const filterSpaces = filterBrackets.replace(/[\r\n]\s*[\r\n]/gm, '');
  const stripHTML = htmlEntityDecoder(filterSpaces);
  return stripHTML;
};
