$(document).ready(function () {
    // Initialize variables
    let currentIndex = 0; // Track the current slide index
    const timelineCards = $('.timeline-card'); // All timeline cards
    const timelineDetails = $('.timeline-details'); // All timeline details

    console.log('Number of timeline cards:', timelineCards.length);
    console.log('Number of timeline details:', timelineDetails.length);

    // Function to show the current slide
    function showSlide(index) {
        console.log('Showing slide:', index); // Debug log
        // Remove the active class from all cards and details
        timelineCards.removeClass('active');
        timelineDetails.removeClass('active');

        // Add the active class to the current index's card and details
        $(timelineCards[index]).addClass('active');
        $(timelineDetails[index]).addClass('active');

        // Highlight the active year
        $('.year').removeClass('active');
        $(`.year[data-year="${index}"]`).addClass('active');
    }

    // Initial display of the first slide
    showSlide(currentIndex);

    // Click handler for the "Next" arrow
    $('#next-slide').on('click', function () {
        console.log('Next clicked'); // Debug log
        if (currentIndex < timelineCards.length - 1) {
            currentIndex++; // Move to the next index
            showSlide(currentIndex); // Update the visible slide
        }
    });

    // Click handler for the "Previous" arrow
    $('#prev-slide').on('click', function () {
        console.log('Previous clicked'); // Debug log
        if (currentIndex > 0) {
            currentIndex--; // Move to the previous index
            showSlide(currentIndex); // Update the visible slide
        }
    });

    // Click handler for timeline years
    $('.year').on('click', function () {
        const index = $(this).data('year'); // Get the index from the data-year attribute
        console.log('Year clicked:', index); // Debug log
        currentIndex = index; // Update the current index
        showSlide(currentIndex); // Update the visible slide

        // Highlight the active year
        $('.year').removeClass('active');
        $(this).addClass('active');
    });
});
