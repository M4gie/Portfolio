import { defineTransformer } from '@nuxt/content';
import slugify from 'slugify';

export default defineTransformer({
  name: 'blog-slug',
  extensions: ['.md'],
  transform(file) {
    return {
      ...file,
      slug: slugify(file.company as string, {
        lower: true,
        trim: true,
      }),
    };
  },
});
