document.getElementById(cityName).style.display = "block";
console.log(document.getElementById('Support-Services')); // Does this return null?
tablinks = document.getElementsByClassName("tablink");

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;

  // Hide all content
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove active class from all buttons
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show current content and set active button
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.querySelector('.tablinks').dispatchEvent(new Event('mouseover'));


// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
