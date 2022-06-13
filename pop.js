$('.button1').click(function(){
  $('.pop-up1').addClass('open');
});

$('.pop-up1 .close').click(function(){
  $('.pop-up1').removeClass('open');
});

// $(document).on('click', function(e) {
//     if (!$(e.target).closest('.pop-up1').length ==0) {
//         $('.pop-up').hide();
//     }
// });

$('.button2').click(function(){
  $('.pop-up2').addClass('open');
});

$('.pop-up2 .close').click(function(){
  $('.pop-up2').removeClass('open');
});

$('.button3').click(function(){
  $('.pop-up3').addClass('open');
});

$('.pop-up3 .close').click(function(){
  $('.pop-up3').removeClass('open');
});

