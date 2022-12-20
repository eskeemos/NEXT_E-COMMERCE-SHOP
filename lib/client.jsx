import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'cqz1m6hw',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: true,
  token: process.env.SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);