import Link from "next/link";

export const Pagination = ({
    searchParams,
    page,
  }: {
    searchParams: any;
    page: number;
  }) => {
    return (
      <Link href={`/?tag=${searchParams.tag}&page=${page + 1}`}>
        <div
          className={`prose w-10 h-10 text-center ${
            parseInt(searchParams.page) === page + 1
              ? "bg-gray-200 text-black"
              : "hover:bg-gray-500 text-white"
          } rounded-md flex items-center justify-center`}
        >
          {page + 1}
        </div>
      </Link>
    );
  };