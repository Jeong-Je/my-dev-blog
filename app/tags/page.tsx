import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Link from "next/link";

interface Tags {
  [key: string]: number;
}

export default function Home() {
  // 게시글 날짜 순으로 불러오기
  let allPostsData = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  // 태그카드에 사용될 태그 배열
  let tags: Tags = {};

  // Count occurrences of each tag
  allPostsData.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((tag) => {
        tags[tag] = (tags[tag] || 0) + 1;
      });
    }
  });

  //   console.log(tags);

  return (
    <div className="prose mx-auto pt-32 flex items-center justify-center max-sm:mx-9">
      <h1 className="border pr-3 my-auto border-r-white border-l-0 border-t-0 border-b-0 text-white">
        Tags
      </h1>
      <div className="ml-3 flex flex-wrap prose prose-a:no-underline">
        {Object.keys(tags).map((tag, idx) => (
          <Link key={idx} className="cursor-pointer mr-3" href={tag==="C++"?'/posts?tag=C%2B%2B' : `/posts?tag=${tag}`}>
            {tag}({tags[tag]}){" "}
          </Link>
        ))}
      </div>
    </div>
  );
}
