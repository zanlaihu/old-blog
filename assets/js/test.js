$(function () {
    // function canToggle(){
    //     if ($(".mobile-nav").css("display") == "block") {
    //         $(".mobile-nav").animate({ height: "toggle" });
    //     }
    // }

    $(".test-navigation").click(function () {
        if($(".test-dropdown").css("height") == '600px'){
            $(".test-dropdown").animate({ height: "60px" });
        } else {
            $(".test-dropdown").animate({ height: "600px" });
        }
    });

    // $(".home-ins").click(function () {canToggle()});
    $(".home-ins").mouseenter(function () {canToggle()});

    $(".mobile-nav-bottom").click(function () {canToggle()});
});
