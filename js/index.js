var s = skrollr.init();
//SEE MORE0按鈕
$(".btn1").mouseenter(function(){
  $(".btn1").text("star");
  $(".btn1").addClass("btn1-1");
 
});

$(".btn1").mouseleave(function(){
  $(".btn1").text("see more");
  $(".btn1").removeClass("btn1-1");
 
});
//導覽列滑動
$(document).on('click','a',function(event){
  event.preventDefault();
  var target= $(this).attr("href");
  $('html,body').animate({
    scrollTop: $(target).offset().top
  },500);
  
});


//導覽列
$(window).scroll(function(evt){
  if ($(window).scrollTop()>0)
    $(".navbar").removeClass("navbar-top"); 
  else
      $(".navbar").addClass("navbar-top");
});

//start
$(".btn1").click(function(){
  $('html, body').animate({
                scrollTop: 600
            }, 500);
})