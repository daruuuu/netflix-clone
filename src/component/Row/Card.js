import React from "react";
import Modal from "./Modal";
import styles from "./Row.module.css";

const Card = (props) => {
  const [wish, setWish] = React.useState(false);

  const handleWish = () => {
    setWish(!wish);
  };

  return (
    <>
      <img
        key={props.id}
        onClick={handleWish}
        className={`${styles.poster} && ${styles.posterLarge}`}
        src={props.img}
        alt={props.name}
      />
      {wish && <Modal wish={props.wish} />}
    </>
  );
};

export default Card;
