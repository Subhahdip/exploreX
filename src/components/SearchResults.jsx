import { useSearchContext } from "../SearchContext";
import useGoogleSearch from "../useGoogleSearch";
import Search from "./Search";

const SearchResults = () => {
  const [{ term }, dispatch] = useSearchContext();
  const { data } = useGoogleSearch(term);

  if (!data || !data.searchInformation) {
    // If data is still being fetched or doesn't have the expected structure,
    // you can display a loading message or handle it accordingly
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Search />
      <p>
        About {data.searchInformation.formattedTotalResults} results in{" "}
        {data.searchInformation.formattedSearchTime} seconds for {term}{" "}
      </p>
      <div className="mt-8">
        {data.items.map((item) => (
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
