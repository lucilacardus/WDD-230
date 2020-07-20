const requestURL = 'https://lucilacardus.github.io/finalproject/data/rentals.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);
        const rentals = jsonObject['rentals'];

        rentals.forEach(rentals => {
            let content = document.createElement('section');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let h4 = document.createElement('h3');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let p4 = document.createElement('p');
            let p5 = document.createElement('p');
            let image = document.createElement('img');

            image.setAttribute('src', 'images/' + rentals.picture);
            image.setAttribute('alt', `Picture of a scooter or car called ${rentals.name}`);
            h2.innerHTML = `${rentals.name}`;
            p1.innerHTML = `Max. Persons: ${rentals.maxpersons}`;
            h3.innerHTML = `Reservation`;
            p2.innerHTML = `Half Day (3 hrs): ${rentals.half}`;
            p3.innerHTML = `Full Day: ${rentals.full}`;
            h4.innerHTML = `Walk-In`;
            p4.innerHTML = `Half Day (3 hrs): ${rentals.halfwalkin}`;
            p5.innerHTML = `Full Day: ${rentals.fullwalkin}`;


            content.appendChild(image);
            content.appendChild(h2);
            content.appendChild(p1);
            content.appendChild(h3);
            content.appendChild(p2);
            content.appendChild(p3);
            content.appendChild(h4);
            content.appendChild(p4);
            content.appendChild(p5);



            document.querySelector('div.data').appendChild(content);

        });
    });