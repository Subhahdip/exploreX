import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
// import SearchResults from "./components/SearchResults"; // Import the SearchResults component

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for /search page */}
        <Route
          path="/search"
          element={<h1>This is the searchResult page</h1>}
        />

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
    </Router>
  );
}

export default App;
