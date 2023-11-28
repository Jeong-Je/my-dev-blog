// app/posts/[slug]/page.tsx
import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import ScrollIndicator from "@/app/components/ScrollIndicator";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title, description: post.description };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  const tags = post.tags;
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <>
      {/* 포스트 페이지에서만 ScrollIndicator 활성화 */}
      <ScrollIndicator /> 
      
      {/* 본문 (추후 구조 수정 필요) */}
      <div className="pt-24 mx-auto prose max-sm:mx-5" style={{width: '640px'}}>
        <div className="flex">
          <h1 className="pt-5 pb-0 text-4xl font-bold">
            {post.title}
            <br />
            <time dateTime={post.date} className="ml-2 text-sm text-zinc-400 ">
              {format(parseISO(post.date), "yyyy년 MM월 dd일")}
            </time>
            <div>
              {tags?.map((tag, idx) => (
                <Link href={tag === "C++" ? `/posts/?tag=C%2B%2B` : `/posts/?tag=${tag}`} key={idx}>
                  <button className="rounded-full border border-gray-200 hover:border-gray-300 outline outline-gray-200 hover:outline-gray-300 bg-gray-200 hover:bg-gray-300 text-black text-sm px-4 mr-3">
                    {tag}
                  </button>
                </Link>
              ))}
            </div>
          </h1>
        </div>
        <article className="prose-hr:my-5">
          <MDXContent />
        </article>
      </div>
    </>
  );
};

export default PostLayout;