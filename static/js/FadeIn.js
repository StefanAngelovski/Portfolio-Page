document.addEventListener('DOMContentLoaded', function() {
    var autoRevealSection = document.querySelector('.container.reveal');
    if (autoRevealSection) {
        autoRevealSection.classList.add('active');
    }

    window.addEventListener('scroll', reveal);

    function reveal(){
        var reveals = document.querySelectorAll('.reveal');

        for(var i = 0; i < reveals.length; i++){
            var windowHeight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealPoint = 150; 

            if(revealTop < windowHeight - revealPoint){
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }
        }
    }

    // Call reveal function immediately to activate elements in view on load/refresh
    reveal();
});