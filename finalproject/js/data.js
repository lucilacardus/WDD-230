

fetch('../data/rentals.json')
    .then(function (response) {
        return response.json();
    })


    
    .then(function (jsonObject) {
        console.table(jsonObject);
        const prices = jsonObject['prices'];
        for (let i = 0; i < prices.length; i++) {
            let data = document.createElement('tr');

            tr += '<td>' + prices[i].maxpersons + '</td>';

            tr += '<td>' + prices[i].half + '</td>';

            tr += '<td>' + prices[i].full + '</td>';

            tr += '<td>' + prices[i].halfwalkin + '</td>';

            tr += '<td>' + prices[i].fullwalkin + '</td>';





            data.appendChild(tr);


            document.querySelector('div.datatable').appendChild(data);
        }
    });