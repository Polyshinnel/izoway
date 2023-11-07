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


$('.sertificate-slider__block_mod').owlCarousel({
    loop:true,
    nav:false,
    center: true,
    responsive:{
        0:{
            items:1,
            margin:0,
        },
        900:{
            items:3,
            margin:5,
        },
    }
})

$('.gallery-block__slider').owlCarousel({
    loop:true,
    nav:false,
    responsive:{
        0:{
            items:1,
            margin:0,
            dots: true
        },
        900:{
            items:4,
            margin:15,
        },
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

$('.product-page__tabs li').click(function(){
    let data = $(this).attr('data-name');

    $('.product-page__tabs li').each(function(){
        $(this).removeClass('active');
    })

    $(this).addClass('active')
    
    $('.product-page__tab-item').each(function(){
        $(this).removeClass('product-page__tab-item_active')
        let tabName = $(this).attr('data-name');
        if(tabName == data) {
            $(this).addClass('product-page__tab-item_active')
        }
    })
})