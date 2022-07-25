window.onload = function(){
  $('#onload').fadeOut();
  $('body').removeClass('hidden');
}

var nav = document.querySelector('nav');

      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 500) {
          nav.classList.add('bg-dark', 'shadow');
        } else {
          nav.classList.remove('bg-dark', 'shadow');
        }
      });

$(document).ready(function ($) {
function animateElements() {
    $('.progressbar').each(function () {
        var elementPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        var percent = $(this).find('.circle').attr('data-percent');
        var animate = $(this).data('animate');
        if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
            $(this).data('animate', true);
            $(this).find('.circle').circleProgress({
                value: percent / 100,
                size : 400,
                thickness: 15,
                fill: {
                  color: '#35D0BA'
                }
            }).on('circle-animation-progress', function (event, progress, stepValue) {
                $(this).find('span').text((stepValue*100).toFixed(0) + "%");
            }).stop();
        }
    });
}

animateElements();
$(window).scroll(animateElements);
});
