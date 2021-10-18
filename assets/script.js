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
var searchResults = document.getElementById("search-result")

// function sBtn() {
//     // console.log("clicked")
//     document.querySelectorAll("search-result").style.transition = "all 2s ease-in-out";
//     document.querySelectorAll("search-result").style.opacity = 1;

//     sBtn.addEventListener('click', sBtn());
//     console.log("search button works")
// }

// sBtn.addEventListener('click', sBtn());

searchResults.style.display = "none";
sBtn.addEventListener("click", search());

function search(){
    searchResults.style.display = "block";
    console.log("search works")
};

// // for github and linkedin on About page

// // Christian

// // github
// document.getElementById("Christian-github").addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
// }
// // linkedin
// document.getElementById("Christian-linkedin").addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
// }

// // Mallory

// // github
// document.getElementById("Mallory-github").addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
// }
// // linkedin
// document.getElementById("Mallory-linkedin").addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
// }

// // Sam

// // github
// document.getElementById("Sam-github").addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
// }
// // linkedin
// document.getElementById("Sam-linkedin").addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
// }

// // Russ

// // github
// document.getElementById("Russ-github").addEventListener("click", russGithub());

// function russGithub() {
//     window.open("https://github.com/rmccallie");
// }
// // linkedin
// document.getElementById("Russ-linkedin").addEventListener("click", myFunction);

// function myFunction() {
//     window.open(url);

    

