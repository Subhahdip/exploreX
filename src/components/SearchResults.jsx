// SearchResults.js
import { useSearchContext } from "../SearchContext";
import useGoogleSearch from "../useGoogleSearch";
import mockResponse from "../mockResponse";

const SearchResults = () => {
  const [{ term }, dispatch] = useSearchContext();
  // const data = useGoogleSearch(term);

  console.log(mockResponse);
  return (
    <div>
      <p>
        About {mockResponse.searchInformation.formattedTotalResults} results in{" "}
        {mockResponse.searchInformation.formattedSearchTime} seconds for {term}{" "}
      </p>
    </div>
  );
};

export default SearchResults;
