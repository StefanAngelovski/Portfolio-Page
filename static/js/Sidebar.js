function showSidebar(){
    const sidebar = document.querySelector('#sidebar');
    sidebar.style.transform = 'translateX(0)'; // Move the sidebar onto the screen
    const sidebarButton = document.querySelector('#sidebarButton');
    sidebarButton.style.display = 'none';
}

function hideSidebar(){
    const sidebar = document.querySelector('#sidebar');
    sidebar.style.transform = 'translateX(100%)'; // Move the sidebar off the screen
    if (window.innerWidth < 991) {
        const sidebarButton = document.querySelector('#sidebarButton');
        sidebarButton.style.display = 'flex';
    }
}

// Removes the sidebarButton upon resizing the window
window.addEventListener('resize', function() {
    const sidebarButton = document.querySelector('#sidebarButton');
    if (window.innerWidth > 991) { // Change 991 to your desired breakpoint
        sidebarButton.style.display = 'none';
    } else if (document.querySelector('#sidebar').style.display !== 'flex') {
        // Only show the sidebar button on small screens if the sidebar is not visible
        sidebarButton.style.display = 'flex';
    }
});