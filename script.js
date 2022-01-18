const items = document.querySelectorAll('.accordion button')

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded')

    for(i=0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if(itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true')
    }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));

$(document).ready(function(){
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          window.location.hash = hash;
        });
      }
    });
  });