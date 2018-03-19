import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled, { keyframes } from "styled-components";
import { generateSearchTerm, searchTerms } from "../logic";
import { mapColor } from "../logic";
import { fetchPictures } from "../actions/index";

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
class ColorCard extends Component {
  render() {
    return (
      <Card
        style={{ backgroundColor: mapColor(this.props.color) }}
        onClick={() =>
          this.props.fetchPictures(
            this.props.color,
            searchTerms[generateSearchTerm(searchTerms)]
          )
        }
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchPictures }, dispatch);
};

export default connect(null, mapDispatchToProps)(ColorCard);
