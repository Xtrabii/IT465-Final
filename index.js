$(document).ready(function(){
  // ที่พัก
    $("#hotelRecUp").hide();

    $("#upcountryRecom1").click(function(){
      $("#cardBangkok").fadeOut();
      $("#hotelRecBangkok").hide();
      $("#cardUpc").fadeIn();
      $("#hotelRecUp").show();
    });
    
    $("#bangkokRecom1").click(function(){
      $("#cardUpc").fadeOut();
      $("#hotelRecUp").hide();
      $("#cardBangkok").fadeIn();
      $("#hotelRecBangkok").show();
    });

    $("#upcountryRecom2").click(function(){
        $("#cardBangkok").fadeOut();
        $("#hotelRecBangkok").hide();
        $("#cardUpc").fadeIn();
        $("#hotelRecUp").show();
      });
      
      $("#bangkokRecom2").click(function(){
        $("#cardUpc").fadeOut();
        $("#hotelRecUp").hide();
        $("#cardBangkok").fadeIn();
        $("#hotelRecBangkok").show();
      });

      // Form ที่พัก
      $("#checkoutForm").hide();
      // Alert ตอนชำระเงินเสร็จ
      $("#hotelPaySucc").hide();
      // หลอด Progress
      $("#hotelProg1").hide();
      $("#hotelProg2").hide();

      $("#toCheckoutForm").click(function(){
        var sHotel = $("#selectHotel").val();
        var sPerson = $("#numPerson").val();
        var hTotal = sHotel * sPerson;
        var vTotal = hTotal * 7/100;
        var gTotal = vTotal + hTotal;

        $("#infoForm").fadeOut();
        $("#infoForm").hide();
        $("#checkoutForm").fadeIn();
        $("#checkoutForm").show();
        // หลอด Progress
        $("#hotelProg0").fadeOut();
        $("#hotelProg0").hide();
        $("#hotelProg1").fadeIn();
        $("#hotelProg1").show();

        $("#showHotel").val(sHotel + " บาท");
        $("#showNumPerson").val(sPerson + " คน");
        $("#hotelTotal").val(hTotal + " บาท");
        $("#vatHotelTotal").val(vTotal + " บาท");
        $("#grandHotelTotal").val(gTotal + " บาท");
      });
      // กดย้อนกลับไปแก้ไขข้อมูล
      $("#backInfoForm").click(function(){
        $("#checkoutForm").fadeOut();
        $("#checkoutForm").hide();
        $("#infoForm").fadeIn();
        $("#infoForm").show();
        // หลอด Progress
        $("#hotelProg1").fadeOut();
        $("#hotelProg1").hide();
        $("#hotelProg0").fadeIn();
        $("#hotelProg0").show();
      });
      // กดจ่ายเงิน
      $("#hotelPay").click(function(){
        var fName = $("#hotelFName").val();
        var lName = $("#hotelLName").val();
        var hotelPay = $("#hotelPayment").val();
        var grandHotelTotal = $("#grandHotelTotal").val();

        $("#hotelPaySucc").html("<i class='fa-regular fa-circle-check'></i> คุณ : " + fName + " " + lName + " / ชำระเงินด้วย : " + hotelPay + " / ยอดชำระรวมทั้งสิ้น : " + grandHotelTotal);
        $("#hotelPaySucc").fadeOut();
        $("#hotelPaySucc").fadeIn();
        $("#hotelPaySucc").fadeOut();
        $("#hotelPaySucc").fadeIn();
        // หลอด Progress
        $("#hotelProg1").fadeOut();
        $("#hotelProg1").hide();
        $("#hotelProg2").fadeIn();
        $("#hotelProg2").show();
      });

  });