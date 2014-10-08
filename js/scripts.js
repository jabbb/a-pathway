$(function() {
    $(document).scrollTop($(document).height());
    var imgNum = 2;
    addImgs()

    function addImgs() {
        //if (imgNum < 44) {
            var position0 = $(document).height() - $(document).scrollTop();
            for (var i = 2; i < 46; i++) {
            var newImg = $("<img src='img/" + imgNum + ".jpg' alt='" + imgNum + "'>");
            $("#main").prepend(newImg);
            imgNum++;
            }
            $(newImg).ready(function() {
                $(document).scrollTop($(document).height() - position0);
            });
        //}
    }

    /*$(document).scroll(function() {
        if ($(document).scrollTop() == 0) {
            addImgs();
        }
    });*/

});
