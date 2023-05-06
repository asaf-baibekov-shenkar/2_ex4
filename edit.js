// let productSelect = document.getElementById("product");
// let sizeSlider = document.getElementById("size");
// let sizeValue = document.getElementById("size-value");
// productSelect.addEventListener("change", function() {
// 	if (productSelect.value === "shirt") {
// 		sizeSlider.min = 0;
// 		sizeSlider.max = 2;
// 		sizeSlider.value = 1;
// 		sizeSlider.step = 1;
// 		sizeValue.innerText = "M";
// 	} else if (productSelect.value === "pants") {
// 		sizeSlider.min = 28;
// 		sizeSlider.max = 32;
// 		sizeSlider.value = 30;
// 		sizeSlider.step = 1;
// 		sizeValue.innerText = "30";
// 	} else if (productSelect.value === "shoes") {
// 		sizeSlider.min = 25;
// 		sizeSlider.max = 50;
// 		sizeSlider.value = 40;
// 		sizeSlider.step = 1;
// 		sizeValue.innerText = "40";
// 	}
// });
// sizeSlider.addEventListener("input", function() {
// 	let size;
// 	if (productSelect.value === "shirt") {
// 		if (sizeSlider.value == 0) {
// 			size = "S";
// 		} else if (sizeSlider.value == 1) {
// 			size = "M";
// 		} else {
// 			size = "L";
// 		}
// 	} else {
// 		size = sizeSlider.value;
// 	}
// 	sizeValue.innerText = size;
// });

// $(document).ready(function() {
// 	$.ajax({
// 	   url: 'stock.php',
// 	   type: 'GET',
// 	   dataType: 'json',
// 	   success: function(stock) {
// 		   var productList = Object.keys(stock);
// 		   var productHtml = '';
// 		   for (var i = 0; i < productList.length; i++) {
// 			   var product = productList[i];
// 			   productHtml += '<h2>' + product + '</h2><ul>';
// 			   var colorList = Object.keys(stock[product]);
// 			   for (var j = 0; j < colorList.length; j++) {
// 				   var color = colorList[j];
// 				   productHtml += '<li><b>' + color + ':</b> ' + stock[product][color].join(', ') + '</li>';
// 			   }
// 			   productHtml += '</ul>';
// 		   }
// 		   $('#stock').html(productHtml);
// 	   }
//    });
// });




let productSelect = document.getElementById("product");
let sizeSlider = document.getElementById("size");
let sizeValue = document.getElementById("size-value");
let sizeInput = document.getElementById("size-input");
productSelect.addEventListener("change", function () {
	if (productSelect.value === "shirt") {
		sizeSlider.min = 0;
		sizeSlider.max = 3;
		sizeSlider.value = 1;
		sizeSlider.step = 1;
		sizeValue.innerText = "M";
		sizeInput.value = "M";
	} else if (productSelect.value === "pants") {
		sizeSlider.min = 0;
		sizeSlider.max = 3;
		sizeSlider.value = 1;
		sizeSlider.step = 1;
		sizeValue.innerText = "M";
		sizeInput.value = "M";
	} else if (productSelect.value === "shoes") {
		sizeSlider.min = 25;
		sizeSlider.max = 50;
		sizeSlider.value = 40;
		sizeSlider.step = 1;
		sizeValue.innerText = "40";
		sizeInput.value = "40";
	}
});

sizeSlider.addEventListener("input", function () {
	let size;
	if (productSelect.value === "shirt" || productSelect.value === "pants") {
		if (sizeSlider.value == 0) {
			size = "S";
		} else if (sizeSlider.value == 1) {
			size = "M";
		} else if (sizeSlider.value == 2) {
			size = "L";
		} else {
			size = "XL";
		}
	} else {
		size = sizeSlider.value;
	}
	sizeValue.innerText = size;
	sizeInput.value = size;
});

$(document).ready(function () {
	$.ajax({
		url: 'stock.php',
		type: 'GET',
		dataType: 'json',
		success: function (stock) {
			var productList = Object.keys(stock);
			var productHtml = '';
			for (var i = 0; i < productList.length; i++) {
				var product = productList[i];
				productHtml += '<h2>' + product + '</h2><ul>';
				var colorList = Object.keys(stock[product]);
				for (var j = 0; j < colorList.length; j++) {
					var color = colorList[j];
					productHtml += '<li><b>' + color + ':</b> ' + stock[product][color].join(', ') + '</li>';
				}
				productHtml += '</ul>';
			}
			$('#product-list').html(productHtml);
		},
		error: function (xhr, status, error) {
			console.error(xhr);
			console.error(status);
			console.error(error);
		}
	});
});