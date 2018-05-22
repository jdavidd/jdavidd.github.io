function click(){
	document.getElementById("btn").addEventListener("click", function() {
		var y = document.getElementById('testdrive')
		y.style.display = "block"
		}, false);

	document.getElementById("test").addEventListener("click", function() {
	   var x = document.getElementById("test");
	   var parent = x.parentNode;
	   parent.removeChild(x);
	}, true);
}
function allLetter(inputtxt){
          var letters = /^[A-Za-z]+$/;
          if(inputtxt.value.match(letters))
          {

          return true;
          }
          else
          {

          return false;
          }

}
function verify_input_numbers(){
	var first_name = document.querySelector(".verify_first_name");
	var last_name = document.querySelector(".verify_last_name");
	var email = document.querySelector(".verify_email")
	var zip = document.querySelector(".verify_zip")
	var phone = document.querySelector(".verify_phone");
	var check_robot = document.querySelector(".selected_field");
	var inp = check_robot.getElementsByClassName("question1");
	// Regular Expression For Email
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	// Regular Expression For Phone
	var phoneReg = /^\d{10}$/;
	var zipReg = /^\d{8}$/;
	var okk=0;



		for( var i = 0 ;i < inp.length; i++)
	{

		if(inp[i].checked)
			if(inp[i].value==1)
			{
		     	okk=1;
			}

	}
	if(okk == 1)
	{
		if(allLetter(first_name))
		{
			if(allLetter(last_name))
			{
				if(phone.value.match(phoneReg) )
				{
					if(zip.value.match(zipReg))
					{
						if(email.value.match(emailReg))
						{

							alert("All type of validation has done on OnSubmit event.");
							return true;
						} else
						{
							alert("Email is not corect");
							return false;
						}
					}else
					{
						alert("zip is not corect");
						return false;
					}
				} else
				{
					alert("phone is not corect");
					return false;
				}
			} else
			{
				alert("Last name is not valid");
				return false;
			}
		}else
			{
				alert("First name is not valid ");
				return false;
			}
	}else
	{
		alert("Answer wrong, you're a robot!");
		generate_quiz();
		return false;
	}
}
function alertt(){
	alert("okk")
}
function onSubmitt()
{
	var x = document.querySelector(".submitt");
	x.onsubmit = verify_input_numbers;
}
function generate_quiz(){

	var x = document.getElementsByClassName("hide");
	var y = Math.floor((Math.random() * 4));
	var string = "block"
	for(var i = 0; i < x.length; i++)
	{
		var theCSSprop = window.getComputedStyle(x[i],null).getPropertyValue("display");
		if(theCSSprop.localeCompare(string) == 0)
		{
			x[i].style.display = "none";

		}
		x[i].classList.remove("selected_field");
	}
	x[y].style.display = "block";
	x[y].classList.add("selected_field");

}

function myFunction() {
	var x = window.matchMedia("(max-width: 700px)");
	var image = document.getElementById("logo");
    if (x.matches) { // If media query matches
        image.src ="../Image-S/tesla.png";
    }
}
/*
function modify_navbar(){
	var nav1 = document.getElementById("responsive1");
	var nav2 = document.getElementById("responsive2");
	var x = window.matchMedia("(max-width: 700px)");
    if (x.matches) { // If media query matches
      nav1.classList.remove("col-8");
			nav1.classList.add("col-2");
			nav2.classList.remove("col-4");
			nav2.classList.add("col-10");
		}
}
*/
function start(){
	click();
	generate_quiz();
	onSubmitt();
	myFunction();
	//modify_navbar();

}
window.onload = start;
