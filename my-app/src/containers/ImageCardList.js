import React, { Component } from "react";
import { connect } from "react-redux";
import ImageCard from "../components/ImageCard";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  justify-content: space-around;
`;
class ImageCardList extends Component {
  renderImages = imagesArray =>
    imagesArray
      .slice(0, 5)
      .map(({ previewURL, pageURL, id, tags }) => (
        <ImageCard previewURL={previewURL} key={id} url={pageURL} tags={tags} />
      ));

  render() {
    console.log("pictures", this.props.pictures);
    return <List>{this.renderImages(this.props.pictures)}</List>;
  }
}
const mapStateToProps = ({ pictures }) => {
  return {
    pictures
  };
};
export default connect(mapStateToProps)(ImageCardList);
