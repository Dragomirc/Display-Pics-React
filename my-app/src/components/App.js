import React from "react";

import ColorCardList from "./ColorCardList";
import ImageCardList from "../containers/ImageCardList";
import Header from "./Header";

const App = props => {
  return (
    <div style={{ maxWidth: 640 }}>
      <Header />
      <div>
        <ColorCardList />
      </div>
      <div>
        <ImageCardList />
      </div>
    </div>
  );
};

export default App;
