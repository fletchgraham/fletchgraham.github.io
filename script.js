/* canvas draw function. genetic material from an ancient website of mine */

window.onload = function () {

var color = "#6900ff";
var $canvas = $("canvas");
//Select the first, only canvas element. Select the actual HTML element using the array syntax [index], get the 2d context.
var context = $canvas[0].getContext("2d");
  context.canvas.width  = window.innerWidth;
  context.canvas.height = window.innerHeight;
var lastEvent;

//On mouse events on the canvas
$canvas.mouseover(function(e) {
    lastEvent = e;
    mouseDown = true;

}).mousemove(function(e) {
        //Draw lines
        context.beginPath();
        context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
        context.lineTo(e.offsetX, e.offsetY);
        context.strokeStyle = color;
        context.stroke();
        context.lineWidth=3;
        lastEvent = e;
}).mouseup(function() {
    mouseDown = false;
}).mouseleave(function() {
    //$canvas.mouseup();
});

}

/*

NOTES ON THE DYNAMIC MENU

-the show hide buttons are rigged up with jquery
-if the page is loaded while in desktop mode, they don't show up.
-if the page is loaded while in tablet mode, the menu is collapsed and the show button is visible
-if the page is sized up from tablet to desktop, the show and hide buttons are still visible; a weird feature but kinda cool
-it is important that the show button makes the menu expand to the scroll height, so that items are not cuttoff.

*/

$(document).ready(function(){
	

$.show = function()
    {
        $('.hide').show();
        $('.show').hide();
        $('.collapse').show ();
        $( '.menuDesk' ).css({
        height: "auto",
        });
        $( '.menuMobile' ).css({
        height: "auto",
        });
    }
$.hide = function()
    {
        $('.show').show();
        $('.hide').hide ();
        $( '.menuDesk' ).css({
        height: "auto",
        });
        $( '.menuMobile' ).css({
        height: "auto",
        });
        $('.collapse').hide ();
    }

if ($(window).width() < 768) {
    $('.menuDesk').hide ();
    $('.menuMobile').show ();
    $('.collapse').hide ();
}

if ($(window).width() > 768) {
    $('.menuDesk').show ();
    $('.menuMobile').hide ();
    $('.collapse').hide ();
}

$(window).resize(function(){

    $( '.menuDesk' ).css({
        height: "auto",
    });
    $( '.menuMobile' ).css({
        height: "auto",
    });

    if ($(window).width() < 768) {
    $('.menuDesk').hide ();
    $('.menuMobile').show ();
    $.hide();
}

if ($(window).width() > 768) {
    $('.menuDesk').show ();
    $('.menuMobile').hide ();
}
});

$( ".blurb" ).click(function() {
  $(this.children).toggle();
});

    $('.hide').hide();

    //the 'hide' click
        $('.hide').click($.hide);

    //the 'show' click
        $('.show').click($.show);

$('.verbose').click(function() {
    $(".article p").toggle();
});

/* these guys actually give the drag functionality to the cards and the menu */
$('.grab').draggable();
$('.menuDesk').draggable();
$('.daario-naharis').draggable();


/* this is for making the location of the floaty boxes random */

  var bodyWidth = window.innerWidth
  var bodyHeight = window.innerHeight;
    $('.grab').each(function(){
    var grab_width = this.clientWidth;
    var grab_height = this.clientHeight;
  var randPosX =(((Math.random()*2)/2)*(bodyWidth - grab_width)/bodyWidth)*100;
        var newLeft = randPosX.toString() + "%";
  var randPosY = (((Math.random()+0.5)/2)*(bodyHeight - grab_height)/bodyHeight)*100;
        var newTop = randPosY.toString() + "%";

  $(this).css('left', newLeft);
  $(this).css('top', newTop);
    });


/* this creates the little x in the top of each floaty box allowing the viewer to close them */

    $( ".grab" ).append( "<div class='x'>X</div>" );
    $( ".x" ).click(function() {
        $(this).parent('div').css('display','none');
    });


/* this makes the list decoration things change if the page is active */

    $("[href]").each(function() {
    if (this.href == window.location.href) {
        $(this).parent('li').addClass('active');
        }
    });

/* this bit brings the clicked card to the front */

$('.grab').mousedown(function(){
    var topZ = 0;
    $('.grab').each(function(){
        var thisZ = parseInt($(this).css('z-index'), 10);
        if (thisZ > topZ){
            topZ = thisZ;
        }
    });
    $('.menu').each(function(){
        var menuZ = parseInt($(this).css('z-index'), 10);
        if (menuZ > topZ){
            topZ = menuZ;
        }
    });
    $(this).css('z-index', topZ+1);
});


$('.menu').mousedown(function(){
    var topZ = 0;
    $('.grab').each(function(){
        var thisZ = parseInt($(this).css('z-index'), 10);
        if (thisZ > topZ){
            topZ = thisZ;
        }
    });
    $(this).css('z-index', topZ+1);
});

/* these show and hide the mouseover titles over the loops */

$('.small-img').mouseenter(function() {
    $(this.lastChild).show()
});

$('.small-img').mouseleave(function() {
    $(this.lastChild).hide()
});


});
