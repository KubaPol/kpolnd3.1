$(function() {
    $('.works-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        autoWidth:true,
        dots: false,
        navText: ['<img src="static/main/img/left.svg">', '<img src="static/main/img/right.svg">'],
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    });

    $('.contri-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: false,
        navText: ['<img src="static/main/img/left.svg">', '<img src="static/main/img/right.svg">'],
        // startPosition:1,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});