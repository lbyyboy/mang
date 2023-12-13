$(document).ready(function(){

    //nav - submenu

    $("nav ul li").mouseover(function(){
        $(this).children(".submenu").stop().slideDown()
    });
    $("nav ul li").mouseleave(function(){
        $(this).children(".submenu").stop().slideUp()
    });

});