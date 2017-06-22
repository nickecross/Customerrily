$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    //Scripts related to GForm submit
    // var submitted=false;
    // $('#gform').on('submit', function(e) {
    // $('#gform *').fadeOut(2000);
    // $('#gform').prepend('<p style="text-align: center;">Thank you for your submission! We will be in touch shortly.</p>');
    // });
    var submitted=false;
    $('#gform').on('submit', function(e) {
    $('#gform *').fadeOut(2000);
    $('#gform').prepend('<p style="text-align: center;">Thank you for your submission! We will be in touch shortly.</p>');
    });
    $('.scrollspy').scrollSpy({
      scrollOffset:100
    });
});
