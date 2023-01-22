$(document).ready(main);
		 
		var contador = 1;
		 
		function main () {
			$('.menu_bar').click(function(){
				if (contador == 1) {
					$('#navegacion').animate({
						left: '0'
					});
					contador = 0;
				} else {
					contador = 1;
					$('#navegacion').animate({
						left: '-100%'
					});
				}
			});
		}

$(document).ready(main2);
		function main2 () {
			$('.scroll').click(function(){
				if (contador == 0) {
					contador = 1;
					$('#navegacion').animate({
						left: '-100%'
					});
					
				} else {
					return false;
				}
			});
		}