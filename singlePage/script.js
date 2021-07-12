const texts = [
  'am Ryan Coulson.',
  'make websites!',
  'am a nerd.',
  'love coding!',
  'am a gamer.',
];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
  if (count == texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector('.typing').textContent = letter;
  if (letter.length == currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 200);
})();

function lightMode() {
  const element = document.body;
  element.classList.toggle('lightMode');
}

// let load = 0;

// let int = setInterval(blurring, 30);

// function blurring() {
//   const loadText = document.querySelector('.loading-text');
//   const bg = document.querySelector('.bg');
//   const intro = document.querySelector('.intro');
//   const navbar = document.querySelector('.navbar');
//   load++;

//   if (load > 99) {
//     clearInterval(int);
//   }
//   loadText.innerText = `${load}%`;
//   loadText.style.opacity = scale(load, 0, 100, 1, 0);
//   bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
//   intro.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
//   navbar.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
// }

// const scale = (num, in_min, in_max, out_min, out_max) => {
//   return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
// };
