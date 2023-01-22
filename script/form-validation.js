jQuery(document).ready(function($){

	// hide messages 
	$("#error").hide();
	$("#sent-form-msg").hide();
	
	// on submit...
	$("#contactForm #submit").click(function() {
		$("#error").hide();
		
		//required:
		
		//name
		var name = $("input#name").val();
		if(name.trim() == ""){
			$("#error").fadeIn().text("Por favor introduce tu nombre");
			$("input#name").focus();
			return false;
		}
		
		//formato email
		var email = $("input#email").val();
		var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
		if (!regex.test($("#email").val().trim())) {
			$("#error").fadeIn().text("Email no introducido o incorrecto");
			$("input#email").focus();
			return false;
		}
		
		// asunto
		var asunto = $("input#asunto").val();
		if(asunto.trim() == ""){
			$("#error").fadeIn().text("Por favor introduce el asunto de tu mensaje");
			$("input#asunto").focus();
			return false;
		}

		// comments
		var comments = $("#comments").val();
		if(comments == ""){
			$("#error").fadeIn().text("Por favor introduce un mensaje");
			$("#comments").focus();
			return false;
		}
		
		//condiciones
		if (!document.getElementById('chkAcepto').checked) {
		$("#error").fadeIn().text("Por favor acepta los términos y condiciones");
	 document.getElementById('chkAcepto').focus();
       return false; 
		}
		
		
		// send mail php
		var sendMailUrl = $("#sendMailUrl").val();
		
		//to, from & subject
		var to = $("#to").val();
		var from = $("#from").val();
		var subject = $("#subject").val();
		
		// data string
		var dataString = 'name=' + name
						+ '&email=' + email        
						+ '&asunto=' + asunto
						+ '&comments=' + comments
						+ '&to=' + to
						+ '&from=' + from
						+ '&subject=' + subject;						         
		// ajax
		$.ajax({
			type:"POST",
			url: sendMailUrl,
			data: dataString,
			success: success()
		});
	});  
		
		
	// on success...
	 function success(){
	 	$("#sent-form-msg").fadeIn();
	 	//$("#contactForm").fadeOut();
		$("#contactForm")[0].reset();  	 
	}
	
    return false;
});

