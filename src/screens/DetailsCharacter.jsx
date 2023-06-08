import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsCharacter = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  const getData = () => {
    fetch(`https://miadil.github.io/HarryPotterApi/api/json/id/${id}.json`)
      .then((res) => res.json())
      .then((res) => setDetail(res[0]));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      je suis dans le fichier details character
      <p>{detail.name}</p>
    </>
  );
};
export default DetailsCharacter;
