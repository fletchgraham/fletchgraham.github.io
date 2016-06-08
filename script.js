window.onload = function(){
    
var color = "#6900ff";
var $canvas = $("canvas");
//Select the first, only canvas element. Select the actual HTML element using the array syntax [index], get the 2d context.
var context = $canvas[0].getContext("2d");
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
    //the 'hide' click
        $('.hide').click(function(){
        $('.show').show();
        $('.hide').hide ();
        $('#description').hide ();
        $('.menu').animate({height:'72px'}, 300);});
    
    //the 'show' click
        $('.show').click(function(){
        $('.hide').show();
        $('.show').hide();
        $('#description').show ();
        $('.menu').animate({height:$('.menu')[0].scrollHeight + 15}, 300);});

   });

$(document).ready(function() {
    $("[href]").each(function() {
    if (this.href == window.location.href) {
        $(this).parent('li').addClass('active');
        }
    });
});
 
