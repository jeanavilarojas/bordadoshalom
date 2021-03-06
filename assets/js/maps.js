// Google Maps
var google;

function init() {
    var myLatlng = new google.maps.LatLng(10.091940532665019, -84.25460577518473);
    var mapOptions = {
        zoom: 10,
        center: myLatlng,
        scrollwheel: false,
        styles: [{
            "featureType": "administrative.country",
            "elementType": "geometry",
            "stylers": [{
                    "visibility": "simplified"
                },
                {
                    "hue": "#ff0000"
                }
            ]
        }]
    };

    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var addresses = ['Bordados Shalom'];

    for (var x = 0; x < addresses.length; x++) {
        $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address=' + addresses[x] + '&sensor=false', null, function (data) {
            var p = data.results[0].geometry.location
            var latlng = new google.maps.LatLng(p.lat, p.lng);
            new google.maps.Marker({
                position: latlng,
                map: map,
            });
        });
    }
}
google.maps.event.addDomListener(window, 'load', init);