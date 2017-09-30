// addEventListener('click', () => console.log('Hello'));

const nav = document.querySelector('nav');

const iceCream = nav.firstChild;

function once() {
  console.log('done');
  iceCream.removeEventListener('click', once);
}

iceCream.addEventListener('click', once);
