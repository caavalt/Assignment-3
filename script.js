require([
  "esri/WebScene",
  "esri/views/SceneView",
  "esri/Camera",
  "esri/widgets/Home",
  "dojo/domReady!"
], function(WebScene, SceneView, Camera, Home) {
  var scene = new WebScene({
    portalItem: {
      id: "8046207c1c214b5587230f5e5f8efc77" // New web scene ID for Boston
    }
  });

  var camera = new Camera({
    position: [
      -71.060217, // Longitude
      42.382655,  // Latitude
      2500        // Elevation in meters
    ]
  });

  var camera2 = new Camera({
    position: [
      -71.0589, // Longitude
      42.3601,  // Latitude
      500       // Elevation in meters
    ]
  });

  var camera3 = new Camera({
    position: {
      x: -70.9500, // Longitude (Atlantic Ocean)
      y: 42.3601,  // Latitude (downtown Boston)
      z: 5000      // Elevation in meters
    }
  });

  var view = new SceneView({
    container: "viewDiv",
    map: scene,
    camera: camera
  });

  var homeBtn = new Home({
    view: view
  });

  view.ui.add(homeBtn, "top-left");

  var downtown = document.getElementById('downtown');

  [downtown].forEach(function(button) {
    button.style.display = 'flex';
    view.ui.add(button, 'top-right');
  });
  downtown.addEventListener('click', function() {
    view.goTo({
      target: camera3
    });
  });
});

