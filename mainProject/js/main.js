var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};




$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    dots: false,
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
})




function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


//   second

  function openNav1() {
    document.getElementById("mySidenav1").style.width = "100%";
  }
  
  function closeNav1() {
    document.getElementById("mySidenav1").style.width = "0";
  }


//   third

function openNav2() {
    document.getElementById("mySidenav2").style.width = "100%";
  }
  
  function closeNav2() {
    document.getElementById("mySidenav2").style.width = "0";
  }


//   fourth


function openNav3() {
    document.getElementById("mySidenav3").style.width = "100%";
  }
  
  function closeNav3() {
    document.getElementById("mySidenav3").style.width = "0";
  }


//   fifth



function openNav4() {
    document.getElementById("mySidenav4").style.width = "100%";
  }
  
  function closeNav4() {
    document.getElementById("mySidenav4").style.width = "0";
  }


// sixth
  
function openNav5() {
    document.getElementById("mySidenav5").style.width = "100%";
  }
  
  function closeNav5() {
    document.getElementById("mySidenav5").style.width = "0";
  }


  $(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()>50)
            $('.navbar-section').addClass('navbar-active')
        else $('.navbar-section').removeClass('navbar-active')
    })
});