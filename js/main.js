// kv&footer
$(function(){
    $(".kv > button").click(function(){
      $("article > div").css("height", "500px")
      $("footer").css("position", "relative")
    });
})

// kv-button
$(function() {
    $(".kv > button").click(function() {
        $(this).css("background", "#262626");
        $(this).siblings("button").css("background", "");
    }); 
})


// financial-button(tab) 
$(function() {
    $(".filter > button").click(function() {
        $(this).css("color", "#434343").css("background", "#fff");
        $(this).siblings("button").css("color", "").css("background", "");
    }); 
})


//button-apply
$("#apply").click(function(){
  $("section, .btn").filter(".apply").show();
  $(".btn, span").filter(".adjust").hide();
  
  $("button").filter("#student_ap").show();
  $("button").filter("#student_ad").hide();

  //預設第一項目開啟
  $(".flex > div").filter(".employee").show("fast")
  $(".flex > div").not(".employee").hide();

  //預設第一項目點擊效果
  $("#employee").css("color", "#434343").css("background", "#fff");
  $("#employee").siblings("button").css("color", "").css("background", "");
});

//button-adjust
$("#adjust").click(function(){
  $("section, span, .btn").filter(".adjust").show();
  $("section, .btn").not(".adjust").hide();

  $("button").filter("#student_ad").show();
  $("button").filter("#student_ap").hide();

  //預設第一項目開啟
  $(".flex > div").filter(".employee").show("fast")
  $(".flex > div").not(".employee").hide();

  //預設第一項目點擊效果
  $("#employee").css("color", "#434343").css("background", "#fff");
  $("#employee").siblings("button").css("color", "").css("background", "");
});


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

