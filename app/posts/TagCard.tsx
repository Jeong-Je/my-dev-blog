import Link from "next/link";

export const TagCard = ({
    searchParams,
    tags,
  }: {
    searchParams: any;
    tags: Array<string>;
  }) => {
    return (
      <>
        <div className="flex overflow-auto prose mx-auto mb-8 pb-3 max-sm:mx-5">
          <Link href="/posts?tag=ALL">
            <button
              className={`ml-1 rounded-md border border-gray-200 outline outline-gray-200 bg-gray-200 text-black text-sm px-4 mr-3 ${
                searchParams.tag === "ALL"
                  ? "outline-gray-500 bg-gray-500 border-gray-500 text-white"
                  : "hover:outline-gray-400 hover:bg-gray-400 hover:border-gray-400"
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
                className={`rounded-md border border-gray-200 outline outline-gray-200 bg-gray-200 text-black text-sm px-4 mr-3 whitespace-nowrap ${
                  tag === searchParams?.tag
                    ? "outline-gray-500 bg-gray-500 border-gray-500 hover:outline-gray-500 hover:bg-gray-500 hover:border-gray-500 text-white"
                    : "hover:outline-gray-400 hover:bg-gray-400 hover:border-gray-400"
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