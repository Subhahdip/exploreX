// SearchContext.js
import { createContext, useContext, useReducer } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ reducer, initialState, children }) => {
  return (
    <SearchContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
