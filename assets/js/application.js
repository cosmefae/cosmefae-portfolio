(function() {
  var e = 'cosme';
  var t = 'cosmefae';
  var n = '.com';
  var r = '<a href="mailto:' + e + '@' + t + n + '">' + e + '<b>@</b>' + t + n + '</a>';
  $('.hide-email').html(r);
  $('.hide-email-hire').html('<a href="mailto:' + e + '@' + t + n + '?subject=I really appreciated your work&body=Hey Cosme. I really appreciated your work and I want...">for hire</a>');

  NProgress.start();

  $('#works a, .item-works, .link-brand').click(function() {
    $('section, #header').css('opacity','0');
  });

  $('.link-readbio').click(function(e) {
    e.preventDefault();

		var $anchor = $(this);

    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 900,'easeInOutExpo');
  });

  $('.touch .gallery img').each(function() {
    var srcJob = $(this).attr('src');
    $(this).wrap('<a href="' + srcJob + '" title="Zoom"></a>');
  });

  $('.svg').inlineSVG();

  $('#extra-content article').each(function(e) {
    var all_list = $('#extra-content article');

    $(this).mouseenter(function() {
      all_list.addClass('out');
      $(this).removeClass('out').addClass('mouse_over');
    }).mouseleave(function() {
      all_list.removeClass('mouse_over out');
    });
  });

})();

window.scrollTo(0, 0);


$(window).load(function() {
  NProgress.done();

  setTimeout(function(){
    $('body').addClass('loaded');
  }, 200);
});

$(window).scroll(function() {
  if ($(this).scrollTop()>50) {
    $('#header h1 small').not(':animated').fadeOut();
  }
  else {
    $('#header h1 small').not(':animated').fadeIn();
  }
 });
