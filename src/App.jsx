import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import BeersPage from "./pages/BeersPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import NewBeerPage from "./pages/NewBeerPage";
import RandomBeerPage from "./pages/RandomBeerPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeersPage />} />
        <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<NewBeerPage />} />
      </Routes>
    </div>
  );
}

export default App;
