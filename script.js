function showGallery(category) {
    const galleries = document.querySelectorAll('.gallery-container');
    galleries.forEach(gallery => gallery.style.display = 'none');

    const selectedGallery = document.getElementById(category);
    if (selectedGallery) {
        selectedGallery.style.display = 'flex';
    }
}