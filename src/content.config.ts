import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    id: z.number(),
    name: z.string(),
    price: z.number(),
    category: z.string(),
    collection: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    shortDescription: z.string(),
    burnTime: z.string().optional(),
    size: z.string().optional(),
    badge: z.union([z.string(), z.null()]).optional(),
    featured: z.boolean().optional().default(false),
    order: z.number().optional().default(0),
    waxType: z.string().optional(),
    wick: z.string().optional(),
  }),
});

const collectionItems = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/collections' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    season: z.string(),
    icon: z.string(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    heroTagline: z.string().optional(),
    order: z.number().optional().default(0),
  }),
});

export const collections = { products, collections: collectionItems };
