$("#btn").click(function() {
    $(".hideText").fadeIn(1000);
});
$("#btn").click(function() {
    $(".hideText").fadeOut(2000);
});

//modal

$('.set-icon').on({
    click: function() {
        $('.modalNew').addClass('next').css({
            transition: 'all 0.5s ease-in-out'
        })

    },
    dblclick: function() {
        $('.modalNew').removeClass('next').css({
            transition: 'all 0.5s ease-in-out'
        })

    }
});

// colors functions 
let colors = [
    $('.col__blue').click(function() {
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').addClass('blue');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('purple');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('lightblue');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('orange');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('grey');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('green');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('yellow');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('crimson');
    }),

    $('.col__violet').click(function() {
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').addClass('purple');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('blue');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('lightblue');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('orange');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('grey');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('green');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('yellow');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('crimson');
    }),

    $('.col__lightblue').click(function() {
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').addClass('lightblue');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('purple');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('blue');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('orange');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('grey');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('green');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('yellow');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('crimson');
    }),

    $('.col__orange').click(function() {
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').addClass('orange');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('purple');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('lightblue');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('blue');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('grey');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('green');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('yellow');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('crimson');
    }),

    $('.col__grey').click(function() {
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').addClass('grey');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('purple');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('lightblue');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('orange');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('blue');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('green');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('yellow');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('crimson');
    }),

    $('.col__green').click(function() {
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').addClass('green');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('purple');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('lightblue');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('orange');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('grey');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('blue');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('yellow');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('crimson');
    }),

    $('.col__yellow').click(function() {
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').addClass('yellow');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('purple');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('lightblue');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('orange');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('grey');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('green');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('blue');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('crimson');
    }),

    $('.col__crimson').click(function() {
        $('.header, .section1, .section2, .section3, .img, .header__date, h2, input, .block, span').addClass('crimson');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('purple');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('lightblue');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('orange');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('grey');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('green');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('blue');
        $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').removeClass('crimson');

    })
];




// with Javascript

function clockShow() {
    let date = new Date();
    document.querySelector('.days').textContent = date.getDay();
    document.querySelector('.hours').textContent = date.getHours();
    document.querySelector('.minute').textContent = date.getMinutes();
    document.querySelector('.second').textContent = date.getSeconds();
}

clockShow();

setInterval("clockShow()", 1000);