function showSection(id) {
    // Hide all sections
    var sections = document.getElementsByClassName('dynamic-section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    // Show the selected section
    var selectedSection = document.getElementById(id);
    selectedSection.style.display = 'block';
}

// Show default section on page load
document.addEventListener('DOMContentLoaded', function() {
    showSection('video_4d');
});
