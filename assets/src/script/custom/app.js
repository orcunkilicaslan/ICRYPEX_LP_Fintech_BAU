
/* Smooth Scroll to Div */
$(document).ready(function() {
    $("html, body").animate({scrollTop: 0}, 0);
    setTimeout(function() {
        if (window.location.hash) {
            var hash = window.location.hash;
            $('html, body').animate({
                scrollTop :  $(hash).offset().top
            }, 1500);
        }
    }, 25);
});

$(document).on('click', '.smoothscroll[data-target]', function(e){
    e.preventDefault();

    var target  = $(this).attr('data-target');
    var href    = $(this).attr('href');
    var $target = $(target);

    if ($target.length === 0) {
        //console.log('sayfayok');
        window.location.href = href + target;
        //return;
    }else{
        //console.log('sayfavar');
        var pos = $target.offset().top;
        $('body, html').animate({scrollTop: pos});
    }

});
/* Smooth Scroll to Div */

/* Wizard - https://codepen.io/atulkumarsingh/pen/LYPaQwg */
$(document).ready(function() {

    // Click Submit Button
    $(document).on("click",".formbox .fieldsets-actions .btn-submit" , function(){
        var fieldset = $('.formbox');

        fieldset.find('.inputrequired').each(function() {
            var thisValue = $(this).val();
            if( thisValue === "" ) {
                $(this).parent().removeClass('fieldsuccess').addClass('fielderror');
            } else {
                $(this).parent().removeClass('fielderror').addClass('fieldsuccess');
            }
        });
        fieldset.find('.selectrequired').each(function() {
            var thisValue = $(this).val();
            if( thisValue === null ) {
                $(this).parent().removeClass('fieldsuccess').addClass('fielderror');
            } else {
                $(this).parent().removeClass('fielderror').addClass('fieldsuccess');
            }
        });

    });


    // Focus On Input Field Check Empty or Not
    $(".inputrequired").on('focus', function(){

        var tmpInputThis = $(this).val();

        if(tmpInputThis === '' ) {
            $(this).parent().addClass("focus-input");
        } else if(tmpInputThis !== '' ){
            $(this).parent().addClass("focus-input");
        }

    }).on('blur', function(){
        var tmpInputThis = $(this).val();

        if(tmpInputThis === '' ) {
            $(this).parent().removeClass("focus-input");
            $(this).parent().removeClass('fieldsuccess').addClass('fielderror');
        } else if(tmpInputThis !== '' ) {
            $(this).parent().addClass("focus-input");
            $(this).parent().removeClass('fielderror').addClass('fieldsuccess');
        }
    });

    // Focus On Select Field Check Empty or Not
    $(".selectrequired").on('focus', function(){

        var tmpInputThis = $(this).val();

        if(tmpInputThis === null ) {
            $(this).parent().addClass("focus-input");
        } else if(tmpInputThis != null ){
            $(this).parent().addClass("focus-input");
        }

    }).on('blur', function(){
        var tmpInputThis = $(this).val();

        if(tmpInputThis === null ) {
            $(this).parent().removeClass("focus-input");
            $(this).parent().removeClass('fieldsuccess').addClass('fielderror');
        } else if(tmpInputThis != null ) {
            $(this).parent().addClass("focus-input");
            $(this).parent().removeClass('fielderror').addClass('fieldsuccess');
        }
    });


    $('.custom-file-input').on('change', function() {
        let fileName = $(this).val().split('\\').pop();
        $(this).next('.custom-file-label').addClass("selected").html(fileName);
    });

});
/* Wizard */

/* Dropzone */
Dropzone.autoDiscover = false;

$(document).ready(function(){

    $("#profilephoto").dropzone({
        url: 'upload/'
    });

});
/* Dropzone */

/* Input Mask */
$(document).ready(function(){
    $('.inputphonemask').inputmask({
        mask: '0599 999 99 99',
        placeholder: '',
        showMaskOnFocus: true,
        showMaskOnHover: false
    });
    $('.inputphone2mask').inputmask({
        mask: '0999 999 99 99',
        placeholder: '',
        showMaskOnFocus: true,
        showMaskOnHover: false
    });
});
/* Input Mask */


