// app/posts/[slug]/page.tsx
import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { notFound } from 'next/navigation'
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import ScrollIndicator from "@/app/components/ScrollIndicator";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();
  return { title: post.title, description: post.description };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();
  const tags = post.tags;
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <>
      {/* 포스트 페이지에서만 ScrollIndicator 활성화 */}
      <ScrollIndicator /> 
      
      {/* 본문 (추후 구조 수정 필요) */}
      <div className="pt-24 mx-auto prose max-sm:mx-5">
        <div className="flex">
          <h1 className="pt-5 pb-0 text-4xl">
            {post.title}
            <br />
            <time dateTime={post.date} className="text-sm text-zinc-400 ">
              {format(parseISO(post.date), "yyyy년 MM월 dd일")}
            </time>
            <div>
              {tags?.map((tag, idx) => (
                <Link href={tag === "C++" ? `/?tag=C%2B%2B` : `/?tag=${tag}`} key={idx}>
                  <button className="rounded-full bg-gray-200 hover:bg-gray-300 text-black text-sm px-4 py-1 mr-3">
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