import React from 'react';
import DOMPurify from 'dompurify';

const RichTextDisplay = ({ content }) => {
  const sanitizedContent = DOMPurify.sanitize(content || '', {
    ALLOWED_TAGS: ['p', 'h1', 'h2', 'h3', 'ul', 'ol', 'li', 'strong', 'em', 'u', 'br', 'div'],
    ALLOWED_ATTR: ['style', 'class']
  });

  return (
    <div 
      className="rich-text-content font-sans text-gray-700 leading-relaxed
                &>p]:mb-4 
                [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:my-4
                [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:my-4
                [&>li]:mb-2"
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
};

export default RichTextDisplay;