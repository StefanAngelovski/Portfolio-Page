document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('[data-bs-toggle="modal"][data-iframe-src]').forEach(function(element) {
    element.addEventListener('click', function() {
      var iframeSrc = this.getAttribute('data-iframe-src');
      var modalIframe = document.querySelector('#projectModal iframe');
      if (modalIframe) {
        modalIframe.src = iframeSrc;
      }
    });
  });

  document.querySelectorAll('[data-bs-toggle="modal"]').forEach(function(element) {
    element.addEventListener('click', function() {
      var projectName = this.querySelector('h4').textContent;
      var modalTitle = document.querySelector('#projectModal .modal-title');

      if (modalTitle) {
        modalTitle.textContent = projectName;
      }
    });
  });

  $('#projectModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); 
    var projectName = button.find('h4').text(); 
    var iframeSrc = button.data('iframe-src'); 

    var modal = $(this);
    modal.find('.modal-title').text(projectName); 
    modal.find('iframe').attr('src', iframeSrc); 
  });
});