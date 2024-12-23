$(document).ready(function () {
    // Initialize Slick Slider
    $('.timeline-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        dots: false,
        draggable: false,
        swipe: false
    });

    // Click handler for timeline years
    $('.year').on('click', function () {
        const index = $(this).data('year');

        // Remove active class from all years and add to clicked one
        $('.year').removeClass('active');
        $(this).addClass('active');

        // Slick slider navigation
        $('.timeline-content').slick('slickGoTo', index);
    });

    // Update timeline years when sliding
    $('.timeline-content').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('.year').removeClass('active');
        $(`.year[data-year="${nextSlide}"]`).addClass('active');
    });

    // Next Arrow Click
    $('#next-slide').on('click', function () {
        $('.timeline-content').slick('slickNext');
    });

    // Previous Arrow Click
    $('#prev-slide').on('click', function () {
        $('.timeline-content').slick('slickPrev');
    });
});

$(document).ready(function () {
    // Initialize the Slick slider for timeline content
    $('.timeline-content').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '#prev-slide',
        nextArrow: '#next-slide',
    });
});