import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const NewBeerPage = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState(1);
  const [contributed_by, setContributed_by] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newBeer = {
        name,
        tagline,
        description,
        first_brewed,
        brewers_tips,
        setAttenuation_level: Number(attenuation_level),
        contributed_by,
      };
      const response = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        newBeer
      );
      if (response.status === 200) {
        setName("");
        setTagline("");
        setDescription("");
        setFirst_brewed("");
        setBrewers_tips("");
        setAttenuation_level(1);
        setContributed_by("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <form onSubmit={handleSubmit}>
          <label>Name : </label>
          <input
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />

          <label>Tagline : </label>
          <input
            type="text"
            value={tagline}
            onChange={(event) => {
              setTagline(event.target.value);
            }}
          />

          <label>Description : </label>
          <textarea
            type="text"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />

          <label>First brewed : </label>
          <input
            type="text"
            value={first_brewed}
            onChange={(event) => {
              setFirst_brewed(event.target.value);
            }}
          />

          <label>Brewers tips : </label>
          <input
            type="text"
            value={brewers_tips}
            onChange={(event) => {
              setBrewers_tips(event.target.value);
            }}
          />

          <label>Attenuation level : </label>
          <input
            type="number"
            value={attenuation_level}
            onChange={(event) => {
              setAttenuation_level(event.target.value);
            }}
          />

          <label>Contributed_by : </label>
          <input
            type="text"
            value={contributed_by}
            onChange={(event) => {
              setContributed_by(event.target.value);
            }}
          />
          <button type="submit">Create!</button>
        </form>
      </div>
    </>
  );
};

export default NewBeerPage;
