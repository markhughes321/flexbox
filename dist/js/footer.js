jQuery(function($) {
    var open = false;
    $('#signUpButton').click(function () {
        if(open === false) {
            $('#footerSlideContent').animate({ height: '150px' });
            $(this).css('backgroundPosition', 'bottom left');
            open = true;
        } else {
            $('#footerSlideContent').animate({ height: '0px' });
            $(this).css('backgroundPosition', 'top left');
            open = false;
        }
    });		
});