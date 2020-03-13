import React from "react";
import { CelebrityItems, CelebrityImage } from "../styles/CelebrityItems";

export const Celebrity = props => {
  return (
    <CelebrityItems>
      <CelebrityImage>
        <img src={props.picture} />
      </CelebrityImage>
      <p>{props.name}</p>
      <p>{props.popularity}</p>
    </CelebrityItems>
  );
};
