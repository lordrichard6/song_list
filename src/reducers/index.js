import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Cançao do engate", duration: "4:05" },
    { title: "A minha casinha", duration: "3:35" },
    { title: "Vida de Marinheiro", duration: "2:14" },
    { title: "Chiclete", duration: "3:05" },
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
