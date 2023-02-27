

$(function(){


    $('.counter').counterUp({
        delay: true,
        time: 1000,
      });

      
// $('.ser').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3
// });



$(window).scroll(function(){
  var scrolling = $(this).scrollTop()
  
  if(scrolling > 50){
  
    $(".main_bg").addClass("nav_bg")
  }else{
    $(".main_bg").removeClass("nav_bg")
  }
  if(scrolling >30){
    $(".back_2_top").fadeIn(500)
  }else{
    $(".back_2_top").fadeOut(500)
  }
  
  
  
  
  
  })
  
  
  
  
  
  $(".back_2_top").click(function(){
  
  $('html,.body').animate({
    scrollTop:0
  },2000)
  
  })
  

})