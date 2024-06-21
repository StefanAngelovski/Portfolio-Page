$(document).ready(function() {
    var options = {
    navigation: true,
    pagination: true
    };
    $("#carouselPart").owlCarousel(options)
    function showProjectsbyCat(cat) {
    var owl = $("#carouselPart").data('owl.carousel');

    var nb = owl.items().length;
    console.log(nb)
    for (var i = 0; i < nb; i++) {
        owl.remove(i);
    }

    if (cat == 'all') {
        $('#projects-copy .project').each(function() {
        owl.add($(this).clone());
        owl.refresh();
        });
    } else {
        $('#projects-copy .project.' + cat).each(function() {
        console.log($(this).clone());
        owl.add($(this).clone());
        owl.refresh();
        });
    }
    }
    $('#carouselPart .project').clone().appendTo($('#projects-copy'));
    $('#project-terms a').click(function(e) {
    e.preventDefault();
    $('#project-terms a').removeClass('active');

    cat = $(this).attr('ID');
    $(this).addClass('active');
    showProjectsbyCat(cat);
    });
});