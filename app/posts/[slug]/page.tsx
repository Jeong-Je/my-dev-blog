// app/posts/[slug]/page.tsx
import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  const tags = post.tags;
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <article className="pt-24 mx-auto prose prose-a:bg-green-400 prose-a:no-underline prose-blockquote:border-l-emerald-400 max-sm:mx-5">
      <div className="flex items-center">
        <h1 className="pt-5 text-5xl font-bold">{post.title}</h1>
        <time dateTime={post.date} className="ml-2 text-xs text-gray-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <br />
      </div>
      <MDXContent />
      {tags?.map((tag, idx) => (
              <button className="rounded-full border border-gary-500 bg-gray-200 text-black text-sm px-4 mr-2" key={idx}>{tag}</button>
            ))}
    </article>
  );
};

export default PostLayout;
