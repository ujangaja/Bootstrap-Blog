/*global $, document, Chart, LINECHART, data, options, window, setTimeout*/
$(document).ready(function () {

    'use strict';

    // ---------------------------------------------- //
    // FancyBox
    // ---------------------------------------------- //
    $("[data-fancybox]").fancybox();

    // ---------------------------------------------- //
    // Search Bar
    // ---------------------------------------------- //
    $('.search-btn').on('click', function (e) {
        e.preventDefault();
        $('.search-area').fadeIn();
    });
    $('.search-area .close-btn').on('click', function () {
        $('.search-area').fadeOut();
    });

    // ---------------------------------------------- //
    // Navbar Toggle Button
    // ---------------------------------------------- //
    $('.navbar-toggler').on('click', function () {
        $('.navbar-toggler').toggleClass('active');
    });
});
