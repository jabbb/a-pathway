$(function() {
    var imgNum = 4;
    /*$("img").load(function() {
        $(document).scrollTop($(document).height());
    });*/

    function loadImg() {
        if (imgNum < 44) {
            console.log("adding");
            var newImg = $("<img src='img/" + imgNum + ".jpg' alt='" + imgNum + "'>");
            $("#main").prepend(newImg);
            $(newImg).hide();
            imgNum++;
        }
    }

    $("<img src='img/" + imgNum + ".jpg' alt='" + imgNum + "'>").load(function() {
        var position0 = $(document).height() - $(document).scrollTop();
        $(this).show();
        $(document).scrollTop($(document).height() - position0);
    });

    $(document).scroll(function() {
        if ($(document).scrollTop() == 0) {
            //toLoad = false
            console.log($(document).scrollTop());
            addImgs();
        }
    });

});
