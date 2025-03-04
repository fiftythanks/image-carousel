import './style.css';

const slides = document.querySelector('.slides');
const dots = Array.from(document.querySelector('.dots').children);

function slideLeft() {
  const offset = slides.style.left;
  switch (offset) {
    case '-3600px':
      slides.style.left = '-2400px';
      dots[3].classList.toggle('current-slide');
      dots[2].classList.toggle('current-slide');
      break;
    case '-2400px':
      slides.style.left = '-1200px';
      dots[2].classList.toggle('current-slide');
      dots[1].classList.toggle('current-slide');
      break;
    case '-1200px':
      slides.style.left = '0px';
      dots[1].classList.toggle('current-slide');
      dots[0].classList.toggle('current-slide');
      break;
    case '0px':
      slides.style.left = '-3600px';
      dots[0].classList.toggle('current-slide');
      dots[3].classList.toggle('current-slide');
      break;
    default:
    // do nothing
  }
}

function slideRight() {
  const offset = slides.style.left;
  switch (offset) {
    case '0px':
      slides.style.left = '-1200px';
      dots[0].classList.toggle('current-slide');
      dots[1].classList.toggle('current-slide');
      break;
    case '-1200px':
      slides.style.left = '-2400px';
      dots[1].classList.toggle('current-slide');
      dots[2].classList.toggle('current-slide');
      break;
    case '-2400px':
      slides.style.left = '-3600px';
      dots[2].classList.toggle('current-slide');
      dots[3].classList.toggle('current-slide');
      break;
    case '-3600px':
      slides.style.left = '0px';
      dots[3].classList.toggle('current-slide');
      dots[0].classList.toggle('current-slide');
      break;
    default:
    // do nothing
  }
}

let interval;
const timeout = setTimeout(() => {
  interval = setInterval(slideRight, 5000);
}, 5000);

const left = document.querySelector('.left');
const right = document.querySelector('.right');

left.addEventListener('click', () => {
  slideLeft();
  clearTimeout(timeout);
  clearInterval(interval);
});
right.addEventListener('click', () => {
  slideRight();
  clearTimeout(timeout);
  clearInterval(interval);
});

for (let i = 0; i < dots.length; i += 1) {
  // eslint-disable-next-line no-loop-func
  dots[i].addEventListener('click', () => {
    clearTimeout(timeout);
    clearInterval(interval);
    const dot = dots[i];
    const selected = document.querySelector('.current-slide');
    switch (i) {
      case 0:
        slides.style.left = '0px';
        selected.classList.toggle('current-slide');
        dot.classList.toggle('current-slide');
        break;
      case 1:
        slides.style.left = '-1200px';
        selected.classList.toggle('current-slide');
        dot.classList.toggle('current-slide');
        break;
      case 2:
        slides.style.left = '-2400px';
        selected.classList.toggle('current-slide');
        dot.classList.toggle('current-slide');
        break;
      case 3:
        slides.style.left = '-3600px';
        selected.classList.toggle('current-slide');
        dot.classList.toggle('current-slide');
        break;
      default:
      // do nothing
    }
  });
}
