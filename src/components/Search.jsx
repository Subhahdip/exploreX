import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { useState } from "react";
import { Button } from "@mui/material";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="flex items-center mt-4 border rounded-3xl border-slate-500 hover:shadow-lg px-5 my-0 mx-auto max-w-md">
        <SearchIcon className="mr-2" />
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Start Typing..."
          className="flex-grow focus:outline-none py-2"
        />
        <MicIcon className="ml-2" />
      </div>
      <Button className="" variant="contained">
        search
      </Button>
    </>
  );
};

export default Search;
