
function getRentalsView(){
    const rentalsArtile = document.querySelector('main article.rentalinfo');
    fetch("data/rentals.json")
    .then((Response) => Response.json())
    .then((jsObject) => {
      let rentals = jsObject.rentals;
      let htmlStr = '<h2>Max Persons and Price Chart <span>(includes Tax)</span></h2>';
      htmlStr += '<h3 class="empty">&nbsp;</h3>';
      htmlStr += '<h3 class="res"><p>Reservation</p></h3>';
      htmlStr += '<h3 class="walkin"><p>Walk-In</p></h3>';
      htmlStr += '<h3 class="type"><p>Rental Type</p></h3>';
      htmlStr += '<h3 class="persons"><p>Max. Persons</p></h3>';
      htmlStr += '<h3 class="reshalf"><p>Half Day (3 hrs)</p></h3>';
      htmlStr += '<h3 class="resfull"><p>Full Day</p></h3>';
      htmlStr += '<h3 class="walkhalf"><p>Half Day (3 hrs)</p></h3>';
      htmlStr += '<h3 class="walkfull"><p>Full Day</p></h3>';
      for(let i=0; i < rentals.length; i++){
        htmlStr += '<div class="type"><p>' + rentals[i].type + '</p></div>';
        htmlStr += '<div><p>' + rentals[i].maxPersons + '</p></div>';
        htmlStr += '<div><p>$' + rentals[i].resRates.halfDay + '</p></div>';
        htmlStr += '<div><p>$' + rentals[i].resRates.fullDay + '</p></div>';
        htmlStr += '<div><p>$' + rentals[i].walkinRates.halfDay + '</p></div>';
        htmlStr += '<div><p>$' + rentals[i].walkinRates.fullDay + '</p></div>';
      }
      rentalsArtile.innerHTML = htmlStr;
  
  
  
  
  
    });
  }