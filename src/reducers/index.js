import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4.22" },
    { title: "Smells like teen spirit", duration: "1.11" },
    { title: "Have you ever seen the rain", duration: "3.33" },
    { title: "Have you ever seen it", duration: "3.23" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
