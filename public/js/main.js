(function ($) {
    "use strict";

    //Loading
    // jQuery(window).on("load", function () {
    // jQuery(".loader").on(600).fadeOut("slow");
    // });

    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    /*$(window).scroll(function () {
        let menu = $('.sticky-top');
        let activelink = $('.navbar-light .navbar-nav .nav-link.active');
        if ($(this).scrollTop() > 150) {
            menu.css('top', '0px');
            menu.css('background-color', '#ffffff');
            menu.css('border-bottom', '1px solid var(--primaire)');
            $('.navbar-light .navbar-nav .nav-link').css('color', 'var(--primaire)');
            activelink.css('border-bottom', '5px solid var(--primaire)');
            activelink.css('color', 'var(--secondaire)');
        } else {
            menu.css('top', '-100px');
            if (document.body.clientWidth <= 992) {
                menu.css('background', 'transparent');
                menu.css('border-bottom', 'none');
                $('.navbar-light .navbar-nav .nav-link').css('color', 'var(--primaire)');
                activelink.css('border-bottom', '5px solid var(--primaire)');
                activelink.css('color', 'var(--secondaire)');
                activelink.css('border-bottom', '5px solid var(--primaire)');
            } else {
                menu.css('background', 'transparent');
                menu.css('border-bottom', 'none');
                $('.navbar-light .navbar-nav .nav-link').css('color', 'var(--blanc)');
                activelink.css('border-bottom', '5px solid var(--primaire)');
                activelink.css('color', 'var(--blanc)');
            }
        }
    });*/

    // Back to top button
    $(window).scroll(function () {
        var backtop = $('.back-to-top');
        if ($(this).scrollTop() > 300) {
            backtop.fadeIn('fast');
            backtop.css('display', 'flex');
        } else {
            backtop.fadeOut('fast');
            backtop.css('display', 'none');
        }
    });
    $('.back-to-top').click(function () {
        $('#').animate({scrollTop: 0}, 150, 'easeInOutExpo');
        return false;
    });

    // Change lang
    var url = $(location).attr("href");
    var fr = url.indexOf("/fr/");
    var lang = $('#changelang');
    if (fr !== -1) {
        lang.html('EN');

    } else {
        lang.html('FR');
    }
    lang.click(function () {
        if (fr !== -1) {
            url = url.replace("/fr/", "/en/");
        } else {
            url = url.replace("/en/", "/fr/");
        }
        document.location.href = url;
    });

    $('#gallery').photobox('a', {thumbs: true}, callback);
    // using setTimeout to make sure all images were in the DOM, before the history.load() function is looking them up to match the url hash
    setTimeout(window._photobox.history.load, 1000);

    function callback() {
        console.log('callback for loaded content:', this);
    }

})(jQuery);

function upload() {
    $('#candidature_cv').trigger('click');
    return false;
}

function label_input() {
    $('#choice').html(document.getElementById('candidature_cv').value);
}

