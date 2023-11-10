import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <>
      <Navbar />
      <h1 className="text-center text-2xl mt-52">ExploreX</h1>
      <Search />
    </>
  );
}

export default App;
