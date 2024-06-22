document.addEventListener('DOMContentLoaded', function() {
  // Listen for clicks on anchors that open the modal
  document.querySelectorAll('[data-bs-toggle="modal"][data-iframe-src]').forEach(function(element) {
    element.addEventListener('click', function() {
      var iframeSrc = this.getAttribute('data-iframe-src');
      var modalIframe = document.querySelector('#projectModal iframe');
      if (modalIframe) {
        modalIframe.src = iframeSrc;
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
// Listen for clicks on anchors that open the modal
document.querySelectorAll('[data-bs-toggle="modal"]').forEach(function(element) {
    element.addEventListener('click', function() {
    var projectName = this.querySelector('h4').textContent; // Extract project name from <h5>
    var modalTitle = document.querySelector('#projectModal .modal-title'); // Find the modal title element

    if (modalTitle) {
        modalTitle.textContent = projectName; // Set the modal title to the project name
    }
    });
});
});