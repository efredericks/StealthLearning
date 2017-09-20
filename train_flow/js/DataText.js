 /* 
    File Name: DataText.js

    Author Name: Matthew Degraeve

    Date: 8/14/2017

    Description of File: This file creates the canvas width and height, using 
    the variable from both the JSON file and Data.js file.
    (The map is determined by both the data model and the Sprite Sheet Image). This file has all the 
    declarations for sprite Sheets which are being used. In here 
    you can add new stations to the stations array using the correct
    sprite sheet. You can change the text displayed on each station
    in the StationNamesArray. Values in this array are determined by
    The array called 'towns' in Data.js file. Adding more towns in the
    array 'towns' will allow you to create new names in the StationName array
    with picking correct indexes from the array 'towns'. To create the map on the screen
    it uses the variables tileSize, colTileCount, and rowTileCount. These variables are being
    pulled from both the JSON file(data model) and Data.js. 
 */
 
 var traincart = 42;
 var towns = ['Heresville', 'Anytown', 'Whosville', 'Gotham', 'Brilliant'];

 var clickcount = 0;
 var validClick = 1;
 var colors = ["red", "green", "blue", "black", "white", "brown"];
 var len = colors.length;
 // Forest Sprite Sheet //	
 var Forest = new Image();			
 Forest.src = 'img/forest_tiles.png';  
 Forest.onload = drawImage;	
 // End of Forest sprite Sheet //

 // Train Sprite Sheet //
 var Trains = new Image ();
 Trains.src = 'img/trainSet.jpg';		
 Trains.onload = drawImage;
 // End of Train Sprite Sheet //

 // Tracks Sprite Sheet //
 var Tracks = new Image ();
 Tracks.src = 'img/tileeyl5.png';
 Tracks.onload = drawImage;
 // End of Tracks Sheet //

 // MineCart Sprite Sheet //
 var MineCart = new Image ();
 MineCart.src = 'img/lpc-mine-cart-tracks.png';
 MineCart.onload = drawImage;
 // End of MineCart Sprite Sheet //

 // StopSignGreen Image //
 var StopSignGreen = new Image ();
 StopSignGreen.src = 'img/StopSignGreen.png';
 StopSignGreen.onload = drawImage;
 // End of StopSignGreen Image //

 // StopSignRed Image //
 var StopSignRed = new Image ();
 StopSignRed.src = 'img/StopSignRed.png';
 StopSignRed.onload = drawImage;
 // End of StopSignRed Image //

 // stations Sprite Sheet //
 var stations = new Image ();
 stations.src = 'img/stations.jpg';
 stations.onload = drawImage;
 // End of stations Sprite Sheet //

 // buildings Sprite Sheet //
 var buildings = new Image ();
 buildings.src = 'img/buildings.png';
 buildings.onload = drawImage;
 // End of buildings Sprite Sheet //

 canvas.width  = tileSize * colTileCount;  // This creates the canvas width //
 canvas.height = tileSize * rowTileCount  // This creates the canvas height //

 // Array that holds the location of where to place a station //	
 var Stations = [
	[-1,-1,-1,-1,-1,-1,-1,-1,-1,14,-1,-1],
	[-1,-1,14,-1,-1,-1,-1,-1,-1,-1,-1,-1],
	[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
	[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
	[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,14],
	[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
	[-1,-1,-1,-1,-1,14,-1,-1,-1,-1,-1,-1],
	[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
	[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
	[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
	[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,14,-1],
	[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
		
 ];
 // End of Stations array //

 // Displays the name on the specified tiles //	
 var StationNameArray = [
	[-1,-1,-1,-1,-1,-1,-1,-1,-1,3,-1,-1],			
	[-1,-1,0,-1,-1,-1,-1,-1,-1,-1,-1,-1],				
	[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
	[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
	[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4],
	[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
	[-1,-1,-1,-1,-1,2,-1,-1,-1,-1,-1,-1],
	[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
	[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
	[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
	[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1 ,-1],
	[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]	
 ];
 // End of StationNameArray //
	
 // Text Displaying inside Div container //	
 var v = document.createTextNode("Join the journey for a great time"
				 + ' ' + '\n');
	list.insertBefore(v, list.childNodes[0]);

 var x = document.createTextNode("Hope you enjoy" + ' ' + '\n');
	list.insertBefore(x, list.childNodes[0]);
		
 // End of text being displayed //
	
