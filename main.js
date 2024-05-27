// on doc ready add event listener to #btn (onClick)

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn');
  const txt = document.getElementById('txt');
  const img = document.getElementById('img');

  btn.addEventListener('click', () => {
    btn.style.display = 'none';
    img.style.display = 'block';

    setTimeout(() => {
      img.style.display = 'none';
      txt.style.display = 'block';
    }, 3000);
  });
});
