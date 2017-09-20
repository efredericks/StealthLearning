<?php
	/*
	Filename: data_dynamic.php
	Author: Brianna Kearney
	Date: 08/13/2017
	Description: This PHP file extracts the x and y dimensions of the game map from the JSON data in memory and injects
	them into the Javascript code. The mapInit function is defined and called by the script to inject arrays containing 
	the contents of the individual tiles into the Javascript code. The function places blank spaces in the arrays  for 
	readability of the resulting Javascript code. 
	*/

	// Get height and width of the map
	$height = $levelObjs['map']['ySize'];
	$width = $levelObjs['map']['xSize'];
	
	// Inject the variables into JS
	echo "var colTileCount = " . $height . ";\n";
	echo "var rowTileCount = " . $width . ";\n";
	
	// Function for initializing the layers of the map
	function mapInit($h, $w, $data, $layer)	{
		$colWidth = 6;
		$k = 0;
		echo "var " . $layer . " = [\n";
		for ($i = 0; $i < $h; $i++)
		{
			echo "\t\t[";
			for ($j = 0; $j < $w; $j++)
			{
				$temp = $data['map']['tiles'][$k][$layer];
				$valWidth = strlen($temp);
				for ($z = 0; $z < $colWidth - $valWidth; $z++)
					echo " ";
				echo $temp;
				if ($j < ($w - 1))
				{
					echo ",";
				}
				$k++;
			}
			echo "]";
			if ($i < ($h - 1))
			{
				echo ",";
			}
			echo "\n";
		}
		echo "\t];\n\n";
	}
	
	// Initialize the ground layer
	mapInit($height, $width, $levelObjs, 'ground');
	
	// Initialize the scenery layer
	mapInit($height, $width, $levelObjs, 'scenery');
?>
