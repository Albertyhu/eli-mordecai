import { useState, useEffect, useRef } from "react";
import type { ReactElement } from "react";
import RenderRecentSearch from "./recentSearches";

const SearchBar = (): ReactElement => {
  const [query, setQuery] = useState<string>("");
  const [historyResults, setSearchHistory] = useState<Array<string>>([]);
  const inputRef = useRef(null);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target?.value);
  };

  const submitSearch = () => {
    const data = localStorage.getItem("searchHistory");
    var arr = data ? JSON.parse(data) : [];
    if (query.trim() != "") {
      console.log("query: ", query);
      arr.push(query);
      arr = [...new Set(arr)];
      localStorage.setItem("searchHistory", JSON.stringify(arr));
      window.location.href = `/blog/search/${query}/1`;
    }
    setSearchHistory([]);
  };

  const enterEvent = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitSearch();
    }
  };

  useEffect(() => {
    if (query && query.length > 0) {
      SearchHistory(query, setSearchHistory);
    }
    if (query.length === 0) {
      setSearchHistory([]);
    }
  }, [query]);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-y-5">
        <div
          id="QueryWrapper"
          className="flex bg-[#ffffff] rounded-lg mx-auto w-full border-2 border-solid border-black mr-5 flex-nowrap"
        >
          <input
            type="text"
            placeholder="Type here to search a blog post"
            value={query}
            id="QueryInput"
            className="rounded-lg w-full px-5 SearchInput text-slate-500"
            onChange={(event) => onChangeHandler(event)}
            onKeyDown={enterEvent}
            ref={inputRef}
          />
        </div>
        <button
          type="button"
          id="SearchButton"
          className="border-1 rounded-lg text-white bg-[#5b87e4] active:translate-x-[1px] active:translate-y-[1px] px-4 w-fit mx-auto"
          onClick={submitSearch}
        >
          Search
        </button>
      </div>
      {historyResults && historyResults.length > 0 && (
        <RenderRecentSearch
          setQuery={setQuery}
          historyResults={historyResults}
          setSearchHistory={setSearchHistory}
        />
      )}
    </>
  );
};

export default SearchBar;

const SearchHistory = (
  query: string,
  setSearchHistory: (c: Array<string>) => void
) => {
  const jsonData = localStorage.getItem("searchHistory");
  const searchHistory: Array<string> = jsonData ? JSON.parse(jsonData) : [];
  var arr = searchHistory.filter((item) => item.includes(query));
  setSearchHistory(arr);
};
