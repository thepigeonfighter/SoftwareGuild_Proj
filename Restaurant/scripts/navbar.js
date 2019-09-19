window.onscroll = function () { checkForStickyBar() };
var navBar = document.getElementsByTagName("nav");

function checkForStickyBar() {

    /*
    as a js noob cant figure out a way to make this work without inputing the exact offset
    */
        if (window.pageYOffset >= 150) {
            navBar[0].classList.add("sticky");
        } else {
            navBar[0].classList.remove("sticky");
        }
      
   
    
    
}