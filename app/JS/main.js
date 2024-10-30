import "../CSS/style.css";
import "../CSS/variable.css";
import { motleyCrueSongs } from "./songs.js";

const songContainer = document.getElementById("song-container");

motleyCrueSongs.forEach((song) => {
  const card = `
    <div class="card card-ani">
      <h2>${song.name}</h2>
      <img class="images" src="${song.imageUrl}" alt="${song.altText}" />
      <h3>Album: ${song.album}</h3>
      <p>Release Year: ${song.releaseYear}</p>
      <p>Times Played: ${song.timesPlayed}</p>
    </div>
  `;
  songContainer.innerHTML += card;
});
