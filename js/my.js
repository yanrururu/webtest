
// $(function(){
// 	$(".faq_set").on("click",function(){
// 		if($(this).find(".faq_arrow").hasClass("rotate")){
// 				 $(this).find(".faq_arrow").removeClass("rotate");
// 		}else{
// 				$(this).find(".faq_arrow").addClass("rotate");
// 		}
// 	})
// })

// $(function(){
// 	$(".faq_set").on("click",function(){
// 		if($(this).find(".faq_content").hasClass("close")){
// 			 	$(this).find(".faq_content").removeClass("close");
// 		}else{
// 				$(this).find(".faq_content").addClass("close");
// 		}
// 	})
// })




$(function(){
    $(".faq_set").on("click",function(){
      $(this).find(".faq_arrow").toggleClass("rotate");
      $(this).find(".faq_word").slideToggle("open");
    })


})



// 輪播
 const swiper = new Swiper('.swiper-container', {
            loop: true,
            watchSlidesProgress: true,

            slidesPerView: 1,
            breakpoints: {
              550: {
                slidesPerView: 2,
              },
              890: {
                slidesPerView: 3,
                // spaceBetween: 20,
              },
            },
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

        });



