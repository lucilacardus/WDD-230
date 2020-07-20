

function onpageload(){
    //shown on every page 
      //get header
      getHeaderView();
      //set uo the menu buttons
      getNavView("rentals");
      showMenuInfo();
      //get footer info
      getFooterView();
      showFooterInfo();
  
    getRentalsView();
  
    llimagesTimer = setTimeout(function () {setupLazyLoadImages();}, 100); 
  }
  
  function getRentalsView(){
    const rentalsArtile = document.querySelector('main article.rentalinfo');
    const rentalImages = document.querySelector('main article.rentalimages');
    rentalImages.innerHTML = "";
    fetch("data/sitedata.json")
    .then((Response) => Response.json())
    .then((jsObject) => {
      let rentals = jsObject.rentals;
      let htmlStr = '<h2>Max Persons and Price Chart <span>(includes Tax)</span></h2>';
      let imgStr = '';
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
        let a = document.createElement('a');
        let fig = document.createElement('figure');
        let img = document.createElement('img');
        let figcap = document.createElement('figcaption');
        img.src = "images/no-image.png";
        img.setAttribute("data-src",rentals[i].thumbnail);
        img.alt = rentals[i].type;
        figcap.textContent = rentals[i].type;
        fig.appendChild(img);
        fig.appendChild(figcap);
        a.href = "rentaldetails.html?id=" + i;
        a.title = "Details of " + rentals[i].type;
        a.appendChild(fig);
        rentalImages.appendChild(a);
        // imgStr += '<figure><img src="images/no-image.png" ';
        // imgStr += 'data-src="' + rentals[i].thumbnail + '" ';
        // imgStr += 'alt="' + rentals[i].type + '">';
        // imgStr += '<figcaption>' + rentals[i].type + '</figcaption>';
        // imgStr += '</figure>';
  
        htmlStr += '<div class="type"><p>' + rentals[i].type + '</p></div>';
        htmlStr += '<div><p>' + rentals[i].maxPersons + '</p></div>';
        htmlStr += '<div><p>$' + rentals[i].resRates.halfDay + '</p></div>';
        htmlStr += '<div><p>$' + rentals[i].resRates.fullDay + '</p></div>';
        htmlStr += '<div><p>$' + rentals[i].walkinRates.halfDay + '</p></div>';
        htmlStr += '<div><p>$' + rentals[i].walkinRates.fullDay + '</p></div>';
      }
      rentalsArtile.innerHTML = htmlStr;
      //rentalImages.innerHTML = imgStr;
    });
  }
  
  function preloadImage(img){
    const src = img.getAttribute("data-src");
    if (!src){ return;} else{
      img.src = src;
      img.removeAttribute('data-src');
    }
  }
  
  function setupLazyLoadImages(){
    //lazyload images
    const images = document.querySelectorAll("[data-src]");
  
    const imageOptions = {
      threshold: .2,
      rootMargin: "0px 0px 50px 0px"
    };
    const imageObserver = new IntersectionObserver((entries, imageObserver) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting){
          return;
        } else {
          preloadImage(entry.target);
          imageObserver.unobserve(entry.target);
        }
      })
    }, imageOptions);
  
    images.forEach(image => {
      imageObserver.observe(image);
    });
  
  }
  
  
  
  // 
  //       <figure>
  //         <img src="images/no-image.png" data-src="images/no-image.png" alt="no image">
  //         <figcaption>Vehicle Image</figcaption>
  //       </figure>
  //     