console.log("I work!");

// map api

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXN0aWFuYW50aSIsImEiOiJja3VxNmhlc2Eyd2lrMnVvZjAyMDRtemVqIn0.Ml5z5JIn9PNbYQqRnQOcFQ';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position) {
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([37.6173, 55.755826])
}

// dislpays the api

function setupMap(center) {
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 13
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'bottom-left');

    var directions = new MapboxDirections({
        accessToken: 'pk.eyJ1IjoiY2hyaXN0aWFuYW50aSIsImEiOiJja3VxNmhlc2Eyd2lrMnVvZjAyMDRtemVqIn0.Ml5z5JIn9PNbYQqRnQOcFQ',
    });

    map.addControl(directions, 'top-left');
}

// var map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/mapbox/streets-v11'
// });


var sBtn = document.getElementById("searchBtn");
var searchResults = document.getElementById("search-result")



$("#searchBtn").click(function () {
    event.preventDefault();
    searchResults.style.display = "all";
    console.log("search button works")
 });


  

 // Health API start
 // the function returns the 5 hospitals that show on the page and shows their street address, city, and zip

var apiUrl = "https://vast-tor-70335.herokuapp.com/proxy/api/v1?target=" +
 encodeURIComponent("https://www.communitybenefitinsight.org/api/get_hospitals.php?state")

$(function(){

    $.ajax({
        type: 'GET',
        url: apiUrl,
        success: function(data){
            var hospitals =  JSON.parse(data);
            for (let index = 0; index < 5  ; index++) {
                let name  = hospitals[index].name;
                let street = hospitals[index].street_address;
                let city = hospitals[index].city;
                let zip = hospitals[index].zip_code;
                console.log(city)
                console.log(zip)
                console.log(street)
                console.log(name)
                var searchResultEl = document.createElement('li');
                searchResultEl.textContent = name + " - " + street + ",  " + city + ",  " + zip;
                
                searchResults.append(searchResultEl)
        
            }
        }
    })

});


// this was to attempt to pull data from the api array based on what was searched but cant get it to work.

const searchBar = document.getElementById('search-bar');
console.log(searchBar)

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value;
    console.log(e.target.value)

    // const filteredCities = searchResultEl.filter(() => {
    //     return (
    //         searchResultEl.toLowerCase().includes(searchString)
    //     );
    // });
    // console.log(filteredCities)
    // displayCharacters(filteredCities);
});





// apend child to add in the search results 



//refer back to week 6 activity 21 for referance 
