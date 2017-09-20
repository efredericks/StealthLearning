 /*
   File Name:		 AnimateStuff.js

   Author Name:		 Matthew Degraeve

   Date:		 8/14/2017

   Description of file: This file allows for the train to move accross each idividual tile
			in order to reach its destination. More information about what each function 
			does is below. 



   Function:	 myAnimate2()

   Inputs:	 Depends on the Id 'start' so the animation will happen once the user clicks on the button.
	 	 used the variables created for the text inside the div container. The departed from
 	  	 condition is used in this function. ( when leaving certain station it says departed from, then 
 	  	 'station name'. Setting the animate loop to the track with the style.top and style.left. animateTrain
	 	  helps for the calculation of the train in the middle of the track. variable animate_loop is set to
	  	 zero.

   Outputs:	 This returns all the neccessary parameters in order for the train to being animated on the positions
	   	 of each arrow.
 
   Description:	 This function allows for the train to be placed on the start and the stop position. It also switches
		 the start to the stop button and vice versa. Instead of creating a for loop for the train we created an
	    	 if statement. With the setInterval and the setTimeout in a for loop, the browser does things undetectable
		 in the background



   Function:	 doAnimate()

   Inputs:	 Depends on the arrow type being drawn to the screen to determine the direction of the animation.
	  	 The animation is drawn to the screen. This looks in the arrow type array. clearInterval if the 
          	 animate_loop is >= stopxArray in order to know when to redraw the train upon completion. relying on towns array
	  	 and StationNameArray in order to know what town it departs from. Traincart variable that tells what is in the train.

   Outputs:	 This returns the conditions for if the train has arrived at it's destination or the train has successfully 
	   	 completed the game.

   Description:	 This function allows the train to move smoothly accross each arrow that has been drawn to the screen, with
	 	 a one second delay. This allows the user playing the game to watch their train move from arrow to arrow. As
		 the train reaches each town along the way it displays the text to the div container. In a special circumstance the 
		 output to the screen will tell the user they have won the game congrats. 
 */

 // Start of myAnimate2 function //
 function myAnimate2() 	{
	var elem = document.getElementById("animate");  // variable for appending text inside div container underneath canvas //
		 
    
	if (document.getElementById("Start").innerText == "Start") {	// This looks at the button to see if it says start and switches it to stop //	
			
		document.getElementById("Start").innerHTML = "Stop";
		
		document.getElementById("animate").style.visibility = "visible"; // Sets the train to visible once clicking start //
	if ((strtxArray.length == 0) || (strtyArray.length == 0) || 
		(stopxArray.length == 0) || (stopyArray.length == 0)){
		var t = document.createTextNode("No lines are being drawn" + "\n"); // creates a textnode to being written inside my div container //
		var s = document.createTextNode("Draw some lines in order to move forward" + "\n");
		
		list.insertBefore(s, list.childNodes[0]);  // Inserts the value before the previous value //
		list.insertBefore(t, list.childNodes[0]);  // This allows you to see the current text at the top of div container //
		document.getElementById("animate").style.visibility = "hidden";
	}	
				
	else {
		posx = strtxArray[0];  // strtxArray[0] is posx //
		posy = strtyArray[0];  // strtyArray[0] is posy //
		
		 if ((StationNameArray[(parseFloat(posy/tileSize))][(parseFloat(posx/tileSize))] >= 0))	{
			// this creates a TextNode variable for the text to display to the div container //
			var start = document.createTextNode('Departed from' + ' ' +towns[StationNameArray[posy/tileSize][posx/tileSize]] 
								 + ' , ' + 'Cart Contains' + ' ' + trainCart + ' ' +'Bricks of Gold' + ' ' + '\n');
					
	
			list.insertBefore(start, list.childNodes[0]);
		 }
					
					
				
			animate_loop 	 = 0;
			
			// This calculation centers the train in the middle of the arrows //
			elem.style.top = posy + (tileSize / animateTrain);	
			elem.style.left = posx + (tileSize / animateTrain);				
			// End of calculation //			
					
			animate_interval = setInterval("doAnimate()", 1000); // Setting the interval to a 1 sec delay //
				
			}  
	} 	else { // clear out track and reset trainSet //
			document.getElementById("Start").innerHTML = 'Start'; /* if it's stop it clears the interval and sets the image
										 back to starting position */
			posx = strtxArray[0];
			posy = strtyArray[0];
			animate_loop  = 0;  // Setting variable animat_loop to 0 //

			// calculation for centering train in middle of the track //
			elem.style.top = posy + (tileSize / animateTrain); 	
			elem.style.left = posx + (tileSize / animateTrain);
			// End of calculation //			

			}
	}
	

 function doAnimate() {
	var elem = document.getElementById("animate");
	var done = false; // win condition //
		
	// code block for the arrow type. check in order to move accross arrow. //
	if (arrowTypeArray[animate_loop] == "verticalDown") {			
		posy += tileSize;	
	}
	else if ( arrowTypeArray[animate_loop] == "verticalUP") {
		posy -= tileSize;
	}
	else if ( arrowTypeArray[animate_loop] == "HorizontalRight") {
		posx += tileSize;
	}
	else if ( arrowTypeArray[animate_loop] == "HorizontalLeft") {
		posx -= tileSize;
	}
	else if ( arrowTypeArray[animate_loop] == "diagonalUPRight") {
		posx += tileSize;
		posy -= tileSize;
	}
	else if ( arrowTypeArray[animate_loop] == "diagonalDLeft") {
		posx -= tileSize;
		posy += tileSize;
	}
	else if ( arrowTypeArray[animate_loop] == "diagonalUPLeft") {
		posx -= tileSize;
		posy -= tileSize;
	}
	else if ( arrowTypeArray[animate_loop] == "diagonalDRight") {
		posx += tileSize;
		posy += tileSize;
	}
	// End of code block for checking how train moves accross the arrow //
	console.log("animate_loop=" + animate_loop + ' ' + "posx=" + ' ' + posx + "posy=" + ' ' + posy);
		
	// Draw the train again to move in the middle of the track based on the calculation //
	elem.style.top  = posy + (tileSize / animateTrain);
	elem.style.left = posx + (tileSize / animateTrain);
	// End of train calculation //

		
	if (animate_loop >= (stopxArray.length - 1)) {  
		clearInterval(animate_interval);
	}
	
	// Block for text saying departed from and 'town name' //				
	if ((StationNameArray[(parseFloat(posy/tileSize))][(parseFloat(posx/tileSize))] >= 0)) {
		var start = document.createTextNode('Arrived at' + ' ' +towns[StationNameArray[posy/tileSize][posx/tileSize]]
							 + ' , ' + 'Cart Contains' + ' ' + trainCart + ' ' +'Bricks of Gold' + ' ' + '\n');
		// End of block for departure //
		
		list.insertBefore(start, list.childNodes[0]);
		console.log('Text' + ' ' + [StationNameArray[parseFloat(posx/tileSize)][parseFloat(posy/tileSize)]]);
	}
	// code block for the win condition. once you arrive at the end point //				}
	if ((posx == stopxArray[stopxArray.length - 1]) && (posy == stopyArray[stopyArray.length - 1]) &&
	   ((StationNameArray[(parseFloat(posy/tileSize))][(parseFloat(posx/tileSize))] == 1))) {
			var passing = document.createTextNode('You win!' + '  ' +  '\n');
			list.insertBefore(passing,list.childNodes[0]);
			
	 }
	// End of win condition //
	
	// increment the animate_loop //
		animate_loop++;
	// End of increment for animate_loop //
	 }
	
	// JQuery block for hiding / showing the train //
	$("#hide").click(function() {
	$("#animate").hide();
	});

	$("#hide").click(function() {
	$("#animate").show();
	});
 
	// End of hiding / showing the train //
