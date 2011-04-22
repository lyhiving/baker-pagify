// baker-pagify
// made by Harry Keller
// https://github.com/harryfk/baker-pagify
// released under the MIT license

$(function() {
  var page_height, position, offset, page;
  $(document).bind('touchend', snap_to_page);
  $(document).bind('scroll', snap_to_page);
  
  function snap_to_page() {
    page_height = $('.page').eq(0).height();
    position = $(window).scrollTop();
    offset = position % page_height;
    page = Math.floor(position / page_height);
    if (offset < page_height / 2) {
      //scroll up
      $('.page').eq(page).intoViewport();
    } else {
      //scroll down
      $('.page').eq(page+1).intoViewport();
    }
  }
});