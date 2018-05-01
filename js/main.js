// Steps 1, 2, and 3 are in main.css

// Step 4: Add the "active" class to the "sidebar" when the hamburger icon is clicked.
$('.hamburger').on('click', function(){
	$('.sidebar').addClass('active');
});

// Step 5: Remove the "active" class from the "sidebar" when the "x" is clicked.
$('.close').on('click', function(){
	$('.sidebar').removeClass('active');
});
