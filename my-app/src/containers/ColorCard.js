import React from "react";
import styled, { keyframes } from "styled-components";
import { generateSearchTerm, searchTerms } from "../logic";
import { mapColor } from "../logic";

const fadein = keyframes`
  from { opacity:0; } to { opacity:1; }
`;
const Card = styled.li`
  padding: 1rem;
  margin: 1rem;
  border: 3px dashed white;
  width: 5em;
  height: 5em;
  cursor: pointer;
  animation: ${fadein} ease-in 1;
  animation-fill-mode: forwards;
  animation-duration: 1s;

  opacity: 0;
  &:nth-child(1) {
    animation-delay: 0.4s;
  }
  &:nth-child(2) {
    animation-delay: 0.9s;
  }
  &:nth-child(3) {
    animation-delay: 1.7s;
  }
  &:nth-child(4) {
    animation-delay: 2.4s;
  }
`;
const ColorCard = props => {
  const onColorSelect = (color, searchTerm) => {
    fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${color}+${searchTerm}&image_type=photo`
    )
      .then(res => {
        if (res.status !== 200) {
          console.log("Something went wrong with the request");
        }

        return res.json();
      })
      .then(images => props.info(images))
      .catch(err => {
        throw new Error("Fetching failed");
      });
  };

  return (
    <Card
      style={{ backgroundColor: mapColor(props.color) }}
      onClick={() =>
        onColorSelect(props.color, searchTerms[generateSearchTerm(searchTerms)])
      }
    />
  );
};

export default ColorCard;
