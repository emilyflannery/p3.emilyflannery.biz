$(document).ready(function() {  

    // Perform calculation
	$('button').click(calculate);
	$('.ingredient').change(calculate);
                
	var servings = $('#servings').val(); // 5
	var ingredient = $('.ingredient'); // .25 
	
	// Calculate New Amount
	function calculate() {
		
		var amount = $(this).html(); // .25
	    var newAmount = parseFloat(amount) * parseFloat(servings); // 1 = .25 * 4
		var originalAmount = newAmount / parseFloat(servings); // .25 = 1 / 4  

		ingredient.each(function() {

	        $(this).html(originalAmount * parseFloat(servings)); // .25 * 1 = 1

	    }); // end of loop
	};


}); //EOC


