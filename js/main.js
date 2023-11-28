// 漢堡選單
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


//FAQ開合
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


//FAQ箭頭
$(".notice_btn").click(function (e) {
  e.preventDefault();
  $(this).find("img").toggleClass("rotate");
});