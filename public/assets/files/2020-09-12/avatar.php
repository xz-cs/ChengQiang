<?php


	$sg[0]="01.png"; 
	$sg[1]="02.png"; 
	$sg[2]="03.png"; 
	$sg[3]="04.png"; 
	$sg[4]="05.png"; 
							      
	$out=rand(0, 4);
	header("location:$sg[$out]");


?>
