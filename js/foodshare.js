$(document).ready(function() {  


	$('button').click(calculate);
	$('.ingredient').change(calculate);
                

	/*-------------------------------------------------------------------------------------------------

	-------------------------------------------------------------------------------------------------*/
	function calculate() {
	        
	        var servings   = $('#servings').val();
	        var ingredient = parseFloat($('.ingredient').html());
	        
	        ingredient.each(function() {

					newAmount = servings * ingredient;
	                
	        }); // end of loop
	 		
	 		$('.ingredient').html(newAmount);

	}

}); //EOC