document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll('.gallery a');
    var currentImageIndex = 0;

    function showImage(index) {
        var image = images[index];
        var imageUrl = image.getAttribute('href');
        var imageTitle = image.innerText;

        var galleryContainer = document.createElement('div');
        galleryContainer.classList.add('gallery-container');

        var imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');

        var imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.alt = imageTitle;

        imgElement.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        imgElement.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });

        var titleElement = document.createElement('p');
        titleElement.textContent = imageTitle;

        imgContainer.appendChild(imgElement);
        galleryContainer.appendChild(imgContainer);
        galleryContainer.appendChild(titleElement);

        var existingGalleryContainer = document.querySelector('.gallery-container');
        if (existingGalleryContainer) {
            existingGalleryContainer.replaceWith(galleryContainer);
        } else {
            document.body.appendChild(galleryContainer);
        }
    }
    showImage(0);
});
