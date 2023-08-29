// app/posts/[slug]/page.tsx
import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";

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
      {/* 본문 (추후 구조 수정 필요) */}
      <article className="pt-24 mx-auto prose prose-a:bg-green-400 prose-a:no-underline prose-blockquote:border-l-emerald-400 max-sm:mx-5">
        <div className="flex">
          <h1 className="pt-5 pb-0 text-4xl font-bold">
            {post.title}
            <time dateTime={post.date} className="ml-2 text-xs text-gray-400">
              {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>
            <div className="prose-a:bg-white">
          {tags?.map((tag, idx) => (
            <Link href={`/posts/?tag=${tag}`}>
              <button
                className="rounded-full border border-gary-500 bg-gray-200 hover:bg-gray-400 text-black text-sm px-4 mr-2"
                key={idx}
              >
                {tag}
              </button>
            </Link>
          ))}
        </div>
          </h1>
        </div>
        <MDXContent />
      </article>
    </>
  );
};

export default PostLayout;
