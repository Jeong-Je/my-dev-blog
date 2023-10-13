import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { TagCard } from "./TagCard";
import { PostCard } from "./PostCard";
import { Pagination } from "./Pagination";

export default function Home({ searchParams }: { searchParams: any }) {
  // console.log('1',searchParams);
  if (!searchParams.tag) {
    searchParams.tag = "ALL";
  }
  if (!searchParams.page) {
    searchParams.page = "1";
  }
  // console.log('2',searchParams);

  // 게시글 날짜 순으로 불러오기
  let allPostsData = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  // 태그카드에 사용될 태그 배열
  let allTags: Array<string> = [];

  allPostsData.map((post) => {
    if (post.tags) {
      allTags.push(...post.tags); // 태그 배열을 추가
    }
  });

  //allTags의 중복 값들 제거
  const tags = allTags.filter((v, i) => allTags.indexOf(v) === i);


  //태그에 맞는 게시글 불러오기
  if (searchParams.tag !== "ALL") {
    allPostsData = allPostsData.filter((p) =>
      p.tags?.includes(searchParams?.tag)
    );
  }

  const postCount = allPostsData.length;

  /* 페이지 네이션 */
  const pagination = Math.ceil(allPostsData.length / 5);

  if (postCount > 1) {
    const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;
    const postsPerPage = 5;

    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = currentPage * postsPerPage;

    allPostsData = allPostsData.slice(startIndex, endIndex);
  }

  //페이지수가 총 3페이지라면 0~2 배열 생성
  let pageIntoArray = Array.from(Array(pagination).keys());

  return (
    <>
      <div className="pt-32 mx-auto">
        {/* 태그 카드 컴포넌트 */}
        <TagCard searchParams={searchParams} tags={tags} />
        <div className="prose mx-auto px-5 max-sm:mx-5">
          {searchParams.tag !== "ALL" ? (
            <h3 style={{color: "white"}}>
              📝 {searchParams.tag} ({postCount})
            </h3>
          ) : (
            <h3 style={{color: "white"}}>📝 All Posts ({postCount})</h3>
          )}
        </div>

        {/* 게시글 컴포넌트 */}
        {allPostsData.map((post, idx) => (
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
