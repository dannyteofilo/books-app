import React from "react";
import BookVolume from "../../interfaces/book";
import defaultImage from "../../assets/images/books.svg";
import "./styles.css";

const Card: React.FC<{ volumeInfo: BookVolume["volumeInfo"] }> = ({
  volumeInfo,
}) => {
  return (
    <div className="card">
      <img
        className="card-image"
        src={
          volumeInfo?.imageLinks?.thumbnail
            ? volumeInfo.imageLinks.thumbnail
            : defaultImage
        }
        alt=""
      />
      <h2 className="title">{volumeInfo.title}</h2>
      <span className="authors">{volumeInfo.authors}</span>
      <p className="description">{volumeInfo.description}</p>
    </div>
  );
};

export default Card;
