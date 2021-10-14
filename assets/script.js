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