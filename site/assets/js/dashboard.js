$(document).ready(function() {
	
	$(".author").hide();
	$(".image").hide();
	$(".title").hide();
	$(".quote").hide();
	$(".text").hide();
	$(".cover").hide();


	$('#attribute').change(function () {

		var dropdown = document.getElementById("attribute");
		var value = dropdown.options[dropdown.selectedIndex].text;

		switch ( value){			

			case "author":
				$(".author").show();
				$(".image").hide();
				$(".title").hide();
				$(".quote").hide();
				$(".text").hide();
				$(".cover").hide();
				break;
			case "image":
				
				$(".image").show();
				$(".author").hide();
				$(".title").hide();
				$(".quote").hide();
				$(".text").hide();
				$(".cover").hide();
				break;
			case "title":
				
				$(".title").show();
				$(".author").hide();
				$(".image").hide();
				$(".quote").hide();
				$(".text").hide();
				$(".cover").hide();
				break;
			case "quote":
				
				$(".quote").show();
				$(".author").hide();
				$(".image").hide();
				$(".title").hide();
				$(".text").hide();
				$(".cover").hide();
				break;
			case "text section":
				
				$(".text").show();
				$(".author").hide();
				$(".image").hide();
				$(".title").hide();
				$(".quote").hide();
				$(".cover").hide();
				break;
			case "cover image":
				
				$(".cover").show();
				$(".author").hide();
				$(".image").hide();
				$(".title").hide();
				$(".quote").hide();
				$(".text").hide();
				break;
			default:
				$(".form").hide();
		}

	});
	


});