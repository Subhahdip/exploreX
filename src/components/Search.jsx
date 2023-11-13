import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";

const Search = () => {
  return (
    <div className="text-center mt-4 ">
      <SearchIcon className="" />
      <input
        type="text"
        placeholder="Start typing..."
        className="border w-1/2 rounded-3xl px-14 py-2 border-slate-500 hover:shadow-lg tracking-wide"
      ></input>
      <MicIcon />
    </div>
  );
};

export default Search;
