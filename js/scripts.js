$(function() {
    $(document).scrollTop($(document).height());
    for (var i = 1; i < 46; i++) {
        $("<img />").attr("src", "img/" + i + ".jpg");
        alert(i);
    }
    var imgNum = 2;

    function addImgs() {
        if (imgNum < 44) {
            console.log("adding");
            var position0 = $(document).height() - $(document).scrollTop();
            for (var i = 0; i < 3; i++) {
                var newImg = $("<img src='img/" + imgNum + ".jpg' alt='" + imgNum + "'>");
                $("#main").prepend(newImg);
                imgNum++;
            }
            $(newImg).ready(function() {
                $(document).scrollTop($(document).height() - position0);
            });
        }
    }

    $(document).scroll(function() {
        if ($(document).scrollTop() == 0) {
            toLoad = false
            console.log($(document).scrollTop());
            addImgs();
        }
    });

});
