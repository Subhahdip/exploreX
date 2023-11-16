import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchContext } from "../SearchContext";
import { actionTypes } from "../reducer";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [{}, dispatch] = useSearchContext();
  const handleSearch = () => {
    navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    console.log(searchTerm);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: searchTerm,
    });
  };

  return (
    <>
      <div className="flex items-center mt-4 border rounded-3xl border-slate-500 hover:shadow-lg px-5 my-0 mx-auto max-w-md">
        <SearchIcon className="mr-2" />
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSearch();
            }
          }}
          placeholder="Start Typing..."
          className="flex-grow focus:outline-none py-2"
        />
        <MicIcon className="ml-2" />
      </div>
      <div className="text-center mt-3">
        <button
          onClick={handleSearch}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-whit focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          <span className="relative px-8 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
            Search
          </span>
        </button>
      </div>
    </>
  );
};

export default Search;
