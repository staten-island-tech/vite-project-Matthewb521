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

    songContainer.innerHTML = "";

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

    songContainer.innerHTML = "";

    motleyCrueSongs.forEach((song) => {
      if (song.album === "Dr. Feelgood") {
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
      }
    });
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

    songContainer.innerHTML = "";

    motleyCrueSongs.forEach((song) => {
      if (song.album === "The Dirt Soundtrack") {
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
      }
    });
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

    songContainer.innerHTML = "";

    motleyCrueSongs.forEach((song) => {
      if (song.album === "Shout at the Devil") {
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
      }
    });
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

    songContainer.innerHTML = "";

    motleyCrueSongs.forEach((song) => {
      if (song.album === "Too Fast for Love") {
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
      }
    });
  }
});
