function toggleMainNav(){

	menu = document.querySelector( "ul.mainright" );

	if( menu.style.display == "none" || menu.style.display == "" ){

		menu.style.display = "flex";
	}else{

		menu.style.display = "none";
	}

	event.stopPropagation();
}
