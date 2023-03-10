$(function(){
	$("#menu").on("click",function(){
		if($("header").hasClass("openMenu")){
			$("header").removeClass("openMenu");
		}
		else{
			$("header").addClass("openMenu");
		}
	})
})



var coll = document.getElementsByClassName("notice_btn");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}



$(function(){
  $(".notice_btn").on("click",function(){
    if($(this).find("img").hasClass("rotate")){
      $(this).find("img").removeClass("rotate");
    }
    else{
      $(this).find("img").addClass("rotate");
    }
  })
})