import React from "react";
import BookVolume from "../../interfaces/book";

const Card: React.FC<{ volumeInfo: BookVolume["volumeInfo"] }> = ({
  volumeInfo,
}) => {
  return (
    <div>
      <img src={volumeInfo?.imageLinks?.thumbnail} alt="" />
      <h2>{volumeInfo.title}</h2>
      <p>{volumeInfo.description}</p>
    </div>
  );
};

export default Card;
