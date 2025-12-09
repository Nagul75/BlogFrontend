const SearchInput = () => {
  return (
    <div className="absolute top-0 left-0 w-full">
      <div className="flex w-[80%] border-l dark:border-l-neutral-800 border-l-neutral-500 relative">
        <div className="absolute top-0 left-72">
          <div className="relative z-10 -translate-x-1/2 px-4 py-2 rounded-md flex items-center dark:bg-neutral-800 bg-neutral-100 border-4 gap-2 min-w-[180px] border-[hsl(0_0%_75%)] dark:border-[hsl(0_0%_18%)] dark:border-4  shadow-neutral-800">
            <svg
              /* Search Icon */ className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              className="bg-transparent focus:outline-none w-full dark:text-neutral-200"
              placeholder="Search Posts"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
