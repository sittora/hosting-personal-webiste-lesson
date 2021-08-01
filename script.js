let image = document.querySelector('img');


function flipImage() {
    image.style.transform = "scaleX(-1)";
  }
  
  image.addEventListener('mouseenter', flipImage); 

  function removeReverse() {
    image.style.removeProperty('transform');
  }
  
  image.addEventListener('mouseleave', removeReverse); 

