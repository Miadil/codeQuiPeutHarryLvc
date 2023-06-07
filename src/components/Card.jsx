import "./Card.css";

const Card = (props) => {
  const { name, image } = props;
  return (
    <div className="cardGlobal">
      <img className="cardImg" src={image} alt="poulet roux" />
      <p>{name}</p>
    </div>
  );
};

export default Card;
