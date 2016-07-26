var main = function () {
    "use strict";

    $(".navbar-nav li").toArray().forEach(function (element) {
        //create a click handler for this element
        $(element).on("click", function () {
            $(".navbar-nav li").removeClass("active");
            $(element).addClass("active");

            return true;
        });
    });

    $("a[href='board'").attr('href', '../ClubWebsite/board.html');
    $("a[href='career'").attr('href', '../ClubWebsite/career.html');
    $("a[href='events'").attr('href', '../ClubWebsite/events.html');
    $("a[href='contact-us'").attr('href', '../ClubWebsite/contact-us.html');
};

$(document).ready(main);
