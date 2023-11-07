$('.banner-block__slider').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    items:1,
    dots: true
})

$('.sertificate-slider__block').owlCarousel({
    loop:true,
    nav:false,
    responsive:{
        0:{
            items:1,
            margin:0,
        },
        900:{
            items:3,
            margin:15,
        },
        1200:{
            items:1,
            margin:0,
        }
    }
})



$('.mobile-menu__btn').click(function() {
    let mobMenu = $('.mobile-menu');
    let menuState = mobMenu.css('display');
    if(menuState == 'none') {
        console.log()
        $('.mobile-menu__btn').find('img').attr('src','assets/images/icons/cross.svg')
        mobMenu.slideToggle()
    }
})

$(document).mouseup( function(e){
    let mobMenu = $('.mobile-menu');
    if ( !mobMenu.is(e.target) && mobMenu.has(e.target).length === 0 ) {
        $('.mobile-menu__btn').find('img').attr('src','assets/images/icons/menu.svg')
        mobMenu.slideUp();
    }
});