$(document).ready(function(){

  $('.cicle').click(function(){
    $('.branch_container').toggle();

  });


  $(".circle").mouseenter(function(){
    $(this).animate({
      height: "+=10",
      width: "+=10"
    },500);
  });
  $(".circle").mouseleave(function(){
    $(this).animate({
      height: "-=10",
      width: "-=10"
    },500);
  });

});
