$(document).ready(function () {

	var offset = 50;
	
	function randomColor() {
		var red = Math.floor((Math.random() * 256));
		var green = Math.floor((Math.random() * 256));
		var blue = Math.floor((Math.random() * 256));

		return [red, green, blue];
		
		// return '#' + Math.random().toString(16).slice(2, 8);
	};

	function randomOffsetColor(red, green, blue){
		var value = (red + green + blue)/3;
		var newValue = value + 2 * Math.random() * offset - offset;
		var valueRatio = newValue / value;

		console.log(valueRatio);

		red = Math.floor(red * valueRatio);
		green = Math.floor(green * valueRatio);
		blue = Math.floor(blue * valueRatio);

		return [red, green, blue];
	}

	function formatRGB(rgb){
		return 'rgb('+rgb[0]+','+rgb[1]+','+rgb[2]+')';
	}


	$("#button_random_color").on("click", function () {
		
		var rgb = randomColor();
		var rgb1 = randomOffsetColor(rgb[0],rgb[1],rgb[2]);
		var rgb2 = randomOffsetColor(rgb1[0],rgb1[1],rgb1[2]);

		console.log(rgb1);
		console.log(rgb2);
		
		$('body').css('background', formatRGB(rgb));
		$('.btn').css('background', formatRGB(rgb1))
		$('.btn').css('color', formatRGB(rgb2))
	});
});