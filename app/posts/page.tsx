import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { serialize } from "v8";

const TagCard = ({
  searchParams,
  tags,
}: {
  searchParams: any;
  tags: Array<string>;
}) => {
  return (
    <>
      <div className="flex overflow-auto prose mx-auto mb-8 pb-2 max-sm:mx-5">
        <Link href="/posts?tag=ALL">
          <button
            className={`ml-1 rounded-full border border-sky-200 hover:border-sky-300 outline outline-sky-200 hover:outline-sky-300 bg-sky-200 hover:bg-sky-300 text-black text-sm px-4 mr-3 ${
              searchParams.tag === "ALL"
                ? "bg-sky-400 outline-sky-400 border-sky-400"
                : ""
            }`}
          >
            ALL
          </button>
        </Link>
        {tags.map((tag: any, idx: any) => (
          <Link
            href={tag === "C++" ? `/posts/?tag=C%2B%2B` : `/posts/?tag=${tag}`}
            key={idx}
          >
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
    </>
  );
};

const PostCard = (post: Post) => {
  return (
    <div className="py-8 bg-gray-200 border rounded-lg mx-auto mb-8 prose max-sm:mx-5">
      <Link
        href={post.url}
        className="text-black no-underline hover:text-black"
      >
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
};

export default function Home({ searchParams }: { searchParams: any }) {
  // console.log('1',searchParams);
  if (!searchParams.tag) {
    searchParams.tag = "ALL";
  }
  // console.log('2',searchParams);
  let filteredPosts;
  if (searchParams.tag === "ALL") {
    filteredPosts = allPosts;
  } else {
    filteredPosts = allPosts.filter((p) => p.tags?.includes(searchParams?.tag));
  }

  // 게시글 날짜 순으로 정렬
  let posts = filteredPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  const postCount = filteredPosts.length;

  /* 페이지 네이션 */
  const pagination = Math.ceil(filteredPosts.length / 5);

  if (postCount > 1) {
    const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;
    const postsPerPage = 5;

    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = currentPage * postsPerPage;

    posts = posts.slice(startIndex, endIndex);
  }

  let allTags: Array<string> = [];
  allPosts.map((post) => {
    if (post.tags) {
      allTags.push(...post.tags); // 태그 배열을 추가
    }
  });

  //allTags의 중복 값들 제거
  const tags = allTags.filter((v, i) => allTags.indexOf(v) === i);
  console.log(pagination);

  //페이지수가 총 3페이지라면 0~2 배열 생성
  let pageIntoArray = Array.from(Array(pagination).keys());

  return (
    <>
      <div className="pt-32 mx-auto">
        <TagCard searchParams={searchParams} tags={tags} />
        <div className="prose mx-auto pl-5 max-sm:ml-5">
          {searchParams.tag !== "ALL" ? (
            <h4>
              {searchParams.tag} 게시글 수: {postCount}개
            </h4>
          ) : (
            <h4>전체 게시글 수: {postCount}개</h4>
          )}
        </div>
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
        <div className="prose mx-auto text-center">
          {pageIntoArray.map((page) => {
            return (
              <li key={page} className="inline-block mr-5">
                <Link
                  href={
                    page === 0
                      ? `/posts?tag=${searchParams.tag}`
                      : `/posts?tag=${searchParams.tag}&page=${page + 1}`
                  }
                  className={`no-underline ${
                    parseInt(searchParams.page) === page + 1 || (page===0)&&(!searchParams.page)
                      ? "text-sky-500"
                      : "no-underline text-black"
                  }`}
                >
                  {page + 1}
                </Link>
              </li>
            );
          })}
        </div>
      </div>
    </>
  );
}
