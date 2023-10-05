import RSS from "rss";

import { allPosts } from "contentlayer/generated";

const URL = "https://jeongje.vercel.app";

export async function GET() {
  const posts = allPosts.map((post) => ({
    title: post.title,
    description: post.description,
    date: post.date,
    url: post._raw.flattenedPath,
  }));

  const feed = new RSS({
    title: "Example blog",
    description: "Lorem ipsum dolor sit amet.",
    feed_url: `${URL}/rss.xml`,
    site_url: URL,
    language: "kr",
  });

  posts.reverse().forEach((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `${URL}/posts/${post.url}`,
      date: post.date,
    });
  });

  return new Response(feed.xml(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
