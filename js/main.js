// 按鈕顏色
$(function() {
    $(".filter > button").click(function() {
        $(this).css("color", "#fff").css("background", "#47cccc");
        $(this).siblings("button").css("color", "").css("background", "");
    }); 
})


// 預設開啟
$(".flex > div").filter(".employee").show();
$(".flex > div").not(".employee").hide();
$("#employee").css("color", "#fff").css("background", "#47cccc");
$("#employee").siblings("button").css("color", "").css("background", "");



// 個別篩選
$("#employee").click(function(){
  $(".flex > div").filter(".employee").show("fast");
  $(".flex > div").not(".employee").hide("fast");
});

$("#house").click(function(){
  $(".flex > div").filter(".house").show("fast");
  $(".flex > div").not(".house").hide("fast")
});

$("#student_ap").click(function(){
  $(".flex > div").filter(".student").show("fast");
  $(".flex > div").not(".student").hide("fast")
});

$("#student_ad").click(function(){
  $(".flex > div").filter(".student").show("fast");
  $(".flex > div").not(".student").hide("fast")
  $(".flex > div").filter(".student_ad").show("fast");
});

$("#proprietor").click(function(){
  $(".flex > div").filter(".proprietor").show("fast");
  $(".flex > div").not(".proprietor").hide("fast")
});


// slideshow
