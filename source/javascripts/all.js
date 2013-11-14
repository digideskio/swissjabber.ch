//= require_tree .

Zepto(function($){
  theme = readCookie('theme')

  if(theme) {
    $('body').addClass(theme);
  }
})

$.each(['white', 'dark', 'girly', 'nineties'], function(index, item){
  $(document).on('click', 'a.change-theme.' + item, function() {
    $('body').removeClass('white dark girly nineties');
    $('body').addClass(item);
    createCookie('theme', item, 100);
  });
});

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}
