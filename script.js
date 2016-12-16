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
        /*$('.menuDesk').animate({height:'72px'});
        $('.menuMobile').animate({height:'72px'});*/
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
    
    $('.hide').hide();

    //the 'hide' click
        $('.hide').click($.hide);
    
    //the 'show' click
        $('.show').click($.show);
        

    
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
  var randPosX = Math.floor((((Math.random()*2)/2)*(bodyWidth - grab_width)));
  var randPosY = Math.floor((((Math.random()+.5)/2)*(bodyHeight - grab_height)));
  
  $(this).css('left', randPosX);
  $(this).css('top', randPosY);
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

/*

these next functions are responsible for bringing the correct card to the top of the pile when its name is moused over in the menu.

*/
$( "#100-days-of-textures-btn" ).mouseenter(
  function() {
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
    $('#100-days-of-textures-card').css('z-index', topZ+1);
  }
);
    
$( "#kunsthaus-bregenz-btn" ).mouseenter(
  function() {
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
    $('#kunsthaus-bregenz-card').css('z-index', topZ+1);
  }
);
    
$( "#100-days-project-btn" ).mouseenter(
  function() {
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
    $('#100-days-project-card').css('z-index', topZ+1);
  }
);
    
$( "#nourishment-btn" ).mouseenter(
  function() {
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
    $('#nourishment-card').css('z-index', topZ+1);
  }
);
    
$( "#anatomy-sculptures-btn" ).mouseenter(
  function() {
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
    $('#anatomy-sculptures-card').css('z-index', topZ+1);
  }
);
    
$( "#website-sketches-btn" ).mouseenter(
  function() {
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
    $('#website-sketches-card').css('z-index', topZ+1);
  }
);
    
$( "#transitions-btn" ).mouseenter(
  function() {
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
    $('#transitions-card').css('z-index', topZ+1);
  }
);
    
$( "#binaries-btn" ).mouseenter(
  function() {
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
    $('#binaries-card').css('z-index', topZ+1);
  }
);
    
$( "#sketches-btn" ).mouseenter(
  function() {
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
    $('#sketches-card').css('z-index', topZ+1);
  }
);
      
$( "#bike-build-btn" ).mouseenter(
  function() {
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
    $('#bike-build-card').css('z-index', topZ+1);
  }
);
    
$( "#gig-posters-btn" ).mouseenter(
  function() {
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
    $('#gig-posters-card').css('z-index', topZ+1);
  }
);

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

});


















 
