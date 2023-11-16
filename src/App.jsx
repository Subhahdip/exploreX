// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SearchProvider } from "./SearchContext";
import reducer, { initialState } from "./reducer";
// import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <Router>
      <SearchProvider initialState={initialState} reducer={reducer}>
        <Routes>
          {/* Route for /search page */}
          <Route path="/search" element={<SearchResults />} />

          {/* Default route for the homepage */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <h1 className="text-center text-2xl mt-52">ExploreX</h1>
                <Search />
                {/* <Footer /> */}
              </>
            }
          />
        </Routes>
      </SearchProvider>
    </Router>
  );
}

export default App;
