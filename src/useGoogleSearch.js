import { useEffect, useState } from "react";
import API_KEY from "./keys";

const searchEngineId = "76ad510acf79a4a2c";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${searchEngineId}&q=${term}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    if (term) {
      fetchData();
    } else {
      // Clear the data if the search term is empty
      setData(null);
    }
  }, [term]);

  return { data };
};

export default useGoogleSearch;
