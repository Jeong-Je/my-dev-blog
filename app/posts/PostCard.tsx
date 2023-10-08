import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Post } from "contentlayer/generated";


export const PostCard = (post: Post) => {
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
  