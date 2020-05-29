$(document).ready(function() {
    // isotope  
    let btns = $('.portfolio-area .button-group button');
    btns.click(function(e) {
       $('.portfolio-area .button-group button').removeClass('active');
       e.target.classList.add('active');

       let selector = $(e.target).attr('data-filter');

       $('.portfolio-area .grid').isotope({
         filter: selector
       });
       return false;
    })

    // Magnific Popup
   

    // ProgressBar Linear
    $('.skill-per').each(function() {
        var $this = $(this);
        var per = $this.attr('per');
        $this.css('width', per + '%');
        $({animatedValue: 0}).animate({animatedValue: per},{
            duration: 1000,
            step: function(){
              $this.attr('per', Math.floor(this.animatedValue) + '%');
            },
            complete: function(){
              $this.attr('per', Math.floor(this.animatedValue) + '%');
            }
        })
    });

    // ProgressBar circle
    $('.circlechart').circlechart();



    // sticky navigation menu
    let nav_offset_top = $('.sticky_menu').height() + 50;

    function navbarFixed() {
      if ($('.header_area').length) {
        $(window).scroll(function() {
            let scroll = $(window).scrollTop();
            if (scroll >= nav_offset_top) {
              $('.header_area .sticky_menu').addClass('navbar_fixed');
              $('.header_area .main-menu .nav-item .nav-link').addClass('sticky-link');
            } else {
              $('.header_area .sticky_menu').removeClass('navbar_fixed');
              $('.header_area .main-menu .nav-item .nav-link').removeClass('sticky-link');
            }
        });
      }
    }
    //console.log(nav_offset_top);
    navbarFixed();

})