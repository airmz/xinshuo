/*
 * @Author: airmz
 * @Date: 2020-09-29 16:17:26
 * @LastEditTime: 2020-09-29 16:18:11
 * @FilePath: \az-jnxinshuo.com\template\default\js\index.js
 */
window.onload = function () {
    imgZoomRun("product3", "p", "prod-zoom", "li"); // 图片放大
    imgZoomRun("product7", "p", "prod-zoom", "li");
    imgZoomRun("product8", "p", "prod-zoom", "li");
    newsFontMove("fontjump"); // 鼠标放上，字体上下挪
    newsFontMove("fontjumpcolor"); // 鼠标放上，字体上下挪
    colorChange("fontjumpcolor"); // 隔行换色
    colorChange("news5"); // 隔行换色
    listImgZoom("product1", "215"); // 图片缩放，需要给定宽度
    listImgZoom("product2", "215"); // 图片缩放，需要给定宽度
    listImgZoom("product3", "215"); // 图片缩放，需要给定宽度
    listImgZoom("product4", "215"); // 图片缩放，需要给定宽度
    listImgZoom("product5", "215"); // 图片缩放，需要给定宽度
    listImgZoom("product6", "215"); // 图片缩放，需要给定宽度
    listImgZoom("product8", "200"); // 图片缩放，需要给定宽度
    enterAnimation("news_fadein");
    if (typeof (data) != "undefined") {
        var lefttype = new LeftType(data, "left-type", 0); // 多级分类
    }
    afx.conHeightAuto();
};
window.addEventListener("resize", function () {
    afx.conHeightAuto();
}, false);
$(function () {
    // 产品中心相关脚本
    $('.product .rdata li').hover(function () {
        $(this).find('.img').css('border-color', '#fcaf01');
        $(this).find('.title').css('background-color', '#fcaf01');
    }, function () {
        $(this).find('.img').css('border-color', '#e0e0e0');
        $(this).find('.title').css('background-color', '#23201d');
    });
    $('.product .rdata').first().show();
    $('.product .lnav li').mouseenter(function () {
        $('.product .rdata').hide();
        $($('.product .rdata')[$(this).index()]).show();
    });
    jQuery(".rimgs").slide({
        mainCell: ".bd ul",
        autoPlay: true
    });
    // 最下方滑过
    $('.imgh').hover(function () {
        $(this).find('.msg_bg').show();
    }, function () {
        $(this).find('.msg_bg').hide();
    });
})