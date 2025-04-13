import Game from "./models/Game.mjs";

let games = [];

loadGames();
setupImport();

console.log(games);

// #region Functions

function loadGames() {
  games = retrieveAllGames();
  renderGames();
}

function renderGames() {
  const container = document.getElementById("gameContainer");
  container.innerHTML = "";

  games.forEach((game, index) => {
    const gameDiv = document.createElement("div");
    gameDiv.className = "game-card";
    gameDiv.innerHTML = `
      <h3>${game.title}</h3>
      <p><strong>Designer:</strong> ${game.designer}</p>
      <p><strong>Artist:</strong> ${game.artist}</p>
      <p><strong>Publisher:</strong> ${game.publisher}</p>
      <p><strong>Year:</strong> ${game.year}</p>
      <p><strong>Players:</strong> ${game.players}</p>
      <p><strong>Time:</strong> ${game.time}</p>
      <p><strong>Difficulty:</strong> ${game.difficulty}</p>
      <p><strong>Play Count:</strong> <span id="playCount-${index}">${game.playCount}</span></p>
      <button>+1 Play</button>
      <p><strong>Rating:</strong> <span id="rating-${index}">${game.personalRating}</span></p>
      <input type="range" min="1" max="10" value="${game.personalRating}" disabled />
    `;
    container.appendChild(gameDiv);
  });
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
        
        if (!games.some(game => game.title === data.title)) {
          games.push(game);
        }
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