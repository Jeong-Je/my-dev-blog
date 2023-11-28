import Link from "next/link";

export const TagCardPc = ({
  searchParams,
  tags,
}: {
  searchParams: any;
  tags: Array<string>;
}) => {
  return (
    <>
      <h3 className="tagCardPc text-white my-0">
        📒 tags <small className="text-white">({tags.length})</small>
      </h3>
      <div
        className="tagCardPc flex flex-col overflow-auto"
        style={{ height: "266px" }}
      >
        <Link href="/posts?tag=ALL">
          <button
            className={`ml-1 w-28 mb-3 rounded-sm text-sm ${
              searchParams.tag === "ALL"
                ? "outline outline-amber-300 bg-amber-300 border border-amber-300 text-white"
                : "hover:outline-gray-400 hover:bg-gray-400 hover:border-gray-400 border border-gray-200 outline outline-gray-200 bg-gray-200 text-black"
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
              className={`ml-1 w-28 mb-3 rounded-sm text-sm ${
                tag === searchParams?.tag
                  ? "outline outline-amber-300 bg-amber-300 border border-amber-300 text-white"
                  : "hover:outline-gray-400 hover:bg-gray-400 hover:border-gray-400 border border-gray-200 outline outline-gray-200 bg-gray-200 text-black"
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
