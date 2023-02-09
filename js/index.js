$(document).ready(function(){

  AOS.init({duration: 1000});


  $(window).bind('wheel', function(event){
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
      $('.con1_text1 div h2, .con4_text div h2').css({'animation': 'textLoopLeft 30s linear infinite'})
      $('.con1_text2 div h2').css({'animation': 'textLoopRight 80s linear infinite'})
    }
    else {
      $('.con1_text1 div h2, .con4_text div h2').css({'animation': 'textLoopRight 80s linear infinite'})
      $('.con1_text2 div h2').css({'animation': 'textLoopLeft 40s linear infinite'})
    }
  });


  $('.mLeft li:nth-child(2)').on('click',function(){
    $('.mRight').slideToggle();
  });
  
  $('.mLeft li:nth-child(1) i:nth-child(1)').on('click',function(){
    $(this).css({'display':'none'});
    $('.mLeft li:nth-child(1) i:nth-child(2)').css({'display':'block'})
  });


  $('.content2').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplayspeed: 2000,
    dots: true,
    speed: 300,
    fade: false,
    cssEase: 'linear'
  });


    $(window).scroll(function(){
    let docuTop = $(document).scrollTop();
    if(docuTop > 100){
      $('.fix').addClass('active');
      $('.mobile').css({'background':'#262523b6', 'color':'#f8f0e6','backdrop-filter':'blur(5px)'});
      $('.pc-tablet2').css({'opacity':'1'});
    }else{
      $('.fix').removeClass('active');
      $('.mobile').css({'background':'0', 'color':'#262523','backdrop-filter':'none'});
      $('.pc-tablet2').css({'opacity':'0'});
    }
  });
  

  $('.top').on('click', function(){
    let offset = $('#top').offset();
    $('html').animate({scrollTop : offset.top});
  });

  $('.bottom').on('click', function(){
    let offset = $('#bottom').offset();
    $('html').animate({scrollTop : offset.top});
  });

  $('.pc-tablet li:nth-of-type(1), .pc-tablet2 ul li:nth-of-type(1), .mRight li:nth-of-type(1), footer div ul li:nth-child(1)').on('click', function(){
    let offset = $('#menu1').offset();
    $('html').animate({scrollTop : offset.top});
  });
  $('.pc-tablet li:nth-of-type(2), .pc-tablet2 ul li:nth-of-type(2), .mRight li:nth-of-type(2), footer div ul li:nth-child(2)').on('click', function(){
    let offset = $('#menu2').offset();
    $('html').animate({scrollTop : offset.top});
  });
  $('.pc-tablet li:nth-of-type(3), .pc-tablet2 ul li:nth-of-type(3), .mRight li:nth-of-type(3), footer div ul li:nth-child(3)').on('click', function(){
    let offset = $('#menu3').offset();
    $('html').animate({scrollTop : offset.top});
  });
  $('.pc-tablet li:nth-of-type(4), .pc-tablet2 ul li:nth-of-type(4), .mRight li:nth-of-type(4), footer div ul li:nth-child(4)').on('click', function(){
    let offset = $('#menu4').offset();
    $('html').animate({scrollTop : offset.top});
  });


});