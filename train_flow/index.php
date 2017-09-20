<!DOCTYPE html5>
 <!--
	File Name: Index.php

	Author: Brianna Kearney and Matthew Degraeve

	Date: 8/14/2017

	Description of File: This file contains the HTML code which
	runs the game based on JavaScript and PHP files included. Also, contains the php code which pulls from our Data
	Model. This is the visual representation of buttons to the screen
	and references the myStyle1.css page. Use some of the ID's for tasks
	in the JavaScript files as well.
  -->
<html>
	<?php
	// Check which level the player is on
	$currLevel = 1;
	if (isset($_GET['currLevel']))
		$currLevel = $_GET['currLevel'];
	
	// Get data from JSON file
	$levelData = file_get_contents("levels/level" . $currLevel . ".json");
	$levelObjs = json_decode($levelData, true);
	?>
 <head>
<title></title>
<link rel="stylesheet" type="text/css" href="css/myStyle1.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>
<body>


	
<div id="container" class="container">	
	<canvas id="canvas" ></canvas>
	<div  class="container1">
		<h1> Data on the Rails! </h1>
		<hr class="hr"></hr>
		<p>What station is the winning station... Good Luck! </p>
		<!-- Special Note: Reload Map only works if train is back at starting position (click stop button). 
		--> 
		
		
			<div class="btn-group">
			<!--	This is for further developement (Works for on condition).
				<button  id="change" onclick="ReloadMap()" >Reload Map </button>
			--> 
				<button  id="Start" onclick="myAnimate2()" value="Start">Start </button>

				<!--
				This is for future production
				<button  id="level" onclick="changeLevel()" value="level"> Next Level </button>
				<button  id="change" onclick="ReloadMap()" >Reset Track </button> 
				<button  id="Start" onclick="myAnimate2()" value="Start">Animation Reset </button>
				-->
				
			</div>
	
			<!--<h2 id="status">0 , 0</h2>-->
			<!--<h2 id="coordinates">0 , 0</h2>-->
	
	
	</div>

			<div  class="textarea" id="addingOutput">
	
			</div>
			
			<div id="animate">

			</div>

</div>


<script type="text/javascript">
<?php include "php/data_dynamic.php";?>
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
</script>
<script src="js/Data.js"></script>
<script src="js/DrawStuff.js"></script>
<script src="js/DataText.js"></script>
<script src="js/GetCursorStuff.js"></script>
<script src="js/AnimateStuff.js"></script>
<script src="js/ButtonHandlers.js"></script>
</body>
</html>
