import $ from 'jquery'
import gsap from "gsap"
import "slick-carousel"

$(document).ready(function(){
    $('.hamburger').click(function(){
        $('.navbar').toggleClass('active');
    });

    $('.valueOrder').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 5,
        slidesToScroll:1,
        arrows: true,
        infinite: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });

      $(".accordion").on('click',function(){
        if($(this).next(".accord-content").hasClass("active")){
          $(this).next(".accord-content").removeClass("active").slideUp();
          $(this).children("i").removeClass("fa-minus").addClass("fa-plus");
        }
        else{
          $(".paymentSteps .accord-content").slideUp();
          $(".paymentSteps .accordion i").removeClass("fa-minus").addClass("fa-plus");
          $(this).next(".accord-content").addClass("active").slideDown();
          $(this).children("i").removeClass("fa-plus").addClass("fa-minus");
        };
      });

      $(".men").on('click',function(){
        $(".menWrap").css("display", "block");
        $(".men").addClass("active");
        $(".womenWrap, .watchWrap, .automobileWrap").css("display", "none");
        $(".women, .watches, .automobile").removeClass("active");
      });
      $(".watches").on('click',function(){
        $(".watchWrap").css("display", "block");
        $(".watches").addClass("active");
        $(".womenWrap, .menWrap, .automobileWrap").css("display", "none");
        $(".women, .men, .automobile").removeClass("active");
      });
      $(".automobile").on('click',function(){
        $(".automobileWrap").css("display", "block");
        $(".automobile").addClass("active");
        $(".womenWrap, .menWrap, .watchWrap").css("display", "none");
        $(".women, .men, .watches").removeClass("active");
      });
      $(".women").on('click',function(){
        $(".womenWrap").css("display", "block");
        $(".women").addClass("active");
        $(".automobileWrap, .menWrap, .watchWrap").css("display", "none");
        $(".automobile, .men, .watches").removeClass("active");
      });

      $(".listProduct").on('click',function(){
        $(".detailWrapper1").css("display", "block");
        $(".listProduct").addClass("active2");
        $(".useConcierge").removeClass("active2");
        $(".detailWrapper2").css("display", "none");
      });

      $(".useConcierge").on('click',function(){
        $(".detailWrapper2").css("display", "block");
        $(".useConcierge").addClass("active2");
        $(".listProduct").removeClass("active2");
        $(".detailWrapper1").css("display", "none");
      });

      $("#stepList2, .dot2").on('click',function(){
        $("#stepList1, #stepList3").addClass("opacty");
        $("#stepList2").removeClass("opacty");
        $("#steppOrder").addClass("progressStep1");
        $("#steppOrder").removeClass("progressStep2");
      });

      $("#stepList3, .dot3").on('click',function(){
        $("#stepList1, #stepList2").addClass("opacty");
        $("#stepList3").removeClass("opacty");
        $("#steppOrder").addClass("progressStep1");
        $("#steppOrder").addClass("progressStep2");
      });

      $("#stepList1, .dot1").on('click',function(){
        $("#stepList2, #stepList3").addClass("opacty");
        $("#stepList1").removeClass("opacty");
        $("#steppOrder").removeClass("progressStep1");
        $("#steppOrder").removeClass("progressStep2");
      });

      $("#stepList2, .dot2").on('click',function(){
        $(".dot2").css("background-color", "orange");
        $(".dotsimage2").css("display", "block");
        $(".dotsimage1").css("display", "none");
        $(".dot1").css("background-color", "white");
        $(".dot3").css("background-color", "white");
      });

      $("#stepList3, .dot3").on('click',function(){
        $(".dot3").css("background-color", "orange");
        $(".dotsimage1").css("display", "block");
        $(".dotsimage2").css("display", "none");
        $(".dot2").css("background-color", "white");
        $(".dot1").css("background-color", "white");
      });

      $("#stepList1, .dot1").on('click',function(){
        $(".dot1").css("background-color", "orange");
        $(".dotsimage1").css("display", "block");
        $(".dotsimage2").css("display", "none");
        $(".dot2").css("background-color", "white");
        $(".dot3").css("background-color", "white");
      });
});