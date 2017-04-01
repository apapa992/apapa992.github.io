function initialize(){
  var mapOptions = {
    zoom: 13,
    center: {lat: 40.740914, lng: -73.630816}
  };
  map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var locations = [
    {name: 'T. Papageorgiou CPA', address: '72 E OLD COUNTRY RD, MINEOLA NY 11501', lat: 40.740914, lng: -73.630816},
  ];

  locations.forEach(function(element, index, array){
    var marker, content;

    marker = createMarker(element);
    content = createInfoWindow(element, marker);
  });

  function createMarker(location){
    var coordinates = new google.maps.LatLng(location.lat, location.lng); 

    var marker = new google.maps.Marker({
      position: coordinates,
      map: map,
      title: location.name
    });

    return marker;
  }

  function createInfoWindow(element, marker){
    var contentString;

    contentString = "<div><span>" + element.name + "</span></div><div>" + element.address + "</div>";

    var infoWindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 150
    });

    google.maps.event.addListener(marker, 'click', function(){
      infoWindow.open(map, marker);
    });
  }
}

// google.maps.event.addDomListener(window, 'load', initialize);
window.onload = function() {
  initialize();
}
