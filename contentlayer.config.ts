// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import highlight from 'rehype-highlight';
import rehypePrettyCode from 'rehype-pretty-code';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tags: {type: 'list', of: {type: 'string'}},
    description: {type: 'string', required: true},
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/${post._raw.flattenedPath}` },
  },
}));

const contentSourced = makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          dark: 'github-dark-dimmed',
          light: 'github-light',
        },
      ],
      highlight,
    ]
  }
})
export default contentSourced;