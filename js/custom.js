//menu


document.addEventListener(
    "DOMContentLoaded", () => {
        new Mmenu("#menu", {
            "offCanvas": {
                "position": "right-front"
            },
            "theme": "light"
        });
    }
);



///////counter start ////////

var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 3000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 2;
  }

});


///////counter end ////////


//////////////  banner slider   ///////////


$('.banner-section .banner-slider .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    // nav:true,
  items: 1,
    responsive:{
        1024:{
            items:1
        }
    }
})

//                  end       //




//////////////   slider   ///////////


$('.slider-content .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
     autoplayTimeout: 2000,
   autoplay:true,
  autoplayHoverPause: true,
  items: 1,
    responsive:{
        1024:{
            items:1
        }
    }
})



//////////////// end  ////////////////
