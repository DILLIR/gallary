let button = document.querySelectorAll(".menu__action"),
	menu = document.querySelector(".navigation__menu");

	for(let item of button){
		item.addEventListener("click", function(){
			menu.classList.toggle("none");
		})
	}
