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