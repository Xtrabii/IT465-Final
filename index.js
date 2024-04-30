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

      // breadcrumb
      $("#brcHotelInfo").hide();
      $("#brcHotelDisPay").hide();
      $("#brcHotelPaySuc").hide();
      $("#brcHotelPay").hide();
     
      // ปุ่มกดเพื่อไปหน้าชำระเงิน
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
        $("#hotelProg").css("width", "50%");

        $("#showHotel").val(sHotel + " บาท");
        $("#showNumPerson").val(sPerson + " คน");
        $("#hotelTotal").val(hTotal + " บาท");
        $("#vatHotelTotal").val(vTotal + " บาท");
        $("#grandHotelTotal").val(gTotal + " บาท");
        // breadcrumb
        $("#brcHotelDisInfo").hide();
        $("#brcHotelInfo").show();
        $("#brcHotelDisPay").show();
      });

      // กดย้อนกลับไปแก้ไขข้อมูล
      $("#backInfoForm").click(function(){
        $("#checkoutForm").fadeOut();
        $("#checkoutForm").hide();
        $("#infoForm").fadeIn();
        $("#infoForm").show();
        
        // หลอด Progress
        $("#hotelProg").css("width", "0%");
        // breadcrumb
        $("#brcHotelDisInfo").show();
        $("#brcHotelInfo").hide();
        $("#brcHotelDisPay").hide();
      });
      // กดจ่ายเงิน
      $("#hotelPay").click(function(){
        var fName = $("#hotelFName").val();
        var lName = $("#hotelLName").val();
        var hotelPay = $("#hotelPayment").val();
        var grandHotelTotal = $("#grandHotelTotal").val();
        // ซ่อนฟอร์ม
        $("#checkoutForm").fadeOut();
        $("#checkoutForm").hide();

        // alert
        $("#hotelPaySucc").html("<i class='fa-regular fa-circle-check'></i> คุณ : " + fName + " " + lName + " / ชำระเงินด้วย : " + hotelPay + " / ยอดชำระรวมทั้งสิ้น : " + grandHotelTotal);
        $("#hotelPaySucc").fadeOut();
        $("#hotelPaySucc").fadeIn();
        $("#hotelPaySucc").fadeOut();
        $("#hotelPaySucc").fadeIn();
        // หลอด Progress
        $("#hotelProg").css("width", "100%");

        $("#brcHotelDisPay").hide();
        $("#brcHotelPay").show();
        $("#brcHotelPaySuc").show();

        Swal.fire({
          icon: "success",
          title: "Payment Completed! , Thank You",
          imageUrl: "https://th.bing.com/th/id/R.f1a16a78c62fe3c2c19d405ef8b1dde1?rik=uchT5UxvyYszow&pid=ImgRaw&r=0",
          imageWidth: 200,
          imageHeight: 200,
          imageAlt: "Custom image",
          timer: 3000,
        });
        
      });

  });