(function() {
  var e = 'cosme';
  var t = 'cosmefae';
  var n = '.com';
  var r = '<a href="mailto:' + e + '@' + t + n + '">' + e + '<b>@</b>' + t + n + '</a>';
  $('.hide-email').html(r);

  NProgress.start();
})();

$(window).load(function() {
  NProgress.done();
});
