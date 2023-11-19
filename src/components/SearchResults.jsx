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
      <div className="mt-8">
        {mockResponse.items.map((item) => (
          <div key={item.link} className="mb-6">
            <a
              href={item.link}
              className="text-green-700 text-sm hover:underline"
            >
              {item.link}
            </a>
            <br />
            <a
              href={item.link}
              className="text-blue-700 text-xl font-medium hover:underline"
            >
              {item.title}
            </a>

            <p className="text-gray-700 mt-2">{item.snippet}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
