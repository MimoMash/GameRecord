import Game from "./models/Game.mjs";

let games = [];

loadGames();
setupImport();

console.log(games);

// #region Functions

function loadGames() {
  games = retrieveAllGames();
}

function setupImport() {
  const fileInput = document.getElementById("importSource");

  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      try {
        const json = JSON.parse(reader.result);
        importGamesFromJSON(json);
        loadGames();
        console.log("Games imported");
      } catch (err) {
        console.error("Error reading JSON:", err);
      }
    };

    reader.readAsText(file);
  });
}

function saveGame(game) {
    localStorage.setItem(`game_${game.title}`, JSON.stringify(game));
}

function retrieveAllGames() {
    const games = [];
  
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("game_")) {
        const data = JSON.parse(localStorage.getItem(key));
        const game = new Game(
          data.title,
          data.designer,
          data.artist,
          data.publisher,
          data.year,
          data.players,
          data.time,
          data.difficulty,
          data.url,
          data.playCount,
          data.personalRating
        );
        games.push(game);
      }
    }
  
    return games;
}

function outputGamesAsJSON() {
    const games = retrieveAllGames();
    return JSON.stringify(games);
}
  
function importGamesFromJSON(jsonArray) {
  jsonArray.forEach(data => {
    const game = new Game(
      data.title,
      data.designer,
      data.artist,
      data.publisher,
      data.year,
      data.players,
      data.time,
      data.difficulty,
      data.url,
      data.playCount,
      data.personalRating
    );
    saveGame(game);
  });
}
// #endregion