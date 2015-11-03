<?php
	if(isset($_POST)){
			$name = $_POST['name'];
			$surname = $_POST['surname'];
			echo(htmlspecialchars($name . " " . $surname));
		}