const head = document.getElementById('head');
head.style.color = 'green';
head.style.fontFamily = 'cursive';
function writeText(text) {
  let index = 0;
  function writeNextLetter() {
    if (index < text.length) {
      head.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }
  let interval = setInterval(writeNextLetter, 100);
}
writeText('Welcome');
const hatm = document.getElementById('hatm');
document.getElementById('hat').addEventListener('click', () => {
  hatm.play();
  snarem.pause();
  kickm.pause();
  floortomm.pause();
  tomm.pause();
});
const snarem = document.getElementById('snarem');
document.getElementById('snare').addEventListener('click', () => {
  snarem.play();
  hatm.pause();
  kickm.pause();
  floortomm.pause();
  tomm.pause();
});
const tomm = document.getElementById('tomm');
document.getElementById('tom').addEventListener('click', () => {
  tomm.play();
  floortomm.pause();
  kickm.pause();
  hatm.pause();
  snarem.pause();
});

const floortomm = document.getElementById('floortomm');
document.getElementById('floortom').addEventListener('click', () => {
  floortomm.play();
  kickm.pause();
  tomm.pause();
  hatm.pause();
  snarem.pause();
});
const kickm = document.getElementById('kickm');
document.getElementById('kick').addEventListener('click', () => {
  kickm.play();
  floortomm.pause();
  tomm.pause();
  hatm.pause();
  snarem.pause();
});
