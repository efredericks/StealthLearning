 /*
   File Name: DrawStuff.js

   Author Name: Matthew Degraeve

   Date: 8/14/2017

   Description of File: This file references the data.js file and the JSON file
	 		and the DataText so it can create a game map visual. This 
			file also has the drawGrid function which allows the user
			see the visual representation on the map. 
 
 
   Function:	 DrawImage

   Inputs: 	 This function depends on the tileset image it's referencing from
	   	 DataText.js. Needs the variables ctx and canvas which are located
	   	 in Data.js and JSON file. Uses the sprite Sheets in DataText.js for displaying the
	   	 map.All the variable need to make correct calculations for displaying it
	   	 to the screen are in the DataText.js file and JSON. References the drawGrid function
		 with is located in both this file and 
	   	 DataText.js. Takes in the correct parameters from the drawGrid function. uses bitWise
	   	 so it can read a sprite sheet image from the DataText.js file.

   Outputs:	 Returns colored grid lines to the screen.
	    	 The correct image read off of sprite sheet represents each tile square of the map.
	    	 Stations appear on the map taken out of an array named 'stations'.(names of each station
		 appear at the top of every station
	    	 image. They are different names.)

   Description:  The code initially clears the canvas so it can draw the sprite sheet image to it.
		 It then looks at each array for picking the correct location to display each image. To calculate
		 what image to pull off the sprite sheet it uses the BitWise operator (same as Math.floor, but faster).
		 Each Image is then displayed in it's correct location and there is your game display.
 */

 function drawImage () {
	ctx.clearRect(0, 0, canvas.width, canvas.height);	// Great Practice when drawing a grid based canvas //	
	for (var r = 0; r < rowTileCount; r++) {
		for (var c = 0; c < colTileCount; c++) {
			drawGrid( c * tileSize, r * tileSize, tileSize, 4);  // using parameters from drawGrid Function //

			var tile = ground[ r ][ c ];		// Setting Tile to Base array. (Ground is base array).
			var tileRow = (tile / imageNumTiles) | 0; /* Bitwise does the same thing as Math.floor. Finds
								   the row of the tile, then we divide the number by
								   the number of tiles per row.
								  */
  				
			var tileCol = (tile % imageNumTiles) | 0; /* To calculate the column of the tile we use %
								    (modular division).
								  */	
			ctx.drawImage(Forest, (tileCol * (spriteSize)), (tileRow * (spriteSize)), spriteSize, spriteSize
					, (c * (tileSize)), (r * (tileSize)), tileSize, tileSize);/* translating row and column of the tile
												     into x and y of the image, we multiply each
												     by the tilesize. When drawing the images to
												     the canvas we do the same thing for r and c
												     for drawing the tile in the correct position
												     on the background
												   */	 	
				
			tile = scenery[ r ][ c ];	// This is the scenery layer add ontop of ground layer //		
			tileRow = (tile / imageNumTiles) | 0;   
			tileCol = (tile % imageNumTiles) | 0;
			ctx.drawImage(Forest, (tileCol * (spriteSize)), (tileRow * (spriteSize)), spriteSize, spriteSize
					, (c * (tileSize)), (r * (tileSize)), tileSize, tileSize);
				
			tile = Stations[ r ][ c ];	// This is the Stations layer position on map //
			tileRow = (tile / StationTileColsCount) | 0;   
			tileCol = (tile % StationTileColsCount) | 0;
			ctx.drawImage(buildings, (tileCol * (spriteSize)), (tileRow * (spriteSize)), spriteSize, spriteSize
					, (c * (tileSize)), (r * (tileSize)), tileSize, tileSize);
				
				// If Statement for adding names to Station positions // 
				if (StationNameArray[ r ][ c ] >= 0) {	
					drawText(towns[StationNameArray[r][c]], ((c * tileSize) + (tileSize/TextAdjY)) 
						,((r * tileSize) + (tileSize/TextAdjX)),tileSize,4); /* Displays the text on each station
													, this looks at the StationNameArray
													to determine what text to be displayed. 
												     */				
					
					
				}
				// End of If Statement //
			}
		}
		
	}
	// End drawing of map //
	
 // Draws the grid lines on the map //
 function drawGrid ( xPos, yPos, Size, Colour) {					
	ctx.lineWidth = 0.7;
	ctx.strokeStyle = colors[Colour];
	ctx.strokeRect( xPos, yPos, Size, Size);
 }
 // End of the drawGrid function //
 function drawText( Text, xPos, yPos, Size, Colour) {
	ctx.font = '14px serif';
	ctx.textAlign = 'center';
	console.log('color for drawtext function : ' + colors[Colour]);
	ctx.fillStyle = colors[Colour];
	ctx.fillText(Text, xPos, yPos, Size, Size);
 } 
	
