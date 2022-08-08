import imgSrc from "./assets/tea.jpg";
import imgSrc2 from "./assets/yadegari.jpg";
import imgSrc3 from "./assets/somepeoples.jpg";
import tea from "./assets/tea.mp3";
import yadegari from "./assets/yadegari.mp3";
import somepeoples from "./assets/somepeoples.mp3";

// All of these artists are at https://pixabay.com/music/search/mood/laid%20back/
export default [
  {
    title: "Like A tea",
    artist: "Tohid",
    audioSrc: tea,
    image: imgSrc,
    color: "#00aeb0",
  },
  {
    title: "yadegari",
    artist: "Tohid",
    audioSrc: yadegari,
    image: imgSrc2,
    color: "#ffb77a",
  },
  {
    title: "Some Peoples",
    artist: "Tohid",
    audioSrc: somepeoples,
    image: imgSrc3,
    color: "#5f9fff",
  },
];
