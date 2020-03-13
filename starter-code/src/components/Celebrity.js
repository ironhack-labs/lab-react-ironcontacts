import React from "react";
import {
  CelebrityItems,
  CelebrityImage,
  DeleteCelebrity
} from "../styles/CelebrityItems";

export const Celebrity = ({ picture, name, popularity, id, removeC }) => {
  return (
    <CelebrityItems>
      <CelebrityImage>
        <img src={picture} />
      </CelebrityImage>
      <p>{name}</p>
      <p>{popularity.toFixed(2)}</p>
      <DeleteCelebrity onclick={() => removeC(id)}>delete</DeleteCelebrity>
    </CelebrityItems>
  );
};
