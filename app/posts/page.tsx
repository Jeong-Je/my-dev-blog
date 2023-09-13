import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

function PostCard(post: Post) {
  return (
    <div className="py-8 bg-gray-200 border rounded-lg mx-auto mb-8 prose max-sm:mx-5">
        <Link href={post.url} className="text-black no-underline hover:text-black">
        <div className="px-5">
          <time dateTime={post.date} className="block text-sm">
            {format(parseISO(post.date), "yyyy년 MM월 dd일")}
          </time>
          <h2 className="my-1 text-xl font-bold">{post.title}</h2>
          <div
            className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
            dangerouslySetInnerHTML={{ __html: post.description }}
          />
          {post.tags?.map((tag, idx) => (
            <span key={idx} className="pt-3 pr-4 no-underline text-sky-500">
              #{tag}
            </span>
          ))}
        </div>
    </Link>
      </div>
  );
}

export default function Home({ searchParams }: { searchParams: any }) {
  let filteredPosts;
  if (Object.keys(searchParams).length === 0) {
    filteredPosts = allPosts;
  } else {
    filteredPosts = allPosts.filter((p) => p.tags?.includes(searchParams?.tag));
  }

  const posts = filteredPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  let allTags: Array<string> = [];
  allPosts.map((post) => {
    if (post.tags) {
      allTags.push(...post.tags); // 태그 배열을 추가
    }
  });

  //allTags의 중복 값들 제거
  const tags = allTags.filter((v, i) => allTags.indexOf(v) === i);

  return (
    <>
      <div className="pt-32 mx-auto">
        <div className="flex overflow-auto prose mx-auto mb-8 max-sm:mx-5">
          <Link href="/posts">
            <button
              className={`ml-1 rounded-full border border-sky-200 hover:border-sky-300 outline outline-sky-200 hover:outline-sky-300 bg-sky-200 hover:bg-sky-300 text-black text-sm px-4 mr-3 ${
                Object.keys(searchParams).length === 0
                  ? "bg-sky-400 outline-sky-400 border-sky-400"
                  : ""
              }`}
            >
              ALL
            </button>
          </Link>
          {tags.map((tag, idx) => (
            <Link href={tag==='C++'?`/posts/?tag=C%2B%2B`:`/posts/?tag=${tag}`} key={idx}>
              <button
                className={`rounded-full border border-sky-200 hover:border-sky-300 outline outline-sky-200 hover:outline-sky-300 bg-sky-200 hover:bg-sky-300 text-black text-sm px-4 mr-3 whitespace-nowrap ${
                  tag === searchParams?.tag
                    ? "bg-sky-400 outline-sky-400 border-sky-400"
                    : ""
                }`}
              >
                {tag}
              </button>
            </Link>
          ))}
        </div>
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </>
  );
}
