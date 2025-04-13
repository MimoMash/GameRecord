# Step 1
Made the files and committed step 1. Added a HTML 5 scaffold in the index.html.

# Step 2 
Made the models folder with the game.mjs file inside. Looked at example.json and imported object items into a class inside a constructor. 
Example:
this.title = title;
this.designer = designer;
this.artist = artist;
this.publisher = publisher;
this.year = year;
this.players = players;
this.time = time;
this.difficulty = difficulty;
this.url = url;
this.playCount = playCount;
this.personalRating = personalRating;

Then I exported and imported the class into app.mjs for future steps.

# Step 3
Made the different functions. I had to look into localStorage and how it works since i wasn't in class. We have worked with JSON files previously so it wasn't completely new. I made some simple functions to all the tasks.

# Step 4 
I made the setupImport function to use FileReader alongside my functions from step 3. I also improved my importGamesFromJSON and retrieveAllGames functions to properly utilize my class in Game.mjs. Now, in the current state i can upload a file in my website, and by console.logging, I can see that my games array does contain all the game objects from example.json. 

# Step 5
I made a function renderGames in app.mjs so I could visualize the games. When testing if the website rendered properly, it did but for some reason it duplicated Ticket To Ride. So I added a conditional to avoid duplicates inside the retrieveAllGames function. After implementing the change, the website correctly displayed the six games inside example.json.

# Step 6 
I added code inside the renderGames function to be able to interact with the button and rating slider. I had a problem with Ticket To Ride again, so I added another conditional inside the importGamesFromJSON function and also cleared my localStorage since it hadn't been updated since the beginning.

# Step 7
I added the necessary form inside index.html to display the different inputs a person can add for a new game. I also added the link URL on the webpage as I had forgotten it in the previous steps.

# Step 8
I made a new function to add new game and interact with the different inputs and button from step 7. Much of the code is copied from previous steps so fairly simple to make the function. It correctly stores the new game and doesn't interfere with new uploads.

# Step 9 
I added a delete button in my renderGames function inside the innerHTML so it applies to each game division. I then made a function and used the removeItem function with localStorage to remove the chosen game and update the render. Mostly copied previously written code so was pretty simple. The step 9 description said to add UI in the index.html, but since the delete button applies to each individual game, it was easier to add it in the "gameContainer" innerHTML section in my renderGames function.  

# Step 10
I made a function to sort the games by the different criteria. I made a drop down selection in index.html. Since difficulty level was string, i assigned numerical values so that I could sort them in descending order. I used the sort function and added a new eventListener and used similar code to previous steps. I also added some color and editing in style.css to make the webpage look a little more alive. Below you will see all the websites I looked up to make the code.

# References
- Mozilla Contributors. (n.d.). Array.prototype.forEach(). MDN Web Docs. Mozilla. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

- Mozilla Contributors. (n.d.). Array.prototype.sort(). MDN Web Docs. Mozilla. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

- Mozilla Contributors. (n.d.). Array.prototype.push(). MDN Web Docs. Mozilla. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

- Mozilla Contributors. (n.d.). Array.prototype.some(). MDN Web Docs. Mozilla. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

- Mozilla Contributors. (n.d.). parseInt(). MDN Web Docs. Mozilla. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt

- Mozilla Contributors. (n.d.). JSON.stringify(). MDN Web Docs. Mozilla. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

- Mozilla Contributors. (n.d.). JSON.parse(). MDN Web Docs. Mozilla. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

- Mozilla Contributors. (n.d.). String.prototype.trim(). MDN Web Docs. Mozilla. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

- Mozilla Contributors. (n.d.). Document.getElementById(). MDN Web Docs. Mozilla. https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

- Mozilla Contributors. (n.d.). Element.innerHTML. MDN Web Docs. Mozilla. https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML

- Mozilla Contributors. (n.d.). Node.appendChild(). MDN Web Docs. Mozilla. https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild

- Mozilla Contributors. (n.d.). EventTarget.addEventListener(). MDN Web Docs. Mozilla. https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

- Mozilla Contributors. (n.d.). Event.preventDefault(). MDN Web Docs. Mozilla. https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

- Mozilla Contributors. (n.d.). Window.localStorage. MDN Web Docs. Mozilla. https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

- Mozilla Contributors. (n.d.). localStorage.setItem(). MDN Web Docs. Mozilla. https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem

- Mozilla Contributors. (n.d.). localStorage.getItem(). MDN Web Docs. Mozilla. https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem

- Mozilla Contributors. (n.d.). localStorage.key(). MDN Web Docs. Mozilla. https://developer.mozilla.org/en-US/docs/Web/API/Storage/key

- Mozilla Contributors. (n.d.). localStorage.length. MDN Web Docs. Mozilla. https://developer.mozilla.org/en-US/docs/Web/API/Storage/length

- Mozilla Contributors. (n.d.). localStorage.removeItem(). MDN Web Docs. Mozilla. https://developer.mozilla.org/en-US/docs/Web/API/Storage/removeItem

- Mozilla Contributors. (n.d.). FileReader. MDN Web Docs. Mozilla. https://developer.mozilla.org/en-US/docs/Web/API/FileReader

- Mozilla Contributors. (n.d.). FileReader.readAsText(). MDN Web Docs. Mozilla. https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsText
