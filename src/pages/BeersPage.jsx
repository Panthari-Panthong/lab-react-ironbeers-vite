import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const BeersPage = () => {
  const [beers, setBeers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const getAllBeers = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );

      if (response.status === 200) {
        setBeers(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${inputValue}`
      );

      if (response.status === 200) {
        setBeers(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBeers();
  }, [setBeers]);

  return (
    <div>
      <Navbar />
      <h1>All Beers</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
          placeholder="Search by the title ..."
        />
        <button type="submit">Search!</button>
      </form>

      {beers.map((beer) => {
        return (
          <div key={beer._id} className="beers-container">
            <div className="beer-img">
              <img src={beer.image_url} alt={beer.name} />
            </div>
            <div className="beer-details">
              <Link to={`/beers/${beer._id}`}>
                <h3>{beer.name}</h3>
              </Link>
              <p>{beer.tagline}</p>
              <p>{beer.contributed_by}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BeersPage;
