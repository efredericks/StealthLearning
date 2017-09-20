/*
   File Name: ButtonHandlers.js

   Author Name: Matthew Degraeve

   Date: 8/14/2017

   Description of File: This file holds the buttons that have different
			button click events. The ID's ar referenced from
			the index.php file.


   Function:	 ChangeLevel()

   Inputs:	 Depends on the Id 'level' located in index.php

   Outputs:	 Display next level on button. Once button is 
	   	 clicked it will display Next Level.

   Description:  The idea is once you click on the button it will
		 take you to the next level and wait for completion.



   Function:	 ReloadMap()

   Inputs:	 Depends on the ID 'change' in the index.php file.

   Outputs:	 Returns a map that is new and hasn't been drawn on.
 
   Description:  This was programed so if a user were to draw 
		 the arrows in the wrong direction, then they 
		 would be able to start with a clean slate.



   Function:	 HideShowAnimation()

   Inputs:	 Depends on the ID 'hide' in the index.php file

   Outputs:	 Returns a train that is visible or not visible.

   Description:  Users can take the picture of the train off
		 the screen. (Still there, just visible).
*/

 // Changing the level function //
 function changeLevel() {  // This fuction will eventually change the level to next level.(doesn't work now) //
	if (document.getElementById("level").innerText == 'Next Level')  {		
		document.getElementById("level").innerHTML = 'Previous Level';
		level2();
	} 
	else {
		document.getElementById("level").innerHTML = 'Next Level';			
			drawImage(); 
		}
 }
 // End of Changing the level //
 
 // ReloadMap function //
 function ReloadMap () {
	if ( document.getElementById('change').innerText == 'Reload Map') {
		// Setting arrays to nothing in them //
		strtxArray.length = 0;
		strtyArray.length = 0;
		stopxArray.length = 0;
		stopyArray.length = 0;
		// End of setting array to Zero //
		arrowTypeArray.length = 0;
		clickcount = 0;
		validClick = 1;
		prevX = -1;
		prevY = -1;
		clearInterval(animate_interval);
		animate_loop = 0;
		clearInterval(doAnimate);
		clearInterval(animate_loop);
		GetMapCursorPos();
		GetCurPosDraw();
		

		myAnimate2();
		doAnimate();
		drawImage();		
		
		console.log("arrayX=" + ' ' + strtxArray[strtxArray.length]);
		console.log("arrayY=" + ' ' + strtyArray[strtyArray.length]);
	} else {
		document.getElementById('change').innerHTML = 'Reload Map';
		drawImage();
		}
 }
 // End of ReloadMap fuction //

 // HideShowAnimation fuction //	
 function HideShowAnimation () {
		
	if ( document.getElementById('hide').innerText == 'TrainVanish') {
		document.getElementById('hide').innerHTML = 'TrainReappear';
			
		$("#hide").click(function(){ // JQuery code for hidding Train Image 
		$("#animate").hide();
		});
			
	} else {
		document.getElementById('hide').innerHTML = 'TrainVanish';
			
		$("#hide").click(function(){ // JQuery code for showing Train Image
		$("#animate").show();
		});
			
	}
 }
 // End of HideShowAnimation function //

// Block needed for finding the button declarations in index.php //
window.HideShowAnimation = HideShowAnimation;
window.changeLevel = changeLevel;
window.ReloadMap = ReloadMap;
// End of finding out of window block //
