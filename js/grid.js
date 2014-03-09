$(function() {
    var isDragging = false;
    var start;

    var signum = function(n) {
        return n == 0 ? 0: -n/Math.abs(n);
    };

    var markCells = function(start, end) {
        $('.cell').removeClass('active');
        $('#'+start.join('-')).addClass('active');
        $('#'+end.join('-')).addClass('active');
        var dx = start[0] - end[0];
        var dy = start[1] - end[1];
        if (dx === dy || dx === -dy || dx === 0 || dy === 0) {
            for(var i = 0; i<=Math.abs(dx) || i<=Math.abs(dy); i++) {
                var x = start[0]-0+i*signum(dx);
                var y = start[1]-0+i*signum(dy);
                $('#'+x+'-'+y).addClass('active');
            }
        }
    };

    $('.cell').mouseenter(function(e) {
        var $el = $(e.target);
        var end = $el.attr("id").split("-");
        if (isDragging)
            markCells(start, end);
    });

    $('.cell').mousedown(function(e) {
        isDragging = !isDragging;
        var $el = $(e.target);
        start = $el.attr("id").split("-");
        if (isDragging) {
            $('.cell').removeClass('active');
            $el.addClass('active');
        }
    });
})