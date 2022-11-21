const preloader = document.querySelector('.preloader');

const fadeEffect = setInterval(() => {
  // if we don't set opacity 1 in CSS, then it will be equaled to "", that's why we check it
  if (!preloader.style.opacity) {
    preloader.style.opacity = 1;
  }
  if (preloader.style.opacity > 0) {
    preloader.style.opacity -= 0.1;
  } else {
    clearInterval(fadeEffect);
    setTimeout(function (){
      document.querySelector('.preloader').parentNode.removeChild(document.querySelector('.preloader'));  
    }, 700);    
  }
}, 0);

window.addEventListener('load', fadeEffect);