// Side Navbar Js
var menuBtn = document.getElementById("menuBtn");
        var sideNav = document.getElementById("sideNav");

        sideNav.style.right = "-280px";
        menuBtn.onclick = function(){
            if(sideNav.style.right == "-280px"){
                sideNav.style.right = "0px";
            }
            else{
                sideNav.style.right = "-280px";
            }

        }


// Scroll Js

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
    }); 