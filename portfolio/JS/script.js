$(document).ready(
    function(){
        "use strict";
        $(".loader").fadeOut(1000,function(){
            $(".slide-left,.slide-right").animate({
                "width":"0%"
            },3000,function(){
                $(".loader-con").fadeOut();
            });
        });
    });
    $(function(){
        "use strict";
        $("#menu").slicknav({
            label:'',
            brand:'Er. Nabeel',
        });
    });
    $(document).ready(function() {
        "use strict";
        $(".skitter-large").skitter({
        label : false,
        dots : false,
    });
});
$(document).ready(function(){
    $(".picone-header").slideDown(2000,function(){
        $(".picone-btn").fadeIn(2500);
        $(".picone-header,.picone-btn").delay(600).fadeOut();
    });
});