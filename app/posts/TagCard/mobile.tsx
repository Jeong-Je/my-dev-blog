import Link from "next/link";

export const TagCardMobile = ({
  searchParams,
  tags,
}: {
  searchParams: any;
  tags: Array<string>;
}) => {
  if (searchParams.tag) {
    tags.unshift("ALL");
  }
  // console.log(tags);
  return (
    <>
      <div className="tagCardMobile max-w-[640px] pt-32 flex overflow-auto mx-auto pb-3 max-sm:mx-5">
        {tags.map((tag: any, idx: any) => (
          <Link
            href={tag === "C++" ? `/posts/?tag=C%2B%2B` : `/posts/?tag=${tag}`}
            key={idx}
          >
            <button
              className={`ml-1 rounded-md bg-gray-200 text-black text-sm px-7 py-2 ${
                tag === searchParams?.tag
                ? "bg-gray-500 text-white"
                : "hover:bg-gray-400"
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
