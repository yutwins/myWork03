"use strict"
{

    jQuery('.drawer-icon').on('click', function(e) {
        e.preventDefault(); // ブラウザに依存する操作を無効化
    
        jQuery('.drawer-icon').toggleClass('is-active');
        jQuery('.drawer-content').toggleClass('is-active');
        jQuery('.drawer-background').toggleClass('is-active');
        return false;
    });

    new WOW().init();



}