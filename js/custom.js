

	$(document).ready(function(){


	   $('.show_hide').showHide({			 
			speed: 300,  // speed you want the toggle to happen	
			easing: '',  // the animation effect you want. Remove this line if you dont want an effect and if you haven't included jQuery UI
			changeText: 0, // if you dont want the button text to change, set this to 0
			showText: 'View',// the button text to show when a div is closed
			hideText: 'Close' // the button text to show when a div is open
						 
		}); 


	});


		$(function() {

			var $tabs = $('#tabs').tabs();
	
			$(".ui-tabs-panel").each(function(i){
	
			  var totalSize = $(".ui-tabs-panel").size() - 1;
	
			  if (i != totalSize) {
			      next = i + 2;
		   		  $(this).append("<a href='#' class='next-tab mover' rel='" + next + "'>Next &#187;</a>");
			  }
	  
			  if (i != 0) {
			      prev = i;
		   		  $(this).append("<a href='#' class='prev-tab mover' rel='" + prev + "'>&#171; Prev</a>");
			  }
   		
			});
	
			$('.next-tab, .prev-tab').click(function() { 
		           $tabs.tabs('select', $(this).attr("rel"));
		           return false;
		       });
       

		});



	
