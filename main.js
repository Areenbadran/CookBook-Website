//=======================================================================================
                //Functionality For The Button, Tips//

$("#tips").click( function() {
	$("body").css("background-image","url('images/m.jpg')").css("color","white");
      $("#tip").append(
      	'<li class="first">Read the whole recipe first.</li><br>',
      	'<li class="first">Always sharpen knives.</li><br>',
      	'<li class="first">Use the right pans.</li><br>',
      	'<li class="first">Dry meats and vegetables before cooking them.</li><br>',
      	'<li class="first">Take Your Food`s Temperature.</li><br>',
      	'<li class="first">Start With a Hot Pan.</li><br>',
      	'<li class="first">Tenderize Your Meat.</li><br>',
      	'<li class="first">Clean as you go.</li><br>'
      	)
});

//=========================================================================================
             //Input For More Recipes, image of food, buttons(ingredient and steps)//

var array = ['Breakfast', 'Lunch', 'Dinner', 'Sweets'];
var x = $("#enter").one("click", function() {
 $("body").css("background-image","url('images/m.jpg')").css('background-repeat', 'repeat').css("color","white");
	if (array[0] === $("#input").val()) {
		$("#breakfast").append(
			'<div id="img1"><img src="images/egg1.jpg" width="150" height="150"> </div><br> <li> 5-Minute Omelet <button id="in1">Ingredients</button> <button id="ste1">Steps</button> <ul id="ing1"></ul> <br> <ol id="step1"></ol>  </li>'
			)}
	else if (array[1] === $("#input").val()) {
		$("#lunch").append(
			'<div id="img2"><img src="images/meat.jpg" id="img2" width="150" height="150"> </div><br> <li>Meatballs <button id="in2">Ingredients</button> <button id="ste2">Steps</button><ul id="ing2"></ul> <br> <ol id="step2"></ol> </li>'
			)}
	else if (array[2] === $("#input").val()) {	
		$("#dinner").append(
			'<div id="img3"> <img src="images/pasta.jpg" width="150" height="150"> </div><br><li>Pasta <button id="in3">Ingredients</button> <button id="ste3">Steps</button><ul id="ing3"></ul> <br> <ol id="step3"></ol> </li>'
			)}
	else if (array[3] === $("#input").val()) {	
		$("#sweets").append(
			'<div id="img4"> <img src="images/cake.jpg"  width="150" height="150"></div><br> <li>Cake <button id="in4">Ingredients</button> <button id="ste4">Steps</button>  <ul id="ing4"></ul> <br> <ol id="step4"></ol> </li>'
			)}
});


//=========================================================================================
                       //To See More Recipes//

$("#breakfast").one("click", "#in1", function() {
	$("#ing1").append(
		'<li>2 eggs</li>',
		'<li>1 tablespoon clarified butter (or whole butter)</li>',
		'<li>2 tablespoons whole milk</li>',
		'<li>1/8 teaspoon salt (to taste)</li>'
		)
});

$("#breakfast").one("click", "#ste1", function() {
	$("#step1").append(
		'<li>Gather the ingredients.</li>',
		'<li>In a glass mixing bowl, crack the eggs and beat them until they turn a pale yellow color.</li>',
		'<li>Heat a heavy-bottomed pan over medium-low heat. Add the butter and let it melt.</li>',
		'<li>Add the milk to the eggs and season to taste with salt and pepper.</li>',
		'<li>When the butter in the pan is hot enough to make a drop of water hiss, pour in the eggs. Don`t stir. Let the eggs cook for up to 1 minute or until the bottom starts to set.</li>'
		)
});

$("#lunch").one("click", "#in2", function() {
	$("#ing2").append(
		'<li>1/2 cup milk</li>',
		'<li>1 large egg</li>',
		'<li>1/2 cup grated Parmesan cheese</li>',
		'<li>1 pound ground meat</li>',
		'<li>1/2 cup finely chopped onion</li>'
		)
});

$("#lunch").one("click", "#ste2", function() {
	$("#step2").append(
		'<li>Combine the milk and breadcrumbs.</li>',
		'<li>Whisk the egg, salt, pepper, Parmesan, and parsley.</li>',
		'<li>Add the ground meat.</li>',
		'<li>Add the onions and soaked breadcrumbs.</li>',
		'<li>Form the meat into meatballs.</li>'
		)
});

$("#dinner").one("click", "#in3", function() {
	$("#ing3").append(
		'<li>1/2 cup extra virgin olive oil</li>',
		'<li>1 lb/500 g dried spaghetti</li>',
		'<li>1 tbsp red chilli flakes1 tbsp red chilli flakes</li>',
		'<li>1/4 cup chopped parsley1/4 cup chopped parsley</li>',
		'<li>1/8 teaspoon ground black pepper</li>'
		)
});

$("#dinner").one("click", "#ste3", function() {
	$("#step3").append(
		'<li>Heat oil over medium high heat. Add garlic and cook until golden - be careful not to burn it.  </li>',
		'<li>When pasta is ready, scoop out 1 cup of pasta cooking water, and drain pasta.</li>',
		'<li>Season with salt and pepper to taste. Finish pasta per chosen recipe.</li>',
		'<li>Toss with pasta and cooking water per Base Directions. Toss through parsley and chilli flakes, serve with parmesan.</li>',
		)
});


$("#sweets").one("click", "#in4", function() {
	$("#ing4").append(
		'<li>2 cups all-purpose flour</li>',
		'<li>2 cups sugar</li>',
		'<li>3/4 cup unsweetened cocoa powder</li>',
		'<li>2 teaspoons baking powder and vanilla extract</li>',
		'<li>2 large eggs</li>',
		'<li>1 cup boiling water</li>'
		)
});

$("#sweets").one("click", "#ste4", function() {
	$("#step4").append(
		'<li>Add flour, sugar, cocoa, baking powder, baking soda, salt and espresso powder to a large bowl or the bowl of a stand mixer. </li>',
		'<li>Add milk, vegetable oil, eggs, and vanilla to flour mixture and mix together on medium speed until well combined.</li>',
		'<li>Distribute cake batter evenly between the two prepared cake pans. Bake for 30-35 minutes.</li>',
		'<li>Frost cake with Chocolate Buttercream Frosting.</li>'
		)
});

//============================================================================================
                       //Button Contact us (Details)//

$("#info").one("click", function() {
	$("body").css("background-image","url('images/m.jpg')").css("color","grey");
     $("<p> Phone: <br>If you like to hear a voice at the other end, <br> we're there for you with everything you need.<br> Call +962 6 400 1000 <br><br>Email adress:<br> Because you might need help anytime, day-or-night.<br> So email and we'll get back to you as soon as possible.In order to resolve your query quickly,<br> please provide the following: <ul><li>First name.</li><li>Last name.</li><li>Mobile number.</li><li>Details of your query.</li></ul> areenbadran9@gmail.com</p>").appendTo("body");
});

//============================================================================================
                        //To add More Recipes//

$("#add").one("click", function() {
	$("body").css("background-image","url('images/m.jpg')").css('background-repeat', 'repeat').css("color","white");
	$("body").append("<p class='yay'>Recipe Name:</p>", "<input id='input-recipe1' class='yay' size='40'></input> <button id='add-recipe1' class='yay'>add</button>");
	    $("#add-recipe1").click( function() {
	    	var word = $("#input-recipe1").val();
	    	$("<p class='del'></p>").text(word).appendTo("#all");
	    	word = $("#input-recipe1").val('');
	    })
	});

$("#add").one("click", function() {
	$("body").append("<p class='yay'>Recipe Ingredients:</p>", "<input id='input-recipe2' class='yay' size='40'></input> <button id='add-recipe2' class='yay'>add</button>");
	    $("#add-recipe2").click( function() {
	    	var word = $("#input-recipe2").val();
	    	$("<li class='del'></li>").text(word).appendTo("#all");
	    	word = $("#input-recipe2").val('');
	    })
	});

$("#add").one("click", function() {
	$("body").append("<p class='yay'>Recipe Steps:</p>", "<input id='input-recipe3' class='yay' size='40'></input> <button id='add-recipe3' class='yay'>add</button>");
	    $("#add-recipe3").click( function() {
	    	var word = $("#input-recipe3").val();
	    	$("<li class='del'></li>").text(word).appendTo("#all");
	    	word = $("#input-recipe3").val('');
	    })
	});

//=============================================================================================
                          //Button Recipes To see all the added Recipes//

$("#recipes").one("click", function() {
     $(".yay").hide();
});

//==============================================================================================
                         //Home Button//

$("#home").click( function() {
	window.location.reload();
});


//================================================================================================
                         //Remove Button//

$("#delete").click( function() {
       $(".del").hide();
});                       




