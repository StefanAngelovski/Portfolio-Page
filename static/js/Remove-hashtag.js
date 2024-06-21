document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.scroll-link').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('data-target');
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});