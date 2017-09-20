EDUCATIONAL GAME PROJECT
Main directory contains index.php, which is the main game file.
Sub-directories:
css
- contains css files for styling the game interface.
- files: myStyle1.css
img
- contains the image files used in the game.
- files: buildings.png, forest_tiles.png, lpc-mine-cart-carts.png, lpc-mine-cart-tracks.png, stations.jpg, 
  steampunkish-tilec.png, StopSignGreen.png, StopSignRed.png, tileeyl5.png, track.png, train.png, trainSet.jpg,
  TrainSprite5.png
js
- contains javascript files, linked in the main game file, which make up most of the front-end code.
- files: AnimateStuff.js, ButtonHandlers.js, Data.js, DataText.js, DrawStuff.js, GetCursorStuff.js
levels
- contains level data in JSON file format, along with a text file containing the game data model.
- files: level1.json, game_datamodel.txt
php
- contains php files, linked in the main game file, which are used for extracting data from the JSON level files and
  injecting the data into the javascript code.
- files: data_dynamic.php

