import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <h1 className="text-center text-2xl mt-52">ExploreX</h1>
        <Search />
        {/* <Footer /> */}
      </>
    </Router>
  );
}

export default App;
