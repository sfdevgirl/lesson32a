$( document ).ready(function() {
	var input = +`${prompt("Pick a number to Fizz Buzz!")}`;
	for (var i=1; i <= input; i++) {
		if (i % 15 == 0) {
			$(body).append("fizzbuzz");
		} else if (i % 3 == 0) {
			$(body).append("fizz");
		} else if (i % 5 == 0) {
			$(body).append("buzz");
		} else {
			$(body).append(i);
		}
		$(body).append("<br>");
  	}
});