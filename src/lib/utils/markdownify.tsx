import { marked } from 'marked';
import React from 'react';
interface MarkdownifyProps {
  content: string | null;
  tag?: keyof React.ReactHTML;
  className?: string;
}

export const markdownify = ({ content, tag, className }: MarkdownifyProps) => {
  if (!content) return null;

  const Element = tag ? tag : 'span';
  return tag ? (
    <Element
      className={className}
      dangerouslySetInnerHTML={{
        __html:
          tag === 'div' ? marked.parse(content) : marked.parseInline(content),
      }}
    />
  ) : (
    <span
      className={className}
      dangerouslySetInnerHTML={{
        __html: marked.parseInline(content),
      }}
    />
  );
};
