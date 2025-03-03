import './style.css';

const slides = document.querySelector('.slides');
const dots = Array.from(document.querySelector('.dots').children);

let timeout;
let interval;
let isLast;

function slideLeft() {
  const offset = slides.style.left;
  switch (offset) {
    case '-3600px':
      slides.style.left = '-2400px';
      dots[3].classList.toggle('current-slide');
      dots[2].classList.toggle('current-slide');
      isLast = false;
      break;
    case '-2400px':
      slides.style.left = '-1200px';
      dots[2].classList.toggle('current-slide');
      dots[1].classList.toggle('current-slide');
      isLast = false;
      break;
    case '-1200px':
      slides.style.left = '0px';
      dots[1].classList.toggle('current-slide');
      dots[0].classList.toggle('current-slide');
      isLast = false;
      break;
    case '0px':
      slides.style.left = '-3600px';
      dots[0].classList.toggle('current-slide');
      dots[3].classList.toggle('current-slide');
      isLast = true;
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
      isLast = false;
      interval = setInterval(slideRight, 5000);
      break;
    case '-1200px':
      slides.style.left = '-2400px';
      dots[1].classList.toggle('current-slide');
      dots[2].classList.toggle('current-slide');
      isLast = false;
      break;
    case '-2400px':
      slides.style.left = '-3600px';
      dots[2].classList.toggle('current-slide');
      dots[3].classList.toggle('current-slide');
      isLast = true;
      clearInterval(interval);
      break;
    case '-3600px':
      slides.style.left = '0px';
      dots[3].classList.toggle('current-slide');
      dots[0].classList.toggle('current-slide');
      isLast = false;
      break;
    default:
    // do nothing
  }
}

timeout = setTimeout(slideRight, 5000);

const isStopped = false; // for dots (when you click on one of them, the autosliding will stop)

const left = document.querySelector('.left');
const right = document.querySelector('.right');

left.addEventListener('click', () => {
  slideLeft();
  clearTimeout(timeout);
  clearInterval(interval);
  if (!isLast && !isStopped) timeout = setTimeout(slideRight(true), 5000);
});
right.addEventListener('click', () => {
  slideRight();
  clearTimeout(timeout);
  clearInterval(interval);
  if (!isLast && !isStopped) timeout = setTimeout(slideRight(true), 5000);
});
