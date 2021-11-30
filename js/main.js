// with Jquery

// $(function() {
//     let date = new Date();

//     let clockShow = [
//         $('.days').text = date.getDay(),
//         $('.hours').text = date.getHours(),
//         $('.minute').text = date.getMinutes(),
//         $('.second').text = date.getSeconds()
//     ];






//     setInterval(clockShow,
//         1000);


//     // $('#btn').click(function() {
//     //     let text = $('#hideText').innerText = "Submitting...";


//     // });


$("#btn").click(function(){
    $(".hideText").fadeIn(1000);
  });
  $("#btn").click(function(){
    $(".hideText").fadeOut(2000);
  });

//modal

$('.set-icon').on({
  click:function(){
      $('.modalNew').addClass('next').css({
          transition:'all 0.5s ease-in-out'
      })
     
  },
  dblclick:function(){
      $('.modalNew').removeClass('next').css({
          transition:'all 0.5s ease-in-out'
      })
      
  }
});
  
// colors functions 
let colors = [
  $('.col__blue').click(function(){
    $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').addClass('blue');
  }),
  
  $('.col__violet').click(function(){
    $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').addClass('purple');
  }),
  
  $('.col__lightblue').click(function(){
    $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').addClass('lightblue');
  }),
  
  $('.col__orange').click(function(){
    $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').addClass('orange');
  }),
  
  $('.col__grey').click(function(){
    $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').addClass('grey');
  }),
  
  $('.col__green').click(function(){
    $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').addClass('green');
  }),
  
  $('.col__yellow').click(function(){
    $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').addClass('yellow');
  }),
  
  $('.col__crimson').click(function(){
    $('.header, .section1, .section2, .section3, .img, .header__date, h2, input, .block, span').addClass('crimson');
  })
];

// $('.col__blue').click(function(){
//   $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').addClass('blue');
// });

// $('.col__violet').click(function(){
//   $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').addClass('purple');
// });

// $('.col__lightblue').click(function(){
//   $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').addClass('lightblue');
// });

// $('.col__orange').click(function(){
//   $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').addClass('orange');
// });

// $('.col__grey').click(function(){
//   $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').addClass('grey');
// });

// $('.col__green').click(function(){
//   $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').addClass('green');
// });

// $('.col__yellow').click(function(){
//   $('.header, .section1, .section2, .section3, img, .header__date, h2, input, .block, span').addClass('yellow');
// });

// $('.col__crimson').click(function(){
//   $('.header, .section1, .section2, .section3, .img, .header__date, h2, input, .block, span').addClass('crimson');
// });

// });


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


