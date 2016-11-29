 $(function() {


  
// change active class

$('section.features div.features1 div.container div.tabs a').on('click',function(e) {
  e.preventDefault;
  e = window.event;
  $('section.features div.features1 div.container div.tabs a').removeClass("active");
  $(this).addClass("active");
});

// end of change active

// MATERIAL DISIGN INK EFFECT 
var ink, d, x, y;
  $(".ripplelink").click(function(e){
        if($(this).find(".ink").length === 0){
        $(this).prepend("<span class='ink'></span>");
        
    }
         
    ink = $(this).find(".ink");
    ink.removeClass("animate");
    if(!ink.height() && !ink.width()){
        d = Math.max($(this).outerWidth(), $(this).outerHeight());
        ink.css({height: d + "px", width: d + "px"});

    }
    x = e.pageX - $(this).offset().left - ink.width()/2;
    y = e.pageY - $(this).offset().top - ink.height()/2;
     console.log(x + " " + y);
    ink.css({top: y+'px', left: x+'px'}).addClass("animate");
});

// END OF INK EFFECT



});