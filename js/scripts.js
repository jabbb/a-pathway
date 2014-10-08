$(function() {
            var imgNum = 2;
            var loaded;

                var location = [
                    "Annandale-on-Hudson, NY, USA",
                    "Kharagpur, West Bengal, India",
                    "Davao City, Philippines",
                    "Charlotte, NC, USA",
                    "Westminster, CO, USA",
                    "Kottayam, Kerala, India",
                    "Kottayam, Kerala, India",
                    "Calicut, Kerala, India",
                    "Toronto, Canada",
                    "Trivandrum, Kerala, India",
                    "Jordan",
                    "Canberra, Australia",
                    "Erode, Tamilnadu, India",
                    "Harur, Tamil Nadu, India",
                    "Pflugerville, Texas, USA",
                    "Albany, NY, USA",
                    "Tambaram, Tamil Nadu, India",
                    "Madras, India",
                    "Georgetown, Texas, USA",
                    "Hyderabad, Andhra Pradesh, India",
                    "Salem, Tamil Nadu, India",
                    "Gobichettipalayam, Tamilnadu, India",
                    "Hyderabad, Andhra Pradesh, India",
                    "London, United Kingdom",
                    "Kanchipuram, India",
                    "Hyderabad, Andhra Pradesh, India",
                    "Vellore, India",
                    "Santiago de Compostela, Spain",
                    "Iasi, Romania",
                    "Pala, Kerala, India",
                    "Pala, Kerala, India",
                    "Jordan",
                    "Tiruchiappali, Tamil Nadu, India",
                    "Harur, Tamil Nadu, India",
                    "Madambakkam, Tamil Nadu, India",
                    "Rajakilpakkam, Tamil Nadu, India",
                    "",
                    "Trivandrum, Kerala, India",
                    "Ernakulam, Kerala, India",
                    "Kasaragod, Kerala, India",
                    "Kottayam, Kerala, India",
                    "Anitha, Kerala, India",
                    "Lutz, Fl, USA",
                    "Hyderabad, Andhra Pradesh, India",
                    "Nagercoil, Tamilnadu, India",
                    "Cape Town, Western Cape, South Africa"
                ];

            $("#startingBlock").css('height', $(window).height() + 'px');
            addImgs();

            function addImgs() {
                if (imgNum < 47) {

                    var newImg = $("<img src='img/" + imgNum + ".jpg' alt='' /><h2>" + location[imgNum-1] + "</h2>").hide(); $("#main").prepend(newImg);
                        //$(newImg).hide();
                        imgNum++;

                        $(newImg).load(function() {
                            var position0 = $(document).height() - $(document).scrollTop();
                            $(newImg).show();
                            $(document).scrollTop($(document).height() - position0);
                            loaded = true;
                        });
                    }
                }

                $(document).scroll(function() {
                    if ($(document).scrollTop() < $(window).height() * 2 && loaded) {
                        loaded = false
                        addImgs();
                    }
                });

            });
