$(function() {
    var imgNum = 3;
    $("<img src='img/1.jpg' alt='1'>").load(function() {
        $(document).scrollTop($(document).height());
    });

    function addImgs() {
        if (imgNum < 44) {
            console.log("adding");
            var position0 = $(document).height() - $(document).scrollTop();

            var newImg = $("<img src='img/" + imgNum + ".jpg' alt='" + imgNum + "'>");
            $("#main").prepend(newImg);
            $(newImg).hide();
            imgNum++;

            $(newImg).load(function() {
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
    });

});
