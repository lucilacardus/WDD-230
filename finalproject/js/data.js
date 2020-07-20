const requestURL = 'https://lucilacardus.github.io/finalproject/data/rentals.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const rentals = jsonObject['rentals'];

        for (let i = 0; i < rentals.length; i++) {

            let tr = document.createElement('tr');
                tr.classList.add('datatable')

                
                
                

                tr.innerHTML =`<td>${rentals[i].name}</td> <td> ${rentals[i].maxpersons}</td> <td> ${rentals[i].half}</td> <td> ${rentals[i].full}</td><td>${rentals[i].halfwalkin}</td><td>${rentals[i].fullwalkin}</td>`;
                

                tr.appendChild(tr)
                

                


                document.querySelector('tbody.data').appendChild(tr);
            }
        }
    );