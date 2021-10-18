console.log("I work!");


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
var searchResults = document.getElementById("search-result");

// function sBtn() {
//     // console.log("clicked")
//     document.querySelectorAll("search-result").style.transition = "all 2s ease-in-out";
//     document.querySelectorAll("search-result").style.opacity = 1;

//     sBtn.addEventListener('click', sBtn());
//     console.log("search button works")
// }

// sBtn.addEventListener('click', sBtn());


function search(){
    console.log("search works")
}
  
// Health API start

var apiUrl = "https://vast-tor-70335.herokuapp.com/proxy/api/v1?target=" +
 encodeURIComponent("https://www.communitybenefitinsight.org/api/get_hospitals.php?state=PA")

$(function (){

    $.ajax({
        type: 'GET',
        url: apiUrl,
        success: function(data){
            console.log('sucess', data);
        }
    })

});

//refer back to week 6 activity 21 for referance 

console.log(testResponse);

function displayHospitals(){
    
}