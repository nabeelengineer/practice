$(document).ready(function(){
    $(".drag").draggable({
        containment:".con",
        opacity:'0.7',
        revert:true,
        helper:'clone',
    });
});