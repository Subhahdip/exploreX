// SearchResults.js
import React, { useEffect } from "react";
import { useSearchContext } from "../SearchContext";

const SearchResults = () => {
  const { searchTerm } = useSearchContext();

  useEffect(() => {
    // Now 'searchTerm' contains the search term from the context
    console.log("Search Results for:", searchTerm);
  }, [searchTerm]);

  return (
    <div>
      <h1>Search Results for: {searchTerm}</h1>
      {/* Render the search results here */}
    </div>
  );
};

export default SearchResults;
