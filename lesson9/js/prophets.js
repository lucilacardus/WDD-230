const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
      const prophets = jsonObject['prophets'];
       {

        
      forEach(prophet => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let image = document.createElement('img');
        
        h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
        p1.innerHTML = `Date of birth: <strong>${prophet.birthdate}</strong>`;
        p2.innerHTML = `Place of birth: <strong>${prophet.birthplace}</strong>`;
        image.innerHTML = `${prophet.imageurl}`;


        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);

      }

    });