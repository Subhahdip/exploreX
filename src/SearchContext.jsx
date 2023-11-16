// SearchContext.js
import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);

  const updateSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <SearchContext.Provider value={{ searchResults, updateSearchResults }}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearchContext = () => {
  return useContext(SearchContext);
};

export { SearchProvider, useSearchContext };
