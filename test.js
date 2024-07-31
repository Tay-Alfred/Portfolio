// Get the modal
var modal = document.getElementById('imageModal');

// Get all images with the class 'thumbnail' and the modal image element
var thumbnails = document.getElementsByClassName('thumbnail');
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");

// Loop through each thumbnail and attach the click event
for (var i = 0; i < thumbnails.length; i++) {
  thumbnails[i].onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;  // Use a larger version if available
    captionText.innerHTML = this.alt;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// Close the modal if the user clicks anywhere outside of the modal content
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
