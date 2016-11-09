$(document).ready(function() {
	
	$(".author, .image, .title, .quote, .text, .cover").hide();

	$('#attribute').change(function () {

		var dropdown = document.getElementById("attribute");
		var value = dropdown.options[dropdown.selectedIndex].text;

		switch ( value){			

			case "author":
				$(".author").show();
				$(".image, .title, .quote, .text, .cover").hide();
				break;
			case "image":
				
				$(".image").show();
				$(".author, .title, .quote, .text, .cover").hide();
				break;
			case "title":
				
				$(".title").show();
				$(".author, .image, .quote, .text, .cover").hide();
				break;
			case "quote":
				
				$(".quote").show();
				$(".author, .image, .title, .text, .cover").hide();
				break;
			case "text section":
				
				$(".text").show();
				$(".author, .image, .title, .quote, .cover").hide();
				break;
			case "cover image":
				
				$(".cover").show();
				$(".author, .image, .title, .quote, .text").hide();
				break;
			default:
				$(".form").hide();
		}

	});
	


});