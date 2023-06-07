import { useEffect, useState } from "react";

import Card from "../components/Card";

const Characters = () => {
  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    fetch("https://miadil.github.io/HarryPotterApi/api/json/characters.json")
      .then((poulet) => poulet.json())
      .then((res) => console.log(res) || setPeoples(res));
  }, []);

  return (
    <>
      {peoples.map((people) => {
        return <Card name={people.name} image={people.image} key={people.id} />;
      })}
    </>
  );
};

export default Characters;
