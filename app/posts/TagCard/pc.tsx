import Link from "next/link";

export const TagCardPc = ({
  searchParams,
  tags,
}: {
  searchParams: any;
  tags: Array<string>;
}) => {
  // console.log(tags);
  return (
    <>
      <h3 className="text-white my-0">
        📒 tags <small className="text-white">({tags.length})</small>
      </h3>
      <div className="tagCardPc flex flex-col overflow-auto h-[266px]">
        {tags.map((tag: any, idx: any) => (
          <Link
            href={tag === "C++" ? `/posts/?tag=C%2B%2B` : `/posts/?tag=${tag}`}
            key={idx}
          >
            <button
              className={`w-28 mb-2 text-sm py-3 rounded-lg ${
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
