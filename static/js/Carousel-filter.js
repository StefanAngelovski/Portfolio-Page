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
    initializeModalEventListeners();
    });
});





function initializeModalEventListeners() {
    // Listen for clicks on anchors that open the modal with iframe source
    document.querySelectorAll('[data-bs-toggle="modal"][data-iframe-src]').forEach(function(element) {
      element.removeEventListener('click', handleIframeModalClick); // Remove existing event listener to avoid duplicates
      element.addEventListener('click', handleIframeModalClick);
    });
  
    // Listen for clicks on anchors that open the modal without iframe source
    document.querySelectorAll('[data-bs-toggle="modal"]').forEach(function(element) {
      element.removeEventListener('click', handleModalClick); // Remove existing event listener to avoid duplicates
      element.addEventListener('click', handleModalClick);
    });
  }
  
  function handleIframeModalClick() {
    var iframeSrc = this.getAttribute('data-iframe-src');
    var modalIframe = document.querySelector('#projectModal iframe');
    if (modalIframe) {
      modalIframe.src = iframeSrc;
    }
  }
  
  function handleModalClick() {
    var projectName = this.querySelector('h5').textContent; // Extract project name from <h5>
    var modalTitle = document.querySelector('#projectModal .modal-title'); // Find the modal title element
  
    if (modalTitle) {
      modalTitle.textContent = projectName; // Set the modal title to the project name
    }
  }
  
  // Initial setup
  document.addEventListener('DOMContentLoaded', initializeModalEventListeners);