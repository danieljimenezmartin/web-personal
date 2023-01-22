$(document).ready(function(){
			// se ejecuta el evento hover al pasar el mouse por encima
			$(".logo").hover(function(){
				// cogemos el id del li por el que estamos pasando por encima
				var id=$(this).attr("id");
				// mostramos el div que tiene una clase que se llama como el id
				$("."+id).fadeIn('slow','linear');
			},function(){
				// esta función se ejecuta cuando pierde el foco
 
				var id=$(this).attr("id");
				$("."+id).fadeOut();
			})
		});