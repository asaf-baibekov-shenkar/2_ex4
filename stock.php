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
	// Set the content type to JSON
	header('Content-Type: application/json');

	// Check if the request method is GET
	if ($_SERVER['REQUEST_METHOD'] === 'GET') {
		// Return the stocks array as JSON
		echo json_encode($stocks);
	} else {
		// Return a 405 Method Not Allowed error
		http_response_code(405);
		echo json_encode(array('error' => 'Method Not Allowed'));
	}
?>