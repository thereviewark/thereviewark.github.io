
boolean food_catagory;
boolean toys_catagory;
boolean ac_catagory;
boolean tech_catagory;
boolean hl_catagory;

function DropDwnFood() {
	document.getElementById("dropdwn-food").classList.toggle("show");
	food_catagory = true;
	toys_catagory = false;
	ac_catagory = false;
	tech_catagory = false;
	hl_catagory = false;
}

function DropDwnToys() {
	document.getElementById("dropdwn-toys").classList.toggle("show");
	food_catagory = false;
	toys_catagory = true;
	ac_catagory = false;
	tech_catagory = false;
	hl_catagory = false;
}

function DropDwnAC() {
	document.getElementById("dropdwn-ac").classList.toggle("show");
	food_catagory = false;
	toys_catagory = false;
	ac_catagory = true;
	tech_catagory = false;
	hl_catagory = false;
}

function DropDwnTech() {
	document.getElementById("dropdwn-tech").classList.toggle("show");
	food_catagory = false;
	toys_catagory = false;
	ac_catagory = false;
	tech_catagory = true;
	hl_catagory = false;
}

function DropDwnHL() {
	document.getElementById("dropdwn-hl").classList.toggle("show");
	food_catagory = false;
	toys_catagory = false;
	ac_catagory = false;
	tech_catagory = false;
	hl_catagory = true;
}

window.onclick = function(event) 
{
	if(!event.target.matches('.drpbtn')) 
	{
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
			
		for (i = 0; i < dropdowns.length; i++) 
		{
			var openDropdown = dropdowns[i];
				
			if(openDropdown.classList.contains('show')) 
			{
				openDropdown.classList.remove('show');
			}
		}
	}
}