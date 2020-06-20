const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

//name 
//motto
//yearFounded
//currentPopulation
//averageRainfall
//photo
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
            console.table(jsonObject); 
            const towns = jsonObject['towns'];
            for (let i = 0; i < towns.length; i++) {
                let town = document.createElement('section');
                let h2 = document.createElement('h2');
                let h3 = document.createElement('h3');
                let p = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let image = document.createElement('img');
                
                

                h2.textContent = towns[i].name;
                h3.textContent = towns[i].motto;
                p.textContent = "Year Founded: " +' ' + towns[i].yearFounded;
                p2.textContent = "Population: " + towns[i].currentPopulation;
                p3.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
                image.setAttribute('src', "images/" + cities[i].photo);


                town.appendChild(h2);
                town.appendChild(h3);
                town.appendChild(p);
                town.appendChild(p2);
                town.appendChild(p3);
                town.appendChild(image); 
                town.appendChild(image)

                document.querySelector('div.home').appendChild(town);
            }});
        