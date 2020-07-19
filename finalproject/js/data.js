
const requestURL = 'https://lucilacardus.github.io\finalproject\data\rentals.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
            console.table(jsonObject); 
            const prices = jsonObject['prices'];
            for (let i = 0; i < prices.length; i++) {
                
                let td = document.createElement('td');


              
                td.textContent = prices[i].name + ' ' + prices[i].maxpersons + ' ' + prices[i].half + ' ' + prices[i].full  + ' ' + prices[i].halfwalkin + ' ' + prices[i].fullwalkin;

                
            
                datatable.appendChild(table);
                datatable.appendChild(tr);
                datatable.appendChild(th);
                datatable.appendChild(td); 

                document.querySelector('div.datatable').appendChild(datatable);
            }});
        