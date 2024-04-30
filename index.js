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
        $("#brcHotelDisInfo").fadeOut();
        $("#brcHotelDisInfo").hide();
        $("#brcHotelInfo").fadeIn();
        $("#brcHotelInfo").show();
        $("#brcHotelDisPay").fadeIn();
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
        $("#brcHotelDisInfo").fadeOut();
        $("#brcHotelDisInfo").show();
        $("#brcHotelInfo").fadeIn();
        $("#brcHotelInfo").hide();
        $("#brcHotelDisPay").fadeIn();
        $("#brcHotelDisPay").hide();
      });
      // กดจ่ายเงิน
      $("#hotelPay").click(function(){
        var fName = $("#hotelFName").val();
        var lName = $("#hotelLName").val();
        var hotelPay = $("#hotelPayment").val();
        var grandHotelTotal = $("#grandHotelTotal").val();
        var checkInDate = $("#checkinDate").val();
        // ซ่อนฟอร์ม
        $("#checkoutForm").fadeOut();
        $("#checkoutForm").hide();

        // alert
        $("#hotelPaySucc").html("<i class='fa-regular fa-circle-check'></i> คุณ : " + fName + " " + lName + " / ชำระเงินด้วย : " + hotelPay + " / ยอดชำระรวมทั้งสิ้น : " + grandHotelTotal + " / สามารถเช็คอินได้ในวันที่ (ปี/เดือน/วัน) : " + checkInDate + " ตั้งแต่เวลา 12.00 น.");
        $("#hotelPaySucc").fadeOut();
        $("#hotelPaySucc").fadeIn();
        $("#hotelPaySucc").fadeOut();
        $("#hotelPaySucc").fadeIn();
        // หลอด Progress
        $("#hotelProg").css("width", "100%");
        // breadcrumb
        $("#brcHotelDisPay").fadeOut();
        $("#brcHotelDisPay").hide();
        $("#brcHotelPay").fadeIn();
        $("#brcHotelPay").show();
        $("#brcHotelPaySuc").fadeIn();
        $("#brcHotelPaySuc").show();

        Swal.fire({
          icon: "success",
          title: 'คุณ ' + fName + ' ได้ชำระเงินเรียบร้อย!',
          imageUrl: "https://th.bing.com/th/id/R.f1a16a78c62fe3c2c19d405ef8b1dde1?rik=uchT5UxvyYszow&pid=ImgRaw&r=0",
          imageWidth: 200,
          imageHeight: 200,
          imageAlt: "Custom image",
          timer: 3000,
        });
        
      });



      // Form ตั๋วเครื่องบิน
      $("#checkoutFlightForm").hide();

      // Alert ตอนชำระเงินเสร็จ
      $("#flightPaySucc").hide();

      // breadcrumb
      $("#brcFlightInfo").hide();
      $("#brcFlightDisPay").hide();
      $("#brcFlightPaySuc").hide();
      $("#brcFlightPay").hide();
     
      // ปุ่มกดเพื่อไปหน้าชำระเงิน
      $("#toCheckoutFlightForm").click(function(){
        var sFlight = $("#selectFlight").val();
        var sPerson = $("#numFlightPerson").val();
        var hTotal = sFlight * sPerson;
        var vTotal = hTotal * 7/100;
        var gTotal = vTotal + hTotal;

        $("#infoFlightForm").fadeOut();
        $("#infoFlightForm").hide();
        $("#checkoutFlightForm").fadeIn();
        $("#checkoutFlightForm").show();

        // หลอด Progress
        $("#flightProg").css("width", "50%");

        $("#showFlight").val(sFlight + " บาท");
        $("#showNumFlightPerson").val(sPerson + " คน");
        $("#flightTotal").val(hTotal + " บาท");
        $("#vatFlightTotal").val(vTotal + " บาท");
        $("#grandFlightTotal").val(gTotal + " บาท");
        // breadcrumb
        $("#brcFlightDisInfo").fadeOut();
        $("#brcFlightDisInfo").hide();
        $("#brcFlightInfo").fadeIn();
        $("#brcFlightInfo").show();
        $("#brcFlightDisPay").fadeIn();
        $("#brcFlightDisPay").show();
      });

      // กดย้อนกลับไปแก้ไขข้อมูล
      $("#backInfoFlightForm").click(function(){
        $("#checkoutFlightForm").fadeOut();
        $("#checkoutFlightForm").hide();
        $("#infoFlightForm").fadeIn();
        $("#infoFlightForm").show();
        
        // หลอด Progress
        $("#flightProg").css("width", "0%");
        // breadcrumb
        $("#brcFlightDisInfo").fadeOut();
        $("#brcFlightDisInfo").show();
        $("#brcFlightInfo").fadeIn();
        $("#brcFlightInfo").hide();
        $("#brcFlightDisPay").fadeIn();
        $("#brcFlightDisPay").hide();
      });
      // กดจ่ายเงิน
      $("#flightPay").click(function(){
        var fName = $("#flightFName").val();
        var lName = $("#flightLName").val();
        var flightPay = $("#flightPayment").val();
        var grandFlightTotal = $("#grandFlightTotal").val();
        var checkInFlightDate = $("#checkinFlightDate").val();
        // ซ่อนฟอร์ม
        $("#checkoutFlightForm").fadeOut();
        $("#checkoutFlightForm").hide();

        // alert
        $("#flightPaySucc").html("<i class='fa-regular fa-circle-check'></i> คุณ : " + fName + " " + lName + " / ชำระเงินด้วย : " + flightPay + " / ยอดชำระรวมทั้งสิ้น : " + grandFlightTotal + " / สามารถเช็คอินได้ในวันที่ (ปี/เดือน/วัน) : " + checkInFlightDate);
        $("#flightPaySucc").fadeOut();
        $("#flightPaySucc").fadeIn();
        $("#flightPaySucc").fadeOut();
        $("#flightPaySucc").fadeIn();
        // หลอด Progress
        $("#flightProg").css("width", "100%");
        // breadcrumb
        $("#brcFlightDisPay").fadeOut();
        $("#brcFlightDisPay").hide();
        $("#brcFlightPay").fadeIn();
        $("#brcFlightPay").show();
        $("#brcFlightPaySuc").fadeIn();
        $("#brcFlightPaySuc").show();

        Swal.fire({
          icon: "success",
          title: 'คุณ ' + fName + ' ได้ชำระเงินเรียบร้อย!',
          imageUrl: "https://th.bing.com/th/id/R.f1a16a78c62fe3c2c19d405ef8b1dde1?rik=uchT5UxvyYszow&pid=ImgRaw&r=0",
          imageWidth: 200,
          imageHeight: 200,
          imageAlt: "Custom image",
          timer: 3000,
        });
        
      });

  });