$(function() {

    // Открытие модального окна
    $('[data-modal]').click(function(e){
        e.preventDefault();
        var that = $(this);
        var target = that.attr('data-modal');
        $(target).fadeIn(300);
        $('body').addClass('modal-mode');
    });

    // Закрытие модального окна
    $('[data-modal-close]').click(function(e){
        var that = $(this);
        that.parents('.modal').fadeOut(300);
        that.parents('.modal-full').fadeOut(300);
        $('body').removeClass('modal-mode');
    });
    $(document).mouseup(function (e) {
        var el = $('.modal-body');
        if ( !el.is(e.target) && el.has(e.target).length === 0 ) {
            el.parents('.modal').fadeOut(300);
            el.parents('.modal-full').fadeOut(300);
            $('body').removeClass('modal-mode');
        }
    });
    $(document).on('keyup',function(evt) {
        if (evt.keyCode == 27) {
            $('.modal').fadeOut(300);
            $('.modal-full').fadeOut(300);
            $('body').removeClass('modal-mode');
        }
    });

});