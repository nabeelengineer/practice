function fname_val()
{
	var fname = document.getElementById("firstname").value;
	var input = document.getElementById("firstname");
	var check = document.getElementById("tick");
	fname == "" ? input.setAttribute("value","This field is empty field") : check.style.display = "inline";
	fname == "" ? input.setAttribute("class","animated infinite bounce") : check.style.display = "inline";
	fname == "" ? input.style.color = "red" : check.style.display = "inline";
	fname == "" ? input.style.border = "1px solid red" : check.style.display = "inline";
}

function fname_val_close()
{
	var fname = document.getElementById("firstname").value;
	var input = document.getElementById("firstname");
	fname == "This field is empty field" ? input.setAttribute("value",""):check.style.display = "inline";
	fname == "This field is empty field" ? input.setAttribute("class",""):check.style.display = "inline";
	fname == "This field is empty field" ? input.style.color = "black":check.style.display = "inline";
	fname == "This field is empty field" ? input.style.color = "1px solid #ccc":check.style.display = "inline";
	
}





