import { useEffect, useState } from "react";
import API_KEY from "./keys";

const searchEngineId = "76ad510acf79a4a2c";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(`https://www.googleapis.com/customsearch/v1?
      key=${API_KEY}&cx=${searchEngineId}&q=${term}
      `)
        .then((response) => response.json)
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);

  return data;
};

export default useGoogleSearch;
