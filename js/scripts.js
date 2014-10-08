$(function() {
    $(document).scrollTop($(document).height());
    var imgNum = 2;

    function addImgs() {
        if (imgNum < 44) {
            console.log("adding");
            var position0 = $(document).height() - $(document).scrollTop();
            var images = [];
            for (var i = 0; i < 3; i++) {
                images[i] = new Image();
                images[i].src = "img/" + imgNum + ".jpg"
                imgNum++;
            }
            for (var i = 0; i < 3; i++) {
                //var newImg = $("<img src='img/" + imgNum + ".jpg' alt='" + imgNum + "'>");
                $("#main").prepend(images[i]);
            }
            //$(newImg).ready(function() {
                $(document).scrollTop($(document).height() - position0);
            //});
        }
    }

    $(document).scroll(function() {
        if ($(document).scrollTop() == 0) {
            console.log($(document).scrollTop());
            addImgs();
        }
    });

});
