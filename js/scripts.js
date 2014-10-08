$(function() {
    var imgNum = 2;

    $("#startingBlock").css('height', $(window).height() + 'px');
    addImgs();

    function addImgs() {
        if (imgNum < 47) {

            var newImg = $("<img src='img/" + imgNum + ".jpg' alt='" + imgNum + "'>").hide();
            $("#main").prepend(newImg);
            //$(newImg).hide();
            imgNum++;

            $(newImg).load(function() {
            var position0 = $(document).height() - $(document).scrollTop();
                $(newImg).show();
                $(document).scrollTop($(document).height() - position0);
            });
        }
    }

    $(document).scroll(function() {
        if ($(document).scrollTop() < 500) {
            //toLoad = false
            addImgs();
        }
    });

});
