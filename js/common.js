$(function() {

$('.hamburger').click(function(){
    $('.menu').toggleClass('active');
    
})
$('.accordion_body').slideUp()
$('.accordion_head').click(function () {
    $(this).toggleClass('active')
    $(this).next().slideToggle()
})
    $('.close, .overlay').click(function () {
        $('.popup').addClass('popup-hide')
    })

    $('.menu >div').click(function () {
        $('.menu').removeClass('active')
    })
//    top button
    $('.show-popup-one').click(function () {
        $('.popup-one').removeClass('popup-hide')
    })
    //    first-section button
    $('.show-popup-two').click(function () {
        $('.popup-two').removeClass('popup-hide')
    })
    $('.show-popup-three').click(function () {
        $('.popup-three').removeClass('popup-hide')
    })
    var $root = $('html, body');

    $('a[href^="#"]').click(function () {
        $root.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);

        return false;
    });
});
