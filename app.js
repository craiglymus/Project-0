// console.log('Hello');

var menuButton = document.querySelector('i');
var hamburger = document.getElementById('hamburger')
var navbarElements = document.querySelector('.nav-list')
// Menu Click Event Listener

menuButton.addEventListener('click', handleMenuClick);

// Handle Menu Click 

function handleMenuClick () {
	// console.log('Click!');
	var navbar = document.querySelector('.nav-list');
	
	if (navbar.classList.contains('navbar-hidden')) {
		navbar.classList.toggle('navbar-hidden');
		menuButton.style.color = '#fff';
		menuButton.classList.remove('fa-bars'); 
		menuButton.classList.add('fa-times');
	} else {
		navbar.classList.toggle('navbar-hidden');
		menuButton.style.color = '#000'
		menuButton.classList.remove('fa-times')
		menuButton.classList.add('fa-bars');
	}
}


hamburger.addEventListener('click', showHiddenNav);


function showHiddenNav() {
	console.log('hellooo')
	navbarElements.style.toggle('navbar')
}