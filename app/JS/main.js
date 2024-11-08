import "../CSS/style.css";
import "../CSS/variable.css";
import { motleyCrueSongs } from "./songs.js";

function createSongCard(song) {
  return `
      <div class="card card-ani">
        <h2>${song.name}</h2>
        <img class="images" src="${song.imageUrl}" alt="${song.altText}" />
        <h3>Album: ${song.album}</h3>
        <p>Release Year: ${song.releaseYear}</p>
        <p>Times Played: ${song.timesPlayed}</p>
      </div>
    `;
}

function displaySorted(songs) {
  songContainer.innerHTML = songs.map(createSongCard).join("");
}

document
  .querySelector("#btn-filterLowToHigh")
  .addEventListener("click", function () {
    const sortedSongs = [...motleyCrueSongs].sort(
      (a, b) => a.timesPlayed - b.timesPlayed
    );
    displaySorted(sortedSongs);
  });

document
  .querySelector("#btn-filterHighToLow")
  .addEventListener("click", function () {
    const sortedSongs = [...motleyCrueSongs].sort(
      (a, b) => b.timesPlayed - a.timesPlayed
    );
    displaySorted(sortedSongs);
  });

document
  .querySelector("#btnclearFilters")
  .addEventListener("click", function () {
    displaySorted();
  });

