$(document).ready(function(){
    $("#hotelRecUp").hide();

    $("#upcountryRecom1").click(function(){
      $("#hotelRecBangkok").hide();
      $("#cardBangkok").fadeOut();
      $("#hotelRecUp").show();
      $("#cardUpc").fadeIn();
    });
    
    $("#bangkokRecom1").click(function(){
      $("#hotelRecUp").hide();
      $("#cardUpc").fadeOut();
      $("#hotelRecBangkok").show();
      $("#cardBangkok").fadeIn();
    });

    $("#upcountryRecom2").click(function(){
        $("#hotelRecBangkok").hide();
        $("#cardBangkok").fadeOut();
        $("#hotelRecUp").show();
        $("#cardUpc").fadeIn();
      });
      
      $("#bangkokRecom2").click(function(){
        $("#hotelRecUp").hide();
        $("#cardUpc").fadeOut();
        $("#hotelRecBangkok").show();
        $("#cardBangkok").fadeIn();
      });

  });