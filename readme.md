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