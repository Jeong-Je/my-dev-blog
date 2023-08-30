import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

function PostCard(post: Post) {
  return (
    <div className="py-8 border rounded-lg mx-auto mb-8 prose max-sm:mx-5">
      <Link
        href={post.url}
        className="text-black no-underline hover:font-bold dark:text-blue-400"
      >
        <time dateTime={post.date} className="block text-xs text-gray-600">
          {format(parseISO(post.date), "yyyy년 MM월 dd일")}
        </time>
        <h2 className="my-0 text-xl text-sky-400">{post.title}</h2>
        <div
          className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
          dangerouslySetInnerHTML={{ __html: post.description }}
        />
      </Link>
      <div>
        {post.tags?.map((tag, idx) => (
          <Link href={`/posts/?tag=${tag}`} key={idx}>
            <button className="mt-px rounded-full border border-sky-100 hover:border-sky-200 outline outline-sky-100 hover:outline-sky-200 bg-sky-100 hover:bg-sky-200 text-black text-xs px-4 mr-3">
              {tag}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Home({
  searchParams,
}: {
  searchParams: any;
}) {
  console.log(searchParams);

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
                searchParams === undefined
                  ? "bg-sky-400 outline-sky-400 border-sky-400"
                  : ""
              }`}
            >
              ALL
            </button>
          </Link>
          {tags.map((tag, idx) => (
            <Link href={`/posts/?tag=${tag}`} key={idx}>
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
