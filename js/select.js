$(function() {

    $('.select-button').click(function(e){
        var that = $(this);
        var parent = that.parents('.select');
        var dropdown = parent.find('.select-dropdown');
        if ( parent.hasClass('active') ){
            parent.removeClass('active');
            dropdown.fadeOut(200);
        }
        else{
            parent.addClass('active');
            dropdown.fadeIn(200);
        }
    });
    $('.select + .label').click(function(e){
        var that = $(this).parents('.field-wrap').find('.select');
        var parent = that;
        var dropdown = parent.find('.select-dropdown');
        if ( parent.hasClass('active') ){
            parent.removeClass('active');
            dropdown.fadeOut(200);
        }
        else{
            parent.addClass('active');
            dropdown.fadeIn(200);
        }
    });
    $(document).mouseup(function (e) {
        var el = $('.select');
        if (!el.is(e.target) && el.has(e.target).length === 0) {
            $('.select').removeClass('active');
            $('.select-dropdown').fadeOut(200);
        }
    });
    $('.select-option').click(function(e){
        var that = $(this);
        var parent = that.parents('.select');
        var dropdown = parent.find('.select-dropdown');
        var value = parent.find('.select-value');
        var chosen = that.text();
        parent.addClass('chosen');
        parent.find('.select-option').removeClass('active');
        that.addClass('active');
        value.val(chosen);
        parent.removeClass('active');
        dropdown.fadeOut(200);
    });

});