function google_map_initialize() {
    // Change the latitude and longitude
    var myLatlng = new google.maps.LatLng(43.037645, -76.132697);
    var mapOptions = {
        zoom: 17,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

     //=====Initialise Default Marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'marker'
     //=====You can even customize the icons here
    });

     //=====Initialise InfoWindow
    var infowindow = new google.maps.InfoWindow({
      content: "<B>Skyway Dr</B>"
  });

   //=====Eventlistener for InfoWindow
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}

google.maps.event.addDomListener(window, 'load', google_map_initialize);
