$(document).ready(function(){
    $('.client-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        centerMode: true,
        infinite: true,
        autoplaySpeed: 4000,
        nextArrow: '<span class="next-arrow"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="24.5" fill="white" stroke="#DE3432"/><path d="M21.3333 13.3335L33 25.0002L21.3333 36.6668" stroke="#DE3432" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>',
        prevArrow: '<span class="prev-arrow"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="24.5" fill="white" stroke="#DE3432"/><path d="M21.3333 13.3335L33 25.0002L21.3333 36.6668" stroke="#DE3432" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>',
        responsive: [
            {
              breakpoint: 991,
              settings: {
                centerMode: false,
                slidesToShow: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                centerMode: false,
                slidesToShow: 1
              }
            }
          ]
    });
});

$(document).ready(function(){
  $('.client-logo-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      dots: false,
      infinite: true,
      autoplaySpeed: 2000,
      nextArrow: '<span class="next-arrow"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="24.5" fill="white" stroke="#DE3432"/><path d="M21.3333 13.3335L33 25.0002L21.3333 36.6668" stroke="#DE3432" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>',
      prevArrow: '<span class="prev-arrow"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="24.5" fill="white" stroke="#DE3432"/><path d="M21.3333 13.3335L33 25.0002L21.3333 36.6668" stroke="#DE3432" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>',
      responsive: [
          {
            breakpoint: 1050,
            settings: {
              centerMode: false,
              slidesToShow: 3
            }
          },
          {
            breakpoint: 991,
            settings: {
              centerMode: false,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              centerMode: false,
              slidesToShow: 1
            }
          }
        ]
  });
});

var counted = 0;
$(window).scroll(function() {

  if (counted < $(window).scrollTop()) {
    $('header').addClass('fixed');
  } else {
    $('header').removeClass('fixed');
  }
  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.counter-number').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }
  var vTop = $('#about-us').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > vTop) {
    $('.project-count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
  }
});


// Send Enquiry From to backend
$(document).on('submit', '.getAppForm', function(e){
  var d = new Date();
	e.preventDefault();
  var method = $(this).attr('method');
  var action = $(this).attr('action');
  var data = $(this).serialize();
  $.ajax({
    type: method,
    url: action,
    data: data,
    beforeSend: function(){
      $(':submit').attr('disabled', 'disabled');
      $('.loadingMyprofile').css('visibility','visible');
    },

    success: function(data){
      console.log('dfdfdf',data);
      $(':submit').removeAttr('disabled');
      $('.loadingMyprofile').css('visibility','hidden');
      if (data==1) {
         $('#enquiryModal').modal('hide');
         $('#chooseNumberPopup').modal('hide');
         $('#myModal').modal('show');
      }
      $('.getAppForm').trigger('reset');
    }
  })
})

//client consaltancy form send to the backend
$(document).on('submit','#consaltancyform',function(e){
  e.preventDefault();
  var method= $(this).attr('method');
  var action=$(this).attr('action');
  var data=$(this).serialize();
  $.ajax({
    type:method,
    url:action,
    data:data,
    beforeSend:function(){
      $(':submit').attr('disabled', 'disabled');
      $('.loadingMyprofile').css('visibility','visible');
    },
    success:function(data){
      $(':submit').removeAttr('disable');
      $('.loadingMyprofile').css('visibility','hidden');
      if(data==1)
      {
        $('#myModal').modal('show');
      }
      $('#consaltancyform').trigger('reset');
    }
  })
})



//client consaltancy form send to the backend
$(document).on('submit','#contactusform',function(e){
  e.preventDefault();
  var method= $(this).attr('method');
  var action=$(this).attr('action');
  var data=$(this).serialize();
  $.ajax({
    type:method,
    url:action,
    data:data,
    beforeSend:function(){
      $(':submit').attr('disabled', 'disabled');
      $('.loadingMyprofile').css('visibility','visible');
    },
    success:function(data){
      $(':submit').removeAttr('disable');
      $('.loadingMyprofile').css('visibility','hidden');
      if(data==1)
      {
        $('#myModal').modal('show');
      }
      $('#contactusform').trigger('reset');
    }
  })
})

$(function () {
  var code = "+91"; // Assigning value from model.
  $('#phone').val(code);
  $('#phone').intlTelInput({
      autoHideDialCode: true,
      autoPlaceholder: "ON",
      dropdownContainer: document.body,
      formatOnDisplay: true,
      hiddenInput: "full_number",
      initialCountry: "auto",
      nationalMode: true,
      placeholderNumberType: "MOBILE",
      preferredCountries: ['US'],
      separateDialCode: true
  });
  $('#btnSubmit').on('click', function () {
      //var code = $("#phone").intlTelInput("getSelectedCountryData").dialCode;
      var phoneNumber = $('#mobile').val();
      //var name = $("#phone").intlTelInput("getSelectedCountryData").name;
      if(phoneNumber == ''){
      alert('Phone Number : ' + phoneNumber);
      }
  });
});