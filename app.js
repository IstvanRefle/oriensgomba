/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var greetingsDisplay='True';
var c=1;

function waitForHide() {
	if (greetingsDisplay=='True') {
		document.getElementById("txt-greetings").style.display="block";
		setTimeout(greetingsHide,3000);	
	}
}

function greetingsHide() {
		if (c>=0) {
		document.getElementById("txt-greetings").style.color="hsla(0, 0%, 95%, " + c + ")";
		c=c-0.1;
		if (c>=0) {
			document.getElementById("txt-greetings").style.backgroundColor="hsla(0, 0%, 0%, " + (c-0.4) + ")";
		}
		setTimeout(function() {
			greetingsHide();
		}, 100);
	} else {
		document.getElementById("txt-greetings").style.display="none";
		greetingsDisplay='False';
	}
	
}