AOS.init();

let places = document.querySelectorAll(".place-list li");
let active = "videos/first_part.mp4";
let videos = document.querySelectorAll(".video1, .video2, .video3");

places.forEach((e) => {
  e.addEventListener("mouseenter", (event) => {
    places.forEach((e) => {
      e.classList.remove("active");
    });

    event.target.classList.add("active");
    active = event.target.getAttribute("data-video");
    let banner = document.querySelector(".banner");

    let videoElement = document.createElement("video");
    videoElement.setAttribute("src", active);
    videoElement.setAttribute("autoplay", "");
    videoElement.setAttribute("loop", "");
    videoElement.setAttribute("muted", "");
    videoElement.classList.add("active");

    videoElement.style.opacity = "0";

    let existingVideos = banner.querySelectorAll("video");
    existingVideos.forEach((video) => {
      banner.removeChild(video);
    });

    banner.appendChild(videoElement);

    void videoElement.offsetWidth;

    videoElement.style.opacity = "1";
    videoElement.style.transition = "opacity 0.5s";

    videos.forEach((video) => {
      video.style.opacity = "0";
      video.style.transform = "translateY(50px)";
      video.style.transition = "opacity 0.3s, transform 0.5s";
    });

    let index = event.target.getAttribute("data-index");
    let correspondingVideo = document.querySelector(`.video${index}`);
    correspondingVideo.style.opacity = "1";
    correspondingVideo.style.transform = "translateY(0)";
  });

  e.addEventListener("touchstart", (event) => {
    event.preventDefault();

    const mouseEvent = new MouseEvent("mouseenter");
    e.dispatchEvent(mouseEvent);
  });
});
var swiper = new Swiper(".types-slider", {
    grabCursor:false,
    loop:true,
    centeredSlides:true,
    spaceBetween: 20,
    pagination: {
       el: ".swiper-pagination",
       clickable: true,
       dynamicBullets: true,
    },
    breakpoints: {
       0: {
          slidesPerView: 1,
       },
       700: {
          slidesPerView: 2,
       },
       1000: {
          slidesPerView: 3,
       },
    },
    
 });
 
 
 const previewContainer = document.querySelector('.types-preview-container');
 const previewBox = previewContainer.querySelectorAll('.types-preview');
 const typesButtons = document.querySelectorAll('.types .slide button');
 const closePreviewButtons = previewContainer.querySelectorAll('#close-preview');
 
 typesButtons.forEach(button => {
    button.addEventListener('click', () => {
       const types = button.parentElement;
       if (types.classList.contains('swiper-slide-active')) {
          previewContainer.style.display = 'flex';
          const name = types.getAttribute('data-name');
          previewBox.forEach(preview => {
             const target = preview.getAttribute('data-target');
             if (name === target) {
                preview.classList.add('active');
             }
          });
       }
    });
 });
 
 closePreviewButtons.forEach(button => {
    button.addEventListener('click', () => {
       previewContainer.style.display = 'none';
       previewBox.forEach(preview => {
          preview.classList.remove('active');
       });
    });
 });
 
 
 closePreviewButtons.forEach((closePreviewButtons) => {
    closePreviewButtons.addEventListener("click", () => {
       const slides = document.querySelectorAll('.types-preview');
       slides.forEach((slide) => {
          const readMoreButton = slide.querySelector('button');
          if (readMoreButton.innerHTML === 'Read Less') {
             const dots = slide.querySelector('#dots');
             const moreText = slide.querySelector('#more');
             dots.style.display = 'inline';
             moreText.style.display = 'none';
             readMoreButton.innerHTML = 'Read More';
          }
       });
    });
 });
 
 let slideCounter = 0;
 const totalSlides = 9;
 
 function toggleReadMoreLess(btn) {
    const parentSlide = btn.closest('.types-preview');
    const dots = parentSlide.querySelector('#dots');
    const moreText = parentSlide.querySelector('#more');
 
    if (btn.innerHTML === 'Read More') {
       dots.style.display = 'none';
       moreText.style.display = 'inline';
       btn.innerHTML = 'Read Less';
    } else {
       dots.style.display = 'inline';
       moreText.style.display = 'none';
       btn.innerHTML = 'Read More';
    }
    slideCounter++;
    if (slideCounter === totalSlides) {
       slideCounter = 0;
       btn.innerHTML = 'Read More';
    }
 }

 document.querySelector('.read-more').addEventListener('click', function(e) {
   e.preventDefault();
   var originalText = document.querySelector('.original-text');
   var newText = document.querySelector('.new-text');
   var readMoreButton = document.querySelector('.read-more');

   if (originalText.style.display === 'none') {
     originalText.style.display = 'block';
     newText.style.display = 'none';
     readMoreButton.textContent = 'Read More';
   } else {
     originalText.style.display = 'none';
     newText.style.display = 'block';
     readMoreButton.textContent = 'Read Less';
   }
 });

 

  function changeActive(event, element) {
   event.preventDefault();
   const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
   navLinks.forEach(link => link.classList.remove('active'));
   element.classList.add('active');
   window.location.href = element.getAttribute('href');
 }
