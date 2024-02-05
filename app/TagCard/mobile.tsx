import Link from "next/link";

export const TagCardMobile = ({
  searchParams,
  tags,
}: {
  searchParams: any;
  tags: Array<string>;
}) => {
  return (
    <>
      <div className="tagCardMobile max-w-[640px] pt-32 flex overflow-auto mx-auto pb-3 max-sm:mx-5">
        {tags.map((tag: any, idx: any) => (
          <Link
            href={tag === "C++" ? `/?tag=C%2B%2B` : `/?tag=${tag}`}
            key={idx}
          >
            <button
              className={`ml-1 rounded-md text-black text-sm px-7 py-2 ${
                tag === searchParams?.tag
                ? "bg-amber-300 text-white"
                : "hover:bg-gray-400 bg-gray-200 text-black"
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
