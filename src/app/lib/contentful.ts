import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string,
});

export async function getEntries(contentType: string) {
  const entries = await client.getEntries({ content_type: contentType });
  return entries.items;
}

export default client;
