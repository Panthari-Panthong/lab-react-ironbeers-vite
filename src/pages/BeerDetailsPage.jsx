import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const BeerDetailsPage = () => {
  const [beer, setBeer] = useState([]);
  const { beerId } = useParams();

  const beerDetail = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );

      if (response.status === 200) {
        setBeer(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    beerDetail();
  }, [beerId]);

  return (
    <>
      <Navbar />
      <div>
        <img src={beer.image_url} alt={beer.name} />
        <div>
          <h1>{beer.name}</h1>
          <p>{beer.attenuation_level}</p>
        </div>

        <div>
          <p>{beer.tagline}</p>
          <p>{beer.first_brewed}</p>
        </div>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
      </div>
    </>
  );
};

export default BeerDetailsPage;
