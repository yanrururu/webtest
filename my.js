//漢堡選單:講義107頁
$(function(){
	$("#menu").on("click",function(){
		if($("header").hasClass("openMenu")){
			$("header").removeClass("openMenu");
		}else{
	$("header").addClass("openMenu");
		}
	})
})



//FAQ開合
var dropdown = document.getElementsByClassName("faq_title");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

//FAQ箭頭
$(".faq_title").click(function (e) {
  e.preventDefault();
  $(this).find(".arrow").toggleClass("rotate");
});


