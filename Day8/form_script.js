
function phoneValidator(phoneNum){
	var error = $("<p></p>").text("Invalid phone number")

	if (phoneNum.length != 12) {
		$("#submit-btn").after(error);
		return;
	}
	for (var i = 0; i < 12; i++) {
		if(i === 3 || i === 7) {
			if (phoneNum[i]!= "-") {
				$("#submit-btn").after(error);
		return;
			}
		}
	for (var i = 0; i < 12; i++) {
		if(i != 3 && i !=7) {
			if (isNaN(phoneNum[i])) {
				$("#submit-btn").after(error);
		return;
			}
		}		
	}
	
}
}

function emailValidator(email){
	var error = $("<p></p>").text("Invalid email address")

	if (email.length != 11) {
		$("#submit-btn").after(error);
		return;
	}
for (var i = 0; i < 11; i++) {
		if(i === 3) {
			if (email[i]!= "@") {
				$("#submit-btn").after(error);
		return;
			}
		}
	for (var i = 0; i < 11; i++) {
		if(i === 7) {
			if (email[i] != ".") {
				$("#submit-btn").after(error);
		return;
			}
		}		
	}
	
}


	// for (int i = 0; i < email.length; i++) {
	// 	if (email.charCodeAt(0) 
	// }
	
}



$(document).ready(function() {
	$("#submit-btn").click(function(){
		phoneValidator($("#phone").val());
		 emailValidator($("#email").val());
});
});








// 		if (event.which === 13) {
// 			$("todo-input").val("");
// 		}
// 	});
// });
