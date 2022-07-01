// document.querySelector(".icon").addEventListener("click", function(){
//   document.querySelector("input").classList.toggle("active");
// })


$(document).ready(function() {

	$(".fa-search").click(function() {
    
	   $(".togglesearch").toggle();
	   $("input[type='text']").focus();
	 });
  
});


