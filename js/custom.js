
$(document).ready(function (){

  $('.banner_main').slick({
    arrows:true,
    prevArrow:'.arrow_prev_banner',
    nextArrow:'.arrow_next_banner',

  });
  $('.products_main').slick({
    arrows: true,
    prevArrow: '<i class="fa-solid  responsive_arrow fa-angle-left previous"></i>',
    nextArrow: '<i class="fa-solid  responsive_arrow fa-angle-right next"></i>',
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });
  $('.brand_main').slick({
    arrows: true,
    prevArrow: '<i class="fa-solid  responsive_arrow fa-angle-left previous"></i>',
    nextArrow: '<i class="fa-solid  responsive_arrow fa-angle-right next"></i>',
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
      
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      },
    ]
  });
  $('.usp').slick({
    arrows:false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:true,
    prevArrow:'.arrow_prev',
    nextArrow:'.arrow_next',
    responsive: [
      {
        breakpoint: 2000,
        settings:"unslick"
        
        
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 951,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1001,
        settings: {
          slidesToShow: 3,
        }
      },
    ]
  });
});

$(document).ready(function() {
  if(window.innerWidth <= 1023) { 
    document.getElementById("nav").style.display = 'none';
  }
});

function test(element){
  const drop = $(element).parent().children()[1]
  console.log(drop)
  if(drop.style.display === "none"){
    drop.style.display = "block"
  }else {
    drop.style.display = "none"
  }
}

function myFunction() {
  var x = document.getElementById("nav");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function toggle_drop(element){
const dropdown = $(element).parent().children()[2]
if(dropdown.style.display === "none"){
  dropdown.style.display = "block"
}else {
  dropdown.style.display = "none"
}
}

