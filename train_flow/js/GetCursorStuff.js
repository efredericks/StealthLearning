 /* 
    File Name:		 GetCursorStuff.js

    Author Name:	 Matthew Degraeve

    Date:		 8/14/2017

    Description of File: This file contains all the functions for
	                 cursor tasks. like: drawing arrows, drawing arrowhead
                         , waiting for user clicks, drawing grids to the screen, 
			 putting the pixel position to a H2 HTML tag in my div container
			 and making sure scenery is a valid click. For more information about
			 each function check on the description below.
 


    Function:	 GetMapCursorPos()

    Inputs:	 It contains clickcount which is in Data.js. Has groundclick
           	 variable set. Needs to know the initial validClick. Requires cellX
	   	 ,cellY and stopX,stopY. This takes in parameters from checkforGroundTile(cellX, cellY).
	   	 prevX = strX and prevY = strY. (allowing user the ability to not click back on itself).
	   	 global variables for strtxArray, strtyArray, stopxArray, stopyArray. Depends on 
	   	 GetCurPosDraw (strX, strY, stopX, stopY, tileSize) for the drawing of the arrows based on
	   	 a user click.

    Outputs:	 This function returns an arrow fo the user based on where they clicked on the screen.
	    	 Also returns a valid track for the train to move on.

    Description: This function waits for the user to click on any cell for the inital position of the
		 arrow to begin. Waits for the user to click on a different cell
		 adjacent or not, to further determine the action of the line. If the user clicks
		 on an adjacent cell the arrow is drawn in the direction the user clicks and if it's not
		 adjacent then the program doesn't draw the arrow. (waits for adjacent click). One more
		 condition is to see if the click is a valid ground tile. ( it's a valid ground tile if
		 it satisfies the checkforGroundTile function). If it meets all the previous conditions then
		 the arrow is drawn to the screen. (continues to check all the conditions until the user
		 stops choosing a tile).


 
    Function:	 GetCurPosDraw(xPos, yPos, endX, endY, Size)

    Inputs:	 Depends on a validClick which is declared in data.js and this file.
	   	 uses the drawArrow function to determining what arrow to draw
	   	 and how to draw it. Depends on the ctx variable in order to actually
	   	 draw the arrow, create the fill color/style and begin the path of the
	   	 arrow. Contains the global variables for drawing the arrow heads. 
	   	 (diagonalArrowHead and otherArrowHead).

    Outputs:	 The lines of the arrows are drawn, the arrow head itself is drawn
	    	 based on the math calculation. The color of the arrow and also the position of 
	    	 where it's placed on a specified tile. (they are placed in the middle of each
	    	 tile).

    Description: The idea behind this is it allows the user to move a train cart on top
		 of the arrows you draw to the screen. It shows the arrows pointing in the 
		 correct direction and proportional to the tileSize display. The way it's 
		 designed is it has global variable for the arrow head so that it will
		 be the correct porportion accross all displays.


    Function:	 DrawGrid()

    Inputs:	 Depends on the ctx variable in the Data.js file and JSON file.

    Outputs:	 Visual representation of the grid lines and color
            	 displayed to the screen.

    Description: Creates a grid for the whole tile map
		 to clearly see each individual tile.



    Function:	 drawText()

    Inputs:	 Depends on the ctx variable in the Data.js file.
           	 also looks in the colors array to get a color for
	   	 the text on the screen.

    Outputs:	 Shows a visual representation of colored text with
	    	 specified font size and alignment to the screen.

    Description: This draws the text to the screen. Has the style of
		 the look of the text and the color of it as well. This
		 uses the colors array as a parameter.
 */

 // initialize function block //
 GetMapCursorPos ();
 // End of initializing //

 // Cursor position function //	
 function GetMapCursorPos() {								
	ctx.canvas.addEventListener('click', function(event){
	var mouseX = event.clientX - ctx.canvas.offsetLeft;	// Sets the variable mouseX to the coordinate positions of x values //
	var mouseY = event.clientY - ctx.canvas.offsetTop;	// Sets the variable mouseY to the coordinate positions of y values //
	var cellX  = parseInt(mouseX / tileSize);	// calculation for x values converting from pixel coordinates to number coordinates //
	var cellY  = parseInt(mouseY / tileSize);      // calculation for y values converting from pixel coordinates to number coordinates //
	//var status = document.getElementById('status');
	//status.innerHTML = parseInt(mouseX / tileSize) + " ,  " + parseInt(mouseX / tileSize);
	//var status1 = document.getElementById('coordinates');
	//status1.innerHTML = mouseX + " , " + mouseY;
	
	//document.getElementById('status').style.visibility = 'hidden';
	//document.getElementById('coordinates').style.visibility = 'hidden';
		
		
	// block of logic for drawing arrows // 
	clickcount = clickcount + 1;											
	if (clickcount == 1) {		/* clickcount = 1 for first click only 
					 validClick gets set to 1 on adjacent cells
					 only in the function GetCurPosDraw () */
	
		checkforGroundTile (cellX,cellY);
		if ( groundClick == 1){
			strtxArray[strtxArray.length] = cellX * tileSize; // on first click strtxArray will be cellX ( in pixels) //
			console.log("strtxArray" + ' ' + strtxArray);		
			strtyArray[strtyArray.length] = cellY * tileSize; // on first click strtyArray will be cellY ( in pixels) //
			console.log("strtyArray" + ' ' + strtyArray);
			strX = cellX;	// captures beginning cell X,Y position //
			strY = cellY;
			validClick = 0;	 // setting valid click to zero on the first click //
			} else {
				 clickcount = 0;	// click count is set to zero //
			}	
		}
		
		if (clickcount == 2) {
			
			stopX = cellX;		// save the ending cells to pass to the function GetCurPosDraw //
			stopY = cellY;
			
			clickcount = 1;
			
			groundClick = 0;
			checkforGroundTile(cellX, cellY);   // checking to see if valid ground tile //
			
			if (groundClick == 1) {
				
					
				GetCurPosDraw(strX, strY, stopX, stopY, tileSize);  // this holds the values for the parameters in GetCurPosDraw //
						
			
					if (validClick == 1) {
					
				
					
						stopxArray[stopxArray.length] = stopX * tileSize; // Saving the stopx pixel loc into the stopxArray  //
						stopyArray[stopyArray.length] = stopY * tileSize; // Saving the stopY pixel loc into the stopyArray //
					
						strtxArray[stopxArray.length] = stopxArray[stopxArray.length - 1]; /* save previous stop as start
														    pixel location */

						strtyArray[stopyArray.length] = stopyArray[stopyArray.length - 1]; /* Save previous stop as start
														     pixel location */
					
						console.log("strtxArray" + ' ' + strtxArray);
						console.log("strtyArray" + ' ' + strtyArray);
						console.log("stopxArray" + ' ' + stopxArray);
						console.log("stopyArray" + ' ' + stopyArray);
						console.log("arrowTypeArray=" + arrowTypeArray);
					
					
						prevX = strX;	// Setting prevX to strX //
						prevY = strY;	// Setting prevY to strY //
						strX = stopX;	// if the ending click is a valid adjacent cell, set the stop position to the next start //
						strY = stopY;
					
					}
					
			}
		}
		});		// This closes off the EventListener //
	}
	// End of the function GetMapCursorPos() //
	
 // gets you the coordinate position, changes color, and resets the map on click //
 function GetCurPosDraw(xPos, yPos,endX, endY, Size) {	// This function uses parameters in order to call in multiple different functions //
								
	validClick = 0;			// 0 means false, did not meet any of the following criteria. //
		
	if ((xPos == endX) && (yPos == (endY + 1))) {
		drawArrow("verticalUP", xPos, yPos, endX, endY, Size, 4); // uses the draw Arrow function //
		console.log('verticalUP' + ' ' + xPos + ' ' + yPos + ' ' + endX + ' ' + endY + ' ' + Size);
					
		// Sets it to a valid click allowing the program to draw the arrow //
		validClick = 1;
			
	}
	else if ((xPos == endX) && (yPos ==(endY - 1))) {
		drawArrow("verticalDown", xPos, yPos, endX, endY, Size, 4);
		console.log('verticalDown' + ' ' + xPos + ' ' + yPos + ' ' + endX + ' ' + endY + ' ' + Size);
	
		validClick = 1;
			
	}
	else if ((xPos == (endX - 1)) && (yPos == endY )) {
		drawArrow("HorizontalRight", xPos, yPos, endX, endY, Size, 4);
		console.log( 'horizontalright' + ' ' + xPos + ' ' + yPos + ' ' + endX + ' ' + endY + ' ' + Size);
		validClick = 1;
	}
	else if ((xPos == (endX + 1)) && (yPos == endY)) {
		drawArrow("HorizontalLeft", xPos, yPos, endX, endY, Size, 4);
		console.log('HorizontalLeft' + ' ' + xPos + ' ' + yPos + ' ' + endX + ' ' + endY + ' ' + Size);
		validClick = 1;
	}
	else if ((xPos == (endX - 1)) && (yPos == (endY + 1))) {
		drawArrow("diagonalUPRight", xPos, yPos, endX, endY, Size, 4);
		console.log('diagonalUpright' + ' ' + xPos + ' ' + yPos + ' ' + endX + ' ' + endY + ' ' + Size);
		validClick = 1;
	}
	else if ((xPos == (endX - 1)) && (yPos == (endY - 1))) {
		drawArrow("diagonalDRight", xPos, yPos, endX, endY, Size, 4);
		console.log('diagonalDright' + ' ' + xPos + ' ' + yPos + ' ' + endX + ' ' + endY + ' ' + Size);
		validClick = 1;
	}
	else if ((xPos == (endX + 1 )) && (yPos == (endY + 1))) {
		drawArrow("diagonalUPLeft", xPos, yPos, endX, endY, Size, 4);
		console.log('diagonalupleft' + ' ' + xPos + ' ' + yPos + ' ' + endX + ' ' + endY + ' ' + Size);
		validClick = 1;
	}
	else if ((xPos == (endX + 1)) && (yPos == (endY - 1))) {
		drawArrow("diagonalDLeft", xPos, yPos, endX, endY, Size, 4);
		console.log('diagonaldleft'+ ' ' + xPos + ' ' + yPos + ' ' + endX + ' ' + endY + ' ' + Size);
		validClick = 1;
	}
		
 }
 // End of function GetCurPosDraw() //
	
 // drawing arrows to screen //
 function drawArrow (Type, x, y, endX, endY, Size, Colour) {
	ctx.beginPath();			// begins the path to be drawn //
	ctx.strokeStyle = colors[Colour]; // colors[Colour] looks in the colors array to find a color //
	ctx.fillStyle = colors[Colour];

	// Setting variables so its easier to read //
	var endXPos = (endX * Size) + (Size / 2);	
	var endYPos = (endY * Size) + (Size / 2);	
	
	// Starting point of line //
	ctx.moveTo((x * Size) + (Size / 2), (y * Size) + (Size/2));
	// End Starting poin of line //

	// End point of line being drawn //
	ctx.lineTo((endX * Size) + (Size / 2), (endY * Size) + (Size / 2));
		
	if (Type == "HorizontalRight") {		// Horizontal Right Arrow //
		console.log('HorizontalRight');
		ctx.moveTo(endXPos, endYPos);
		ctx.lineTo(endXPos - otherArrowHead , endYPos - otherArrowHead );
		ctx.moveTo(endXPos, endYPos);
		ctx.lineTo(endXPos - otherArrowHead , endYPos + otherArrowHead);
	}
	else if (Type == "diagonalDRight") {	// Diagonal Down right Arrow //
		console.log('works');
		ctx.moveTo(endXPos, endYPos);
		ctx.lineTo(endXPos, endYPos - diagonalArrowHead);
		ctx.moveTo(endXPos, endYPos);
		ctx.lineTo(endXPos - diagonalArrowHead , endYPos);
	}
	else if (Type == "verticalDown") {	// Verticle down Arrow //
		ctx.moveTo(endXPos, endYPos);
		ctx.lineTo(endXPos - otherArrowHead, endYPos - otherArrowHead);
		ctx.moveTo(endXPos, endYPos);
		ctx.lineTo(endXPos + otherArrowHead , endYPos - otherArrowHead);
	}
	else if (Type == "diagonalDLeft") {	// Diagonal down left arrow //
		ctx.moveTo(endXPos, endYPos);
		ctx.lineTo(endXPos, endYPos - diagonalArrowHead);
		ctx.moveTo(endXPos, endYPos);
		ctx.lineTo(endXPos + diagonalArrowHead, endYPos);
	}
	else if (Type == "HorizontalLeft") {	// HorizontalLeft arrow //
		ctx.moveTo(endXPos, endYPos);
		ctx.lineTo(endXPos + otherArrowHead, endYPos + otherArrowHead);
		ctx.moveTo(endXPos, endYPos);
		ctx.lineTo(endXPos + otherArrowHead , endYPos - otherArrowHead);
	}
	else if (Type == "diagonalUPLeft") {	// DiagonalLeft up arrow //
		ctx.moveTo(endXPos, endYPos);
		ctx.lineTo(endXPos + diagonalArrowHead, endYPos);
		ctx.moveTo(endXPos, endYPos);
		ctx.lineTo(endXPos, endYPos + diagonalArrowHead);
	}
	else if (Type == "verticalUP") {	// Virticle up arrow //
		ctx.moveTo(endXPos, endYPos);
		ctx.lineTo(endXPos + otherArrowHead, endYPos + otherArrowHead);
		ctx.moveTo(endXPos, endYPos);
		ctx.lineTo(endXPos - otherArrowHead , endYPos + otherArrowHead);
	}
	else if (Type == "diagonalUPRight") {	// DiagonalUpRight arrow //
		ctx.moveTo(endXPos, endYPos);
		ctx.lineTo(endXPos - diagonalArrowHead, endYPos);
		ctx.moveTo(endXPos, endYPos);
		ctx.lineTo(endXPos, endYPos + diagonalArrowHead);
	}	
		ctx.stroke();
		arrowTypeArray[arrowTypeArray.length] = Type;
		
	
 }
	// End of the drawArrow function() // 
	
	
	
 // Draws the grid lines on the map //
 function drawGrid ( xPos, yPos, Size, Colour) {					
	ctx.lineWidth = 0.7;
	ctx.strokeStyle = colors[Colour];
	ctx.strokeRect( xPos, yPos, Size, Size);
 }
 // End of the drawGrid function //
		
	
 // Draws text to certain cells //
 function drawText( Text,  xPos,  yPos,  Size,  Colour) { // Draws the specified text using parameters //
	ctx.font = '14px serif';		// Setting the font to 14px serif //
	ctx.textAlign = 'center';		// Text is being centered //
	console.log('Color for drawText function : ' + colors[Colour]);
	ctx.fillStyle = colors[Colour];
	ctx.fillText(Text, xPos , yPos , Size, Size);
 }  
 // End of drawText function() //
	
	
	
 function checkforGroundTile (Xloc, Yloc) {
	// Logic for looking at each layer of arrays to determining a path //
	if (( ground[Yloc][Xloc] <= MaxValidSceneryNbr) && (scenery[Yloc][Xloc] == -1) && (Stations[Yloc][Xloc] <=14)) {
		validClick = 1;
		groundClick = 1;
				
	}
		
	if ((Xloc == prevX) && (Yloc == prevY)){		// prevent clicking back on previous tile //
		validClick = 0;
		groundClick = 0;
	}
  }

