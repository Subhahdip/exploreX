// SearchResults.js
import { useSearchContext } from "../SearchContext";
import useGoogleSearch from "../useGoogleSearch";

const SearchResults = () => {
  const [{ term }, dispatch] = useSearchContext();
  const data = useGoogleSearch(term);

  console.log(data);
  return (
    <div>
      <h1>Search Results for: {term}</h1>
      {/* Render the search results here */}
    </div>
  );
};

export default SearchResults;
