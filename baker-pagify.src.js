$(function() {
  var page_height, position, offset, page;
  $(window).scroll(function() {
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
  });
});