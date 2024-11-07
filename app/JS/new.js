import "../CSS/style.css";
import "../CSS/variable.css";
import { motleyCrueSongs } from "./songs.js";

const songContainer = document.getElementById("song-container");

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

function displaySongs(albumFilter) {
  songContainer.innerHTML = motleyCrueSongs
    .filter((song) => !albumFilter || song.album === albumFilter)
    .map(createSongCard)
    .join("");
}

function displaySongs2(timesPlayed) {
  songContainer.innerhtml = motleyCrueSongs;
}

displaySongs();

document.querySelector("#btn-0").addEventListener("click", function () {
  const classesToRemove = [
    "dr_feelgood",
    "dirt_soundtrack",
    "shout_devil",
    "too_fast",
  ];

  if (classesToRemove.some((cls) => document.body.classList.contains(cls))) {
    document.body.classList.add("all_songs");
    document.body.classList.remove(...classesToRemove);

    displaySongs();
  }
});

document.querySelector("#btn-1").addEventListener("click", function () {
  const classesToRemove = [
    "all_songs",
    "dirt_soundtrack",
    "shout_devil",
    "too_fast",
  ];

  if (classesToRemove.some((cls) => document.body.classList.contains(cls))) {
    document.body.classList.add("dr_feelgood");
    document.body.classList.remove(...classesToRemove);

    displaySongs("Dr. Feelgood");
  }
});

document.querySelector("#btn-2").addEventListener("click", function () {
  const classesToRemove = [
    "all_songs",
    "dr_feelgood",
    "shout_devil",
    "too_fast",
  ];

  if (classesToRemove.some((cls) => document.body.classList.contains(cls))) {
    document.body.classList.add("dirt_soundtrack");
    document.body.classList.remove(...classesToRemove);

    displaySongs("The Dirt Soundtrack");
  }
});

document.querySelector("#btn-3").addEventListener("click", function () {
  const classesToRemove = [
    "all_songs",
    "dirt_soundtrack",
    "dr_feelgood",
    "too_fast",
  ];

  if (classesToRemove.some((cls) => document.body.classList.contains(cls))) {
    document.body.classList.add("shout_devil");
    document.body.classList.remove(...classesToRemove);

    displaySongs("Shout at the Devil");
  }
});

document.querySelector("#btn-4").addEventListener("click", function () {
  const classesToRemove = [
    "all_songs",
    "dirt_soundtrack",
    "shout_devil",
    "dr_feelgood",
  ];

  if (classesToRemove.some((cls) => document.body.classList.contains(cls))) {
    document.body.classList.add("too_fast");
    document.body.classList.remove(...classesToRemove);

    displaySongs("Too Fast for Love");
  }
});
