var main = function () {
    "use strict";

    $(".navbar-nav li").toArray().forEach(function (element) {
        //create a click handler for this element
        $(element).on("click", function () {
            $(".navbar-nav li").removeClass("active");
            $(element).addClass("active");

            return false;
        });
    });
};

$(document).ready(main);
