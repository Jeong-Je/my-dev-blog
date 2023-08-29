import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

function PostCard(post: Post) {
  return (
    <div className="mb-8 prose max-sm:mx-5">
      <Link
        href={post.url}
        className="text-black no-underline hover:font-bold dark:text-blue-400"
      >
        <h2 className="mb-1 text-xl">{post.title}</h2>
        <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <div
          className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
          dangerouslySetInnerHTML={{ __html: post.description }}
        />
      </Link>
      <div>
        {post.tags?.map((tag, idx) => (
          <Link href={`/posts/?tag=${tag}`} key={idx}>
            <button className="rounded-full border border-gary-500 bg-gray-200 hover:bg-gray-400 text-black text-xs px-4 mr-2">
              {tag}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  console.log(posts[2].tags);
  return (
    <div className="pt-24 py-8 w-[650px] mx-auto">
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
