const SearchField = () => {
  const onClickButton = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className="max-w-xl self-center w-full px-2 pb-2 md:px-0"
      onSubmit={onClickButton}
    >
      <div className="relative w-full">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400  hover:text-red-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="voice-search"
          className="focus:ring-1 focus:ring-red-500 focus:outline-none w-full text-sm leading-6 text-gray-900 bg-gray-100 rounded-sm placeholder-gray-500 py-1 pl-10 ring-0 ring-slate-200 shadow-sm"
          placeholder="Search..." 
          required
        />
        <button
          onClick={onClickButton}
          type="button"
          className="flex absolute inset-y-0 right-0 items-center pr-3"
        >
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-red-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchField;
