// SearchResults.js
import { useEffect } from "react";
import { useSearchContext } from "../SearchContext";

const SearchResults = () => {
  const { searchResults } = useSearchContext();

  useEffect(() => {
    // Do something with the searchResults
    console.log("Search Results:", searchResults);
  }, [searchResults]);

  return (
    <div>
      {/* Render your search results here */}
      <h1>Search Results</h1>
    </div>
  );
};

export default SearchResults;
