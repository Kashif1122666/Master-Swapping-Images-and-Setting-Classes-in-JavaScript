function swapImage(newImageSrc , clickedThumbnail) {

    
    var mainImage = document.getElementById("mainImage");
    // // swap Image
    mainImage.src = newImageSrc;

    // remove 'active' class from all Thumbnail
    var Thumbnails = document.querySelectorAll('.gallery img');
    for (var i = 0; i < Thumbnails.length; i++) {
          Thumbnails[i].classList.remove('active');
    }

    // add 'active' class to the clickedThumbnail
    clickedThumbnail.classList.add('active');



}


