const requestURL = 'https://lucilacardus.github.io/finalproject/data/rentals.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        let rentals = jsonObject.rentals;

        for(let i=0; i < rentals.length; i++) {
            let temp ="";

                temp+= '<tr>';
                temp+= '<td> ' + rentals[i].name + '</td> ';
                temp+= '<td> ' + rentals[i].maxpersons; + '</td> ';
                temp+= '<td> ' + rentals[i].half; + '</td> ';
                temp+= '<td> ' + rentals[i].full; + '</td> ';
                temp+= '<td> ' + rentals[i].halfwalkin; + '</td> ';
                temp+= '<td> ' + rentals[i].fullwalkin; + '</td> </tr>';
            
            document.getElementById("data").innerHTML = temp
    }});
