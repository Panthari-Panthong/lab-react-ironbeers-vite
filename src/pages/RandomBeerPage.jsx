import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

const RandomBeerPage = () => {
  const [randomBeer, setRandomBeer] = useState([]);

  const beerDetail = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );

      if (response.status === 200) {
        await setRandomBeer(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    beerDetail();
  }, []);
  return (
    <>
      <Navbar />
      <div>
        <img src={randomBeer.image_url} alt={randomBeer.name} />
        <div>
          <h1>{randomBeer.name}</h1>
          <p>{randomBeer.attenuation_level}</p>
        </div>

        <div>
          <p>{randomBeer.tagline}</p>
          <p>{randomBeer.first_brewed}</p>
        </div>
        <p>{randomBeer.description}</p>
        <p>{randomBeer.contributed_by}</p>
      </div>
    </>
  );
};

export default RandomBeerPage;
