 /*
    File Name: Data.js

    Author Name: Matthew Degraeve

    Date: 8/14/2017

    Description of File: This file contains all the global variables
    which are not declared in the data model. These variables
    are used throughout each Javascript file.
 */

 var tileSize = 64;       // The size of a tile (64×64) //
 var imageNumTiles = 16;  // Forest tileSetImage NumofCols //
 var spriteSize = 32;	// Pixel size for sprite Images //
 var StationTileColsCount = 23;	// Station tileSetImage NumofCols //
 var MaxValidSceneryNbr = 5; /* Values which are valid ground clicks 
			        for ground layer of map */
 var diagonalArrowHead = tileSize / 6;	/* Sets Arrow head size
					   for diagonal lines */
 var otherArrowHead = tileSize / 8; /* Sets Arrowhead size for
				       for horizontal and verticle lines */
 var groundClick = 0;
 var strtxArray = [];	// This is an array for the x values //
 var strtyArray = [];	// This is an array for the y values //
 var stopxArray = [];	// This is the stop array for the x values //
 var stopyArray = [];	// This is the stop array for the y values //
 var arrowTypeArray = []; /* Array that holds the type of arrow being drawn
			     , this stores arrow name */
 var prevX = -1; /* Setting a previous value to check
		    when clicking on previous arrow. */
 var prevY = -1; // Same concept as PrevX //							
 var images = []; /* Array for storing images.
		     This doesn't store Sprite Sheets */
 var len = images.length;// Looks at all images in this array //
 var animateTrain = 4; /* Used for a calculation in 
			Animate.js */
 var TextAdjX = 4; /* Adjusts the text x position by tileSize/TextAdjX
		    to center text at top of tile */
 var TextAdjY = 2; /* Adjusts the text y position by tileSize/TextAdjY
		    to center text at top of tile */
	
 var trainCart = 42; // Value inside train car //
 // Block for towns array, used for Arrival and Departure //
 var towns = ["Heresville","Anytown","Whosville","Gotham","Brilliant"];		 // End of towns Array //
 var list = document.getElementById("addingOutput"); /* Variable which is
						      used for output box */
	
