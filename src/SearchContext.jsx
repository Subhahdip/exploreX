// SearchContext.js
import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

const SearchContext = createContext();

export const SearchProvider = ({ reducer, initialState, children }) => {
  return (
    <SearchContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </SearchContext.Provider>
  );
};

SearchProvider.propTypes = {
  reducer: PropTypes.func.isRequired,
  initialState: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export const useSearchContext = () => useContext(SearchContext);
