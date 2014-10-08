$(function() {
    var imgNum = 2;

    $("#startingBlock").css('height', $(window).height() + 'px');

    $("<img src='img/1.jpg' alt='1'>").load(function() {
        var newImg = $("<img src='img/" + imgNum + ".jpg' alt='" + imgNum + "'>");
        $("#main").prepend(newImg);
        $(newImg).hide();
        imgNum++;

        $(newImg).load(function() {
            $(newImg).show();
            $(document).scrollTop($(document).height());
        });
    });

    function addImgs() {
        if (imgNum < 47) {
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
