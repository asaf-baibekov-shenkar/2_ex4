<!DOCTYPE html>
<html>
<head>
	<title>Order Sent</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</head>
<body>
	<div class="container">
		<h1>Order Sent</h1>
		<?php
			$stocks = array(
				'shirt' => array(
					'red' => array('S', 'M', 'L'),
					'blue' => array('M', 'L', 'XL'),
					'green' => array('S', 'L', 'XL')
				),
				'pants' => array(
					'red' => array('S', 'M', 'L'),
					'blue' => array('M', 'L', 'XL'),
					'green' => array('S', 'L', 'XL')
				),
				'shoes' => array(
					'red' => array('EU 36', 'EU 37', 'EU 38'),
					'blue' => array('EU 37', 'EU 38', 'EU 39'),
					'green' => array('EU 36', 'EU 38', 'EU 39')
				)
			);

			// Retrieve parameters from GET request
			$product = isset($_GET['product']) ? $_GET['product'] : '';
			$color = isset($_GET['color']) ? $_GET['color'] : '';
			$size = isset($_GET['size']) ? $_GET['size'] : '';
			// Validate parameters
			if (empty($product) || empty($color) || empty($size)) {
				echo '<div class="alert alert-danger" role="alert">Invalid order. Please fill out all fields.</div>';
			} else {
				if (isset($stocks[$product][$color]) && in_array($size, $stocks[$product][$color])) {
					echo '<div class="alert alert-success" role="alert">Order sent: Product = '.$product.', Color = '.$color.', Size = '.$size.'</div>';
				} else {
					echo '<div class="alert alert-danger" role="alert">Invalid order. Please select a different color or size.</div>';
				}
			}
		?>
		<a href="edit.html" class="btn btn-primary">Back to Edit</a>
	</div>
	</body>
</html>