cssVars();

// open mobile nav

/*

djgkfgjkfh

*/


$('.nav-prompt').click(function () {

    if ($('.nav-inner').attr('aria-expanded') === 'false') {
        $('.nav-inner').attr('aria-expanded', 'true');
    } else {
        $('.nav-inner').attr('aria-expanded', 'false');
    };


    if ($('.nav-prompt').text() === 'Open Navigation') {
        $('.nav-prompt').text('Close Navigation');
    } else {
        $(".nav-prompt").text("Open Navigation");
    }
})

// image gallery
function imageGallery() {
    // if there's no image gallery, do nothing.
    if (!$('.image-gallery').length) {
        return;
    }
    $('.image-gallery a').simpleLightbox();
}

imageGallery();


// nav active class

function activeMenu() {
    var url = window.location.href;

    $('.nav-inner a').filter(function() {
        return this.href == url;
    }).addClass('active');
}

activeMenu();