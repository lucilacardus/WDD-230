const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            let place = towns[i]
            let name = ["Fish Haven", "Preston", "Soda Springs"]
            if (name.includes(place.name)) {

                let section = document.createElement('article');
                section.classList.add('maincontainer')

                let containtext = document.createElement('div');
                containtext.classList.add('textcol');
                let h2 = document.createElement('h2');
                let motto = document.createElement('h3');
                let year = document.createElement('p');
                let population = document.createElement('p');
                let rainfall = document.createElement('p');

                h2.textContent = place.name;
                motto.textContent = place.motto;
                year.textContent = 'Year Founded: ' + place.yearFounded;
                population.textContent = 'Population: ' + place.currentPopulation;
                rainfall.textContent = 'Annual Rain Fall: ' + place.averageRainfall;

                containtext.appendChild(h2);
                containtext.appendChild(motto);
                containtext.appendChild(year);
                containtext.appendChild(population);
                containtext.appendChild(rainfall);

                let picture = document.createElement('div');
                picture.classList.add('homepic')
                let image = document.createElement('img');
                
                image.setAttribute('src', "images/" + place.photo);
                picture.appendChild(image)
                image.setAttribute('alt', towns[i].name);

                section.appendChild(containtext)
                section.appendChild(picture)


                document.querySelector('div.home').appendChild(section);
            }
        }
    });