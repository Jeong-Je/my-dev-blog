import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

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
            className={`ml-1 rounded-full border border-gray-200 outline outline-gray-200 bg-gray-200 text-black text-sm px-4 mr-3 ${
              searchParams.tag === "ALL"
                ? "outline-gray-500 bg-gray-500 border-gray-500 text-white"
                : "hover:outline-gray-400 hover:bg-gray-400 hover:border-gray-400"
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
              className={`rounded-full border border-gray-200 outline outline-gray-200 bg-gray-200 text-black text-sm px-4 mr-3 whitespace-nowrap ${
                tag === searchParams?.tag
                  ? "outline-gray-500 bg-gray-500 border-gray-500 hover:outline-gray-500 hover:bg-gray-500 hover:border-gray-500 text-white"
                  : "hover:outline-gray-400 hover:bg-gray-400 hover:border-gray-400"
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
            <span key={idx} className="pt-3 pr-4 no-underline text-red-700">
              #{tag}
            </span>
          ))}
        </div>
      </Link>
    </div>
  );
};

const Pagination = ({
  searchParams,
  page,
}: {
  searchParams: any;
  page: number;
}) => {
  return (
    <Link href={`/posts?tag=${searchParams.tag}&page=${page + 1}`}>
      <div
        className={`prose w-10 h-10 text-center ${
          parseInt(searchParams.page) === page + 1
            ? "bg-gray-500 text-white"
            : "hover:bg-gray-200"
        } rounded-md flex items-center justify-center`}
      >
        {page + 1}
      </div>
    </Link>
  );
};

export default function Home({ searchParams }: { searchParams: any }) {
  // console.log('1',searchParams);
  if (!searchParams.tag) {
    searchParams.tag = "ALL";
  }
  if (!searchParams.page) {
    searchParams.page = "1";
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
  // console.log(pagination);

  //페이지수가 총 3페이지라면 0~2 배열 생성
  let pageIntoArray = Array.from(Array(pagination).keys());

  return (
    <>
      <div className="pt-32 mx-auto">
        {/* 태그 카드 컴포넌트 */}
        <TagCard searchParams={searchParams} tags={tags} />
        <div className="prose mx-auto px-5 max-sm:mx-5">
          {searchParams.tag !== "ALL" ? (
            <h4>
              {searchParams.tag} ({postCount})
            </h4>
          ) : (
            <h4>All Posts ({postCount})</h4>
          )}
        </div>
        
        {/* 게시글 컴포넌트 */}
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}

        {/* 페이지 네이션 컴포넌트 */}
        <div className="flex justify-center">
          {pageIntoArray.map((page, idx) => (
            <Pagination key={idx} searchParams={searchParams} page={page} />
          ))}
        </div>
      </div>
    </>
  );
}
