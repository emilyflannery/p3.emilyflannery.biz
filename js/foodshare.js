$(document).ready(function() {  


	$('button').click(calculate);
	$('.ingredient').change(calculate);
                

	/*-------------------------------------------------------------------------------------------------

	-------------------------------------------------------------------------------------------------*/
	function calculate() {
	        
	        var servings   = $('#servings').val();
	        var ingredient    = $('.ingredient');
	        
	        ingredient.each(function() {
	                
	                var amount = $(this);

					newAmount = servings * amount;
	                
	        }); // end of loop
	 		
	 		$('.ingredient').html(newAmount);

	}

}); //EOC