
    // FETCHING DATA FROM JSON FILE 
    $.getJSON('https://lucilacardus.github.io\finalproject\data\rentals.json',
        function (prices) {
            let info = '';

            // ITERATING THROUGH OBJECTS 
            $.each(prices, function (key, value) {

                //CONSTRUCTION OF ROWS HAVING 
                // DATA FROM JSON OBJECT 
                info += '<td>' + value.maxpersons + '</td>';

                info += '<td>' + value.half + '</td>';

                info += '<td>' + value.full + '</td>';

                info += '<td>' + value.halfwalkin + '</td>';

                info += '<td>' + value.fullwalkin + '</td>';          


            });

            //INSERTING ROWS INTO TABLE  
            $('#table').append(prices);
        });
});