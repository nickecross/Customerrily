$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    console.log("scripts are loading correctly!");
    $('.modal').modal();
    $("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
  });
    //Scripts related to GForm submit
    // var submitted=false;
    // $('#gform').on('submit', function(e) {
    // $('#gform *').fadeOut(2000);
    // $('#gform').prepend('<p style="text-align: center;">Thank you for your submission! We will be in touch shortly.</p>');
    // });
    // var submitted=false;
    // $('#gform').on('submit', function(e) {
    // $('#gform *').fadeOut(2000);
    // $('#gform').prepend('<p style="text-align: center;">Thank you for your submission! We will be in touch shortly.</p>');
    // });
});
