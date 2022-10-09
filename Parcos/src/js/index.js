import $ from 'jquery'
import "slick-carousel"

$(document).ready(function(){
    $('.aApply').click(function(){
        $('.modal').css('display','block');
        $('.content').hide();
    });
    $('.close').click(function(){
        $('.modal').css('display','none');
        $('.content').show();
    });
    $('.codeApply1').click(function(){
        var parcos20 = $('.codeOffer1').html();
        $('.enterCoupon').val(parcos20);
    });
    $('.codeApply2').click(function(){
        var flat15 = $('.codeOffer2').html();
        $('.enterCoupon').val(flat15);
    });
    $('.codeApply3').click(function(){
        var deal20 = $('.codeOffer3').html();
        $('.enterCoupon').val(deal20);
    });
    $('.codeApply4').click(function(){
        var parcos20 = $('.codeOffer4').html();
        $('.enterCoupon').val(parcos20);
    });
    $('.applyCoupon').click(function(){
        $('.removeMain').css('display','block');
        $('.coupon').hide();
        $('.modal').hide();
        $('.content').show();
        var offercode = $('.enterCoupon').val();
        $('.removeUpdate').html(offercode);
    });
    $('.aRemove').click(function(){
        $('.removeMain').css('display','none');
        $('.coupon').show();
    });
    $('.hamburger').click(function(){
        $('.navbar1').toggleClass('active');
    });
    $('.dropDown').click(function(){
        $('.footerWrap').toggleClass('active');
    });
    $('.dropDown').click(function(){
        $('#progressbar').progressbar({
            value: 40,
            max:100,
            min:0
        });
    });
    
}); 