// console.log('Hello');

var menuButton = document.querySelector('i');
var hamburger = document.getElementById('hamburger')
var navbarElements = document.querySelector('.nav-list')
// Menu Click Event Listener

hamburger.addEventListener('click', handleMenuClick);

// Handle Menu Click 

function handleMenuClick () {
	// console.log('Click!');
	var navbar = document.querySelector('.nav-list');
	
	if (navbar.classList.contains('navbar-hidden')) {
		navbar.classList.toggle('navbar-hidden');
		menuButton.style.color = 'white';
		menuButton.classList.remove('fa-bars'); 
		menuButton.classList.add('fa-times');
	} else {
		navbar.classList.toggle('navbar-hidden');
		menuButton.style.color = 'white'
		menuButton.classList.remove('fa-times')
		menuButton.classList.add('fa-bars');
	}
}


hamburger.addEventListener('click', showHiddenNav);


function showHiddenNav() {
	console.log('hellooo')
	navbarElements.style.toggle('navbar')
}

// Smooth Scrolling 

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});