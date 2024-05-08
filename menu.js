document.addEventListener("DOMContentLoaded", function() {
    var drops = document.querySelectorAll('.drop');

    drops.forEach(function(drop) {
        drop.addEventListener('mouseover', function() {
            this.querySelector('.dropdown').classList.add('active');
        });

        drop.addEventListener('mouseleave', function() {
            this.querySelector('.dropdown').classList.remove('active');
        });
    });
});
