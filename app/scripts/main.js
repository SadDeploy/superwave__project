'use strict';

// slider index.html
$(window).load(function() {
    $('.slideshow').bxSlider({
        controls: false,
        pager: true
    });
    $('.carousel').bxSlider({
        auto: true,
        minSlides: 3,
        maxSlides: 11,
        slideWidth: 172,
        slideMargin: 10,
        controls: false,
        pager: false,
        moveSlides: 1,
        pause: 1500
    });
    $('.bxslider__img').bxSlider({
        pagerCustom: '#bx-pager',
        controls: false
    });
    $('#bx-pager').bxSlider({
        minSlides: 3,
        maxSlides: 5,
        slideWidth: 113,
        slideMargin: 10,
        pager: false,
        moveSlides: 1
    });
    $('.bxslider__img-card').bxSlider({
        pagerCustom: '#bx-pager_card',
        controls: false,
        slideWidth: 400
    });
    $('#bx-pager_card').bxSlider({
        minSlides: 2,
        maxSlides: 3,
        slideWidth: 77,
        slideMargin: 5,
        pager: false,
        controls: false,
        moveSlides: 1
    });

// fancybox
    $(".fancybox").fancybox({
    });
    $(".popup__js").fancybox({
        maxWidth	: 670,
        fitToView	: true,
        width		: 670
    });
    $(".fancybox-thumb").fancybox({
        // helpers	: {
        //     thumbs	: {
        //         width	: 100,
        //         height	: 96
        //     }
        // }
    });

// ya maps api
    var onMapMouseleaveHandler = function (event) {
        var that = $(this);
        that.on('click', onMapClickHandler);
        that.off('mouseleave', onMapMouseleaveHandler);
        that.find('iframe').css("pointer-events", "none");
    };
    var onMapClickHandler = function (event) {
        var that = $(this);
        that.off('click', onMapClickHandler);
        that.find('iframe').css("pointer-events", "auto");
        that.on('mouseleave', onMapMouseleaveHandler);
    };
    $('.embed-container').on('click', onMapClickHandler);


// catalog sort
    $('.data__sort-js').on('click', '.data__sort-item-js', function() {
        $(this).toggleClass('active').addClass('act').siblings().removeClass('active').removeClass('act');
        return false;
    });


// tabs
//    var tabS = $('[role="tablist"] .tabs__title-js');
//    var tabA = $('[role="tablist"] .tabs__title-js.active');
//    tabS.click(function() {
//        var tab_id=$(this).attr('id');
//        tabClick(tab_id);
//    });
//    tabClick(window.location.hash.substr(1));
//    function tabClick(tab_id) {
//        if (tab_id != tabA.attr('id') ) {
//            tabS.removeClass('active');
//            $('#'+tab_id).addClass('active').parent().addClass('active').siblings().removeClass('active');
//            $('[role="tablist"] .tab-pane').siblings().removeClass('active');
//            $('#con_' + tab_id).addClass('active');
//            return false;
//        }
//        //$('.tabs__title-js').click(function(){
//        //    $(this).toggleClass('.active');
//        //});
//    }
    if ($(".tabs").length) {
        (function ($) {
            $(function () {
                $('ul.tabs__titles-js').on('click', 'li:not(.active)', function () {
                    $(this)
                        .addClass('active').siblings().removeClass('active')
                        .closest('div.tabs').find('div.tab-pane').removeClass('active').eq($(this).index()).addClass('active');
                    return false;
                });
            });
        })(jQuery);
    }

//slider filter
    $(function() {
        var sliderLine = $( ".slider-range" );
        sliderLine.slider({
            range: true,
            min: 1000,
            max: 120000,
            step: 1000,
            values: [ 20000, 100000 ],
            slide: function( event, ui ) {
                $( ".start" ).val( "" + ui.values[ 0 ] );
                $( ".end" ).val( "" + ui.values[ 1 ] );
            }
        });
        $( ".start" ).val( "" + sliderLine.slider( "values", 0 ) );
        $( ".end" ).val( "" + sliderLine.slider( "values", 1 ) );
    });

//accordion filter
    $('.accordion .accordion-item-js')
        .click(function(event){
            event.stopPropagation();
        })
        .filter(':not(.active)')
        .hide();
    $('.accordion .accordion-title-js').click(function(){
        var selfClick = $(this).find('.accordion-item-js:first').is(':visible');
        /*if(!selfClick) {
            $(this)
                .parent()
                .find('> li div:visible')
                .slideToggle()
                .parent().toggleClass('active');
        }*/

        $(this)
            .find('.accordion-item-js:first')
            .stop(true, true)
            .slideToggle('fast')
            .parent().toggleClass('active')
            .parent().toggleClass('active');
        $(this).find('.accordion-title-js_basket').hide();
        return false;
    });
    $('.show-title-js').click(function(){
        $(this).next().slideToggle('');
    });
    $('.search_btn-js').click(function(){
        $(this).parent().prev().addClass('active');
        return false;
    });


// phone mask
    $(".validate-phone").mask("+7 (999) 999-9999");
    $(".validate-date").mask("99.99.9999");


// count input
    $('.product_quantity_js .inc').click(function () {
        var $input = $(this).parents('.product_quantity_js').find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.product_quantity_js .dec').click(function () {
        var $input = $(this).parents('.product_quantity_js').find('input');
        var count = parseInt($input.val()) + 1;
        count = count > 999 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });

// input type ONLY number
    jQuery.fn.ForceNumericOnly =
        function()
        {
            return this.each(function()
            {
                $(this).keydown(function(e)
                {
                    var key = e.charCode || e.keyCode || 0;
                    // Разрешаем backspace, tab, delete, стрелки, обычные цифры и цифры на дополнительной клавиатуре
                    return (
                    key == 8 ||
                    key == 9 ||
                    key == 46 ||
                    key == 190 ||
                    (key >= 37 && key <= 40) ||
                    (key >= 48 && key <= 57) ||
                    (key >= 96 && key <= 105));
                });
            });
        };
    $(".product_quantity_js input").ForceNumericOnly();



//busket delete function
    $('.busket__delete-js a').click(function(){
        $(this).parent().parent().fadeOut('slow');
        return false;
    });



// show/hide
    $('.delete__js').click(function(){
        $(this).parent().fadeOut('');
        return false;
    });

// scrollTo UP
    var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
    var delay = 1000; // Задержка прокрутки
    $(document).ready(function() {
        $(window).scroll(function () { // При прокрутке попадаем в эту функцию
            /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
            if ($(this).scrollTop() > top_show) $('#top').fadeIn();
            else $('#top').fadeOut();
        });
        $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
            /* Плавная прокрутка наверх */
            $('body, html').animate({
                scrollTop: 0
            }, delay);
        });
    });


// input[type=file]
    $('.file_js').change(function() {
        $('.file_js').each(function() {
            var name = this.value;
            var reWin = /.*\\(.*)/;
            var fileTitle = name.replace(reWin, "$1");
            var reUnix = /.*\/(.*)/;
            fileTitle = fileTitle.replace(reUnix, "$1");
            $(this).parent().parent().find('.name_js').val(fileTitle);
            $(this).parent().find('.btn_js').text("Готово");
            $(this).parent().find('.btn').text("Готово");
            $('.name_js_text').text(fileTitle);
        });
    });

//mobile menu
    if($(window).width() < 767) {
        $('.nav__element-parent > a').click(function(){
            $(this).parent().toggleClass('parent__active');
            $(this).parent().find('> .sub-nav').slideToggle();
            return false;
        });
    }

//avtocomplite jUI
    $(".tags").autocomplete({
        position: { my : "left top+9", at: "left bottom" },
        source: [
            "WC4210sp",
            "WC4220sp",
            "WC4230sp",
            "WC4240sp",
            "WC4250sp",
            "WC4260sp",
            "WC4270sp",
            "WC4280sp",
            "WC4290sp",
            "WC4310sp",
            "WC4340sp"
        ],
        response: function(event, ui) {
            if (ui.content.length === 0) {
                $(".empty-message").html("<p>Товаров с таким артикулом не найдено</p>");
            } else {
                $(".empty-message").empty();
            }
        }
    });

//selectOrDie
    // AND
// linkedselect
    if ($("select").length) {
        $('select').selectOrDie({
            onChange: function () {
                var syncList1 = new syncList;
                syncList1.dataList = {
                    'list1': {
                        'list1_of': '80',
                        'list1_of1': '120'
                    },

                    'list2': {
                        'list2_of': '60',
                        'list2_of1': '120'
                    },

                    'list3': {
                        'list3_of1': '120',
                        'list3_of2': '60'
                    }
                };
                syncList1.sync("List1", "List2");
                $("select").selectOrDie("update");
            }
        });
    }

});



