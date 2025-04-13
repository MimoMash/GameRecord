import Game from "./models/Game.mjs";







//#region Functions
function saveGame(game) {
    localStorage.setItem(`game_${game.name}`, JSON.stringify(game));
}

function retrieveAllGames() {
    const games = [];
  
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("game_")) {
        const gameData = JSON.parse(localStorage.getItem(key));
        games.push(gameData);
      }
    }
  
    return games;
}

function outputGamesAsJSON() {
    const games = retrieveAllGames();
    return JSON.stringify(games);
}
  
function importGamesFromJSON(jsonString) {
    const parsedGames = JSON.parse(jsonString);
    parsedGames.forEach(game => {
      saveGame(game);
    });
}

//#endregion