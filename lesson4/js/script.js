
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.menu');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };
  
  let date = new Date();
  let local = date.toLocaleDateString('en-US', options);