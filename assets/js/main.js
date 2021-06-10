$(function () {
    function canToggle(){
        if ($(".mobile-nav").css("display") == "block") {
            $(".mobile-nav").animate({ height: "toggle" }, "fast");
        }
    }

    $(".mobile-nav-control").click(function () {
        $(".mobile-nav").animate({ height: "toggle" }, "fast");
    });

    // $(".home-ins").click(function () {canToggle()});
    $(".home-ins").mouseenter(function () {canToggle()});

    $(".mobile-nav-bottom").click(function () {canToggle()});
});
