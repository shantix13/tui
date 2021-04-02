var take_doc_width = $(document).width();

$(function () {


    // Показываем только первые два ивента в календаре
    // По клику на кнопку открываем полный список

    $('.inner-item').each(function () {
        $(this).children('div').eq(0).css({'display': 'block'});
        $(this).children('div').eq(1).css({'display': 'block'});
    });


    $('.inner-item').on('click', '.show-items', function () {
        $(this).closest('.inner-item').addClass('opened-item');
        $(this).closest('.inner-item').children('div').css({'display': 'block'});
        $(this).after('<button class="hide-items">Свернуть</button>');
        $(this).remove();
    });

    $('.inner-item').on('click', '.hide-items', function () {
        var take_items_length = $(this).closest('.inner-item').children('div').length - 2;
        if (take_items_length < 5 && take_items_length !== 1) {
            take_items_length = take_items_length + ' события';
        } else if (take_items_length == 1) {
            take_items_length = take_items_length + ' событие';
        }

        else {
            take_items_length = take_items_length + ' событий';
        }
        //alert(take_items_length);
        //$(this).after('<button class="show-items">Еще + ""</button>');
        //$(this).remove();
        $(this).text('Еще ' + take_items_length).removeClass('hide-items').addClass('show-items');
        $(this).closest('.inner-item').removeClass('opened-item');
        $(this).closest('.inner-item').children('div').each(function (index) {
            if (index < 2) {
                $(this).css({'display': 'block'});
            } else {
                $(this).css({'display': 'none'});
            }
        });
    });

    // Якорь на кнопки
    $('[data-anchor]').click(function (e) {
        e.preventDefault();
        var div = $(this).attr('data-anchor');
        $("html, body").animate({
            scrollTop: $(div).offset().top - 110
        }, 900, 'swing');
    });

    // Картинка во весь блок
    $('.image-cover-wrap > .image-cover').each(function () {
        var image = $(this).attr('src');
        $(this).parent().css({'background-image': 'url(' + image + ')'});
    });

    // Плавное появление блоков
    new WOW().init({
        mobile: false
    });

    // Слайдер рекомендованных мероприятий
    $('.events-slider').slick({
        infinite: true,
        easing: 'swing',
        arrows: true,
        dots: false,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 600,
        draggable: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 910,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 790,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });

    // Слайдер карточка новости

    $('#news-slider').slick({
        infinite: true,
        easing: 'swing',
        arrows: false,
        dots: true,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 600,
        draggable: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });


    // Слайдер список наград

    $('.reward-slider').slick({
        infinite: true,
        easing: 'swing',
        arrows: false,
        dots: true,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 600,
        draggable: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    // Слайдер карта уровней

    if (take_doc_width <= 1200) {
        $('.levels').slick({
            infinite: false,
            easing: 'swing',
            arrows: true,
            dots: false,
            autoplay: false,
            autoplaySpeed: 3000,
            pauseOnFocus: false,
            pauseOnHover: false,
            speed: 600,
            draggable: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 910,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 790,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 460,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }


    // Поиск
    $('.search-icon').click(function (e) {
        var that = $(this);
        that.parents('.search').addClass('active');
        setTimeout(function () {
            that.parents('.search').find('.field').focus();
        }, 300);
    });
    $(document).mouseup(function (e) {
        var el = $('.search');
        if (!el.is(e.target) && el.has(e.target).length === 0) {
            el.removeClass('active');
        }
    });


    // Выпадающее меню нотификаций
    $('.user-notification').click(function (e) {
        var that = $(this);
        $('.user-notification-block').fadeToggle(200);
    });
    $(document).mouseup(function (e) {
        var el1 = $('.user-notification-block');
        //console.log(e.target);
        if (el1.has(e.target).length === 0) {
            $('.user-notification-block').fadeOut(200);
        }
    });


    // Выпадающее меню сверху справа
    $('.user').click(function (e) {
        var that = $(this);
        $('.top-menu').fadeToggle(200);
    });
    $(document).mouseup(function (e) {
        var el1 = $('.user');
        //console.log(e.target);
        if (!el1.is(e.target) && el1.has(e.target).length === 0) {
            $('.top-menu').fadeOut(200);
        }
    });


    // Удалить нотификацию
    $('.notification-close').click(function (e) {
        var that = $(this);
        that.parents('.notification-item').fadeOut(200);
    });


    // Фильтр ивентов в календаре по клику на чекбоксы
    $('.calendar-types .type label').click(function () {
        var check_status = $(this).prev().prop("checked");
        var get_filter_class = $(this).prev().attr('id');
        //alert(get_filter_class);
        if (check_status == true) {
            $('.calendar-item .inner-item > div').each(function () {
                if ($(this).hasClass(get_filter_class)) {
                    $(this).addClass('hidden')
                }
            });
        } else {
            $('.calendar-item .inner-item > div').each(function () {
                if ($(this).hasClass(get_filter_class)) {
                    $(this).removeClass('hidden');
                }
            });
        }
    });


    // Открываем модалку сертификатов

    $('.achivment, .level-grid button').not('.disabled').click(function () {
        $('#achivment-modal').css({'display': 'flex'}).animate({'opacity': '1'}, 600);
        $('body').addClass('absoluted');
        return false;
    });

    // Открываем модалку сертификатов

    $('.cert button').click(function () {
        $('#certz-modal').css({'display': 'flex'}).animate({'opacity': '1'}, 600);
        $('body').addClass('absoluted');
        return false;
    });


    $('.level-meta').click(function () {
        $('#levels-modal').css({'display': 'flex'}).animate({'opacity': '1'}, 600);
        $('body').addClass('absoluted');
        return false;
    });

    // Открываем модалку страницы ивентов

    $('.zero-top .button').click(function () {
        $('.event-modal').css({'display': 'flex'}).animate({'opacity': '1'}, 600);
        $('body').addClass('absoluted');
        return false;
    });

    $('.materials-btn').click(function () {
        $('body').addClass('absoluted');
        $('.event-right').css({'display': 'flex'}).animate({'opacity': '1'}, 600);
        return false;
    });


    // Открываем модалку страницы наград

    $('.event-modal .button').click(function () {
        $('.event-modal .modal-quest').css({'display': 'none'});
        $('.event-modal .modal-accept').css({'display': 'block'});
    });


    // Открываем страницу наград

    $('.reward-item .button').click(function () {
        $('body').addClass('absoluted');
        $('#reward-modal').css({'display': 'flex'}).animate({'opacity': '1'}, 600);
        return false;
    });

    // Открываем фильтр календаря на мобилах

    $('.mobile-calendar-filter button').click(function () {
        $('body').addClass('absoluted');
        $('.calendar-types').css({'display': 'flex'}).animate({'opacity': '1'}, 600);
        return false;
    });


    $('.closer, #reward-modal .back').click(function () {
        $('.modals').animate({'opacity': '0'}, 600, function () {
            $('.modals').css({'display': 'none'});
            $('body').removeClass('absoluted');
            return false;
        });
    });


    $('.event-right .closer').click(function () {
        $('.event-right').animate({'opacity': '0'}, 600, function () {
            $('.event-right').css({'display': 'none'});
            $('body').removeClass('absoluted');
            return false;
        });
    });

    $('.calendar-types .closer').click(function () {
        $('.calendar-types').animate({'opacity': '0'}, 600, function () {
            $('.calendar-types').css({'display': 'none'});
            $('body').removeClass('absoluted');
            return false;
        });
    });


    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            $('.modals').animate({'opacity': '0'}, 600, function () {
                $('.modals').css({'display': 'none'});
                $('body').removeClass('absoluted');
                return false;
            });
        }

        if (e.keyCode === 27 && take_doc_width <= 900) {
            $('.calendar-types').animate({'opacity': '0'}, 600, function () {
                $('.calendar-types').css({'display': 'none'});
                return false;
            });
        }
    });
});


var lastScrollTop = 0;
var top_offset = '80'
$(window).scroll(function (event) {

    var st = parseInt($(this).scrollTop());
    if (take_doc_width > 455 && take_doc_width <= 770) {
        top_offset = '70';
    } else if (take_doc_width <= 455) {
        top_offset = '60';
    }
    if (st > lastScrollTop) {
        $('.theme-bg').css({'top': top_offset - st - 8 + 'px'});
        if (st > 80) {
            $('.theme-bg').css({'top': 0});
        }
    } else if (st < lastScrollTop) {
        if (st < 80) {
            $('.theme-bg').css({'top': top_offset - st + 'px'});
        }
    }
    lastScrollTop = st;
});


// open / close mobile menu

$('.hamburger').click(function () {
    if (!($(this).hasClass('is-active'))) {
        $('.main-menu').animate({'left': '0'}, 500);
        $(this).addClass('is-active');
        return false;
    }
    else {
        $('.main-menu').animate({'left': '-450px'}, 500);
        $(this).removeClass('is-active');
        return false;
    }
});


// open / close statistics

$('.stats-open').on('click', function () {
    if (!($(this).hasClass('is-active'))) {
        //var take_stats_inside = $('.stats-inside').height();
        $('.stats .box:nth-of-type(2)').css({'visibility': 'visible'}).animate({'height': '100%'}, 500);
        $(this).addClass('is-active');
        $('.stats-open').addClass('opener').text('Скрыть статистику');
        return false;
    }
    else {
        $('.stats .box:nth-of-type(2)').animate({'height': '0'}, 500, function () {
            $('.stats .box:nth-of-type(2)').css({'visibility': 'hidden'});
        });
        $(this).removeClass('is-active');
        $('.stats-open').removeClass('opener').text('Статистика');
        return false;
    }
});

