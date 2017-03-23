$(document).ready(function(){

// Change Genre Selections

	function autobiographyGenre() {
		$("div#writing h3.selected").removeClass("selected");
		$("h3.autobiography").addClass("selected")

		$("div.books.selected").removeClass("selected");
		$("div.autobiography").addClass("selected")
	}

	function fantasyGenre() {
		$("div#writing h3.selected").removeClass("selected");
		$("h3.fantasy").addClass("selected")

		$("div.books.selected").removeClass("selected");
		$("div.fantasy").addClass("selected")
	}

	function fictionGenre() {
		$("div#writing h3.selected").removeClass("selected");
		$("h3.fiction").addClass("selected")

		$("div.books.selected").removeClass("selected");
		$("div.fiction").addClass("selected")
	}

	$("h3.autobiography").click(autobiographyGenre)
	$("h3.fantasy").click(fantasyGenre);
	$("h3.fiction").click(fictionGenre);

	function thrillerGenre() {
		$("div#film h3.selected").removeClass("selected");
		$("h3.thriller").addClass("selected")

		$("div.films.selected").removeClass("selected");
		$("div.thriller").addClass("selected")
	}

	function dramaGenre() {
		$("div#film h3.selected").removeClass("selected");
		$("h3.drama").addClass("selected")

		$("div.films.selected").removeClass("selected");
		$("div.drama").addClass("selected")
	}

	function actionGenre() {
		$("div#film h3.selected").removeClass("selected");
		$("h3.action").addClass("selected")

		$("div.films.selected").removeClass("selected");
		$("div.action").addClass("selected")
	}

	$("h3.thriller").click(thrillerGenre)
	$("h3.drama").click(dramaGenre);
	$("h3.action").click(actionGenre);

//Add to Cart Button
	
	$("button.cart").click(function(){
        alert("Your item has been added. Thanks for shopping with B.A.J!");
    });

// Expand Team Member Information
	var expand_founder = function() {	  
	  if ($("#teamEditor").hasClass("expand")) {
	  	expand_editor();
	  } else if ($("#teamDeveloper").hasClass("expand")) {
	  	expand_developer();
	  } else if ($("#teamProduct").hasClass("expand")) {
	  	expand_product();
	  }

	  $("#teamFounder").toggleClass("expand");
	  $("#teamFounder").children().toggleClass("content_visible");
	}

	var expand_editor = function() {
	  if ($("#teamFounder").hasClass("expand")) {
	  	expand_founder();
	  } else if ($("#teamDeveloper").hasClass("expand")) {
	  	expand_developer();
	  } else if ($("#teamProduct").hasClass("expand")) {
	  	expand_product();
	  }

	  $("#teamEditor").toggleClass("expand");
	  $("#teamEditor").children().toggleClass("content_visible");
	}

	var expand_developer = function() {
	  if ($("#teamFounder").hasClass("expand")) {
	  	expand_founder();
	  } else if ($("#teamEditor").hasClass("expand")) {
	  	expand_editor();
	  } else if ($("#teamProduct").hasClass("expand")) {
	  	expand_product();
	  }	

	  $("#teamDeveloper").toggleClass("expand");
	  $("#teamDeveloper").children().toggleClass("content_visible")
	}

	var expand_product = function() {
	  if ($("#teamFounder").hasClass("expand")) {
	  	expand_founder();
	  } else if ($("#teamEditor").hasClass("expand")) {
	  	expand_editor();
	  } else if ($("#teamDeveloper").hasClass("expand")) {
	  	expand_developer();
	  }

	  $("#teamProduct").toggleClass("expand");
	  $("#teamProduct").children().toggleClass("content_visible")
	}

	$("#teamFounder").click(expand_founder);

	$("#teamEditor").click(expand_editor);

	$("#teamDeveloper").click(expand_developer);

	$("#teamProduct").click(expand_product);
	

})
