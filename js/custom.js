/*! 
 
 =========================================================
 
 *Leasing Monk Javascript
 
 =========================================================
 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 
 */

$(document).ready(function () {

    //header-menutoggle js
    $('.left_menu a').on('click', function () {
        $('.select_toggle').toggle("medium");
    });

    //blogmenu toggle
    $('.blog_dropdown').on('click', function () {
        $('.blog_togglemenu').toggle("medium");
    });

    //youtube video
    $(".play_grey").click(function () {
        $(".play_btn, .play_bg").hide();
        $(".yt")[0].src += "?autoplay=0";
        $(".yt").show();
    });

    // FAQ Accordion
    $('.accordion').find('.accordion-title').on('click', function () {
        // Adds Active Class
        $(this).toggleClass('active');
        // Expand or Collapse This Panel
        $(this).next().slideToggle('fast');
        // Hide The Other Panels
        $('.accordion-content').not($(this).next()).slideUp('fast');
        // Removes Active Class From Other Titles
        $('.accordion-title').not($(this)).removeClass('active');
    });

    //homeslider
    $('.home_slider ').slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    //home tab js
    $(".tab_content").hide();
    $(".tab_content:first").show();
    /* if in tab mode */
    $("ul.tabs li").click(function () {

        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading").removeClass("d_active");
        $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

    });
    /* if in drawer mode */
    $(".tab_drawer_heading").click(function () {

        $(".tab_content").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();

        $(".tab_drawer_heading").removeClass("d_active");
        $(this).addClass("d_active");

        $("ul.tabs li").removeClass("active");
        $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
    });
    $('ul.tabs li').last().addClass("tab_last");

    //colection filter 
    $(document).on('click', '.filter_menu a', function () {
        $('.collection_sidebar').animate({left: '0'});
        $('body').addClass('collection-filter');
    });
    $('.filter_colse,.filter-overlay').on("click", function () {
        var collection_sidebar = $('.collection_sidebar').outerWidth();
        $('.collection_sidebar').animate({left: -collection_sidebar});
        $('body').removeClass('collection-filter');
    });
    // Filter Toggle 
    $(document).on("click", ".category_close_icon", function (a) {
        $(this).parent('.category_list_title').siblings('.layer-filter').slideToggle();
        $(this).parent('.category_list_title').toggleClass('open-filter');
    });
    $(document).on("click", ".box_content_sidebar .side_filter_box_heading", function () {
        $(this).toggleClass("deactive");
        $(this).siblings("ul.side_filter_box_detail").slideToggle("fast");

    });
    //mCustomScrollbar
    if ($('.mCustomScrollbar').length > 0) {
        $('.mCustomScrollbar').mCustomScrollbar();
    }
    //Collection Sidebar  Height
    var s_title = $('.sidebar_title').outerHeight();
    var s_height = $(window).height();
    var s_total = s_height - s_title;
    $('.filter_content').css('height', s_total - 60);

    //home banner dropdown
    $('.field_toggle1').on('click', function () {
        $('.field_dropdown_open1').toggle("medium");
    });
    $('.field_toggle2').on('click', function () {
        $('.field_dropdown_open2').toggle("medium");
    });
    $('.field_toggle3').on('click', function () {
        $('.field_dropdown_open3').toggle("medium");
    });
    $('.field_toggle4').on('click', function () {
        $('.field_dropdown_open4').toggle("medium");
    });
    $('.field_toggle5').on('click', function () {
        $('.field_dropdown_open5').toggle("medium");
    });

    //spacedetail popup slider
    $('.space_popup_slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // faq tab
    $(".tab_content1").hide();
    $(".tab_content1:first").show();
    /* if in tab mode */
    $("ul.tabs1 li").click(function () {

        $(".tab_content1").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $("ul.tabs1 li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading1").removeClass("d_active1");
        $(".tab_drawer_heading1[rel^='" + activeTab + "']").addClass("d_active1");

    });
    /* if in drawer mode */
    $(".tab_drawer_heading1").click(function () {

        $(".tab_content1").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();

        $(".tab_drawer_heading1").removeClass("d_active1");
        $(this).addClass("d_active1");

        $("ul.tabs1 li").removeClass("active");
        $("ul.tabs1 li[rel^='" + d_activeTab + "']").addClass("active");
    });
    $('ul.tabs1 li').last().addClass("tab_last");

// editorial tab
    $(".tab_content2").hide();
    $(".tab_content2:first").show();

    /* if in tab mode */
    $("ul.tabs2 li").click(function () {

        $(".tab_content2").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $("ul.tabs2 li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading2").removeClass("d_active2");
        $(".tab_drawer_heading2[rel^='" + activeTab + "']").addClass("d_active2");

        /*$(".tabs").css("margin-top", function(){ 
         return ($(".tab_container").outerHeight() - $(".tabs").outerHeight() ) / 2;
         });*/
    });
    $(".tab_container2").css("min-height", function () {
        return $(".tabs2").outerHeight() + 50;
    });
    /* if in drawer mode */
    $(".tab_drawer_heading2").click(function () {

        $(".tab_content2").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();

        $(".tab_drawer_heading2").removeClass("d_active2");
        $(this).addClass("d_active2");

        $("ul.tabs li").removeClass("active");
        $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
    });

    //eventslider
    $('.events_image_slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // Quantity Box
    $(".qty_number").append('<div class="inc button"><span>+</span></div><div class="dec button"><span>-</span></div>');
    $(".button").on("click", function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if (oldValue === "") {
            oldValue = 0;
        }
        if ($button.text() === "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find("input").val(newVal);
    });


    //enterprise tab faq
    $(".tab_content3").hide();
    $(".tab_content3:first").show();
    /* if in tab mode */
    $("ul.tabs3 li").click(function () {
        $(".tab_content3").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $("ul.tabs3 li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading3").removeClass("d_active3");
        $(".tab_drawer_heading3[rel^='" + activeTab + "']").addClass("d_active3");
    });
    /* if in drawer mode */
    $(".tab_drawer_heading3").click(function () {
        $(".tab_content3").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();

        $(".tab_drawer_heading3").removeClass("d_active3");
        $(this).addClass("d_active3");

        $("ul.tabs3 li").removeClass("active");
        $("ul.tabs3 li[rel^='" + d_activeTab + "']").addClass("active");
    });
    $('ul.tabs3 li').last().addClass("tab_last");


    //popup_slider
    $('.pop_up_images').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1330,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 741,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });


});

