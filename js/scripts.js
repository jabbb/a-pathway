$(function() {
    //var imgNum = 4;
    $("img").load(function() {
        $(document).scrollTop($(document).height());
    });

    /*function addImgs() {
        if (imgNum < 44) {
            console.log("adding");
            var position0 = $(document).height() - $(document).scrollTop();
            alert(position0);
            //for (var i = 0; i < 3; i++) {
            var newImg = $("<img src='img/" + imgNum + ".jpg' alt='" + imgNum + "'>");
            $("#main").prepend(newImg).hide();
            imgNum++;
            //}
            $(newImg).ready(function() {
                $(newImg).show();
                $(document).scrollTop($(document).height() - position0);
            });
        }
    }

    $(document).scroll(function() {
        if ($(document).scrollTop() == 0) {
            //toLoad = false
            console.log($(document).scrollTop());
            addImgs();
        }
    });*/

});
