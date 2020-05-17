const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };
  
  let date = new Date();
  let local = date.toLocaleDateString('en-US', options);

  document.getElementById('currentDate').textContent = local;
  
  const hambutton = document.querySelector('.ham');
  const mainnav = document.querySelector('.navigation');
  
  hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);