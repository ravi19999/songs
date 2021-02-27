import React from "react";
import SongList from "./SongsList";
import SongDetail from "./SongDetail";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
