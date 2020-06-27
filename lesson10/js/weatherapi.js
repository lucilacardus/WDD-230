const apiURL = 'http://api.openweathermap.org.data/2.5/weather?id=5604473&APPID=759aa1ea97529d151a0df861e831f226&units=imperial';


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });