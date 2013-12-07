var values = new Array();
var ingredient = $(".ingredient");

$(document).ready(function() {
	
	$("button").click(calculate);
	$("#servings input").keyup(calculate);
	
	ingredient.each(function(i) {
		values[i] = $(this).html();
	});
});


// Calculate New Amount
function calculate() {
	var servings = $('#servings input').val();
	ingredient.each(function(i) {
		$(this).html("");
		var newAmount = parseFloat(values[i]) * parseFloat(servings);
		$(this).html(newAmount);
	});
};

