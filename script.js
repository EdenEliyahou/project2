// var nystories = document.querySelector("p").offsetTop;
// window.onscroll = function() {
//   if (window.pageYOffset > 0) {
//  var opac = (window.pageYOffset / nystories);
//     console.log(opac);
//   document.body.style.background = " url(sec.jpg) ";
//   }
// }

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $("#js-hero video").css({
      width: (100 + scroll/5) + "%"
    })
  })
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
   document.getElementById("myDropdown").classList.toggle("show");
 }
 
 // Close the dropdown menu if the user clicks outside of it
 window.onclick = function(event) {
   if (!event.target.matches('.dropbtn')) {
     var dropdowns = document.getElementsByClassName("dropdown-content");
     var i;
     for (i = 0; i < dropdowns.length; i++) {
       var openDropdown = dropdowns[i];
       if (openDropdown.classList.contains('show')) {
         openDropdown.classList.remove('show');
       }
     }
   }
 }
