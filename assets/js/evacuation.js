$(document).on('click', ".menu-btn", function (e) {
	if (e.currentTarget.hash == "#evacuationmap") {
		if(!document.getElementById("evacmap").hasAttribute("style")){
			initevacuation();
		}
	}
});


    var map2,
        marker = [],
        infowindow = null;

    function initevacuation() {
      map2 = new google.maps.Map(document.getElementById('evacmap'), {
        center: {
          lat: 15.038984,
          lng: 120.680855
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 16,
        styles: styles['night']
      });

      infowindow = new google.maps.InfoWindow();

      // var trafficLayer = new google.maps.TrafficLayer();
      // trafficLayer.setMap(map);

      var CSFP_Parcels = new google.maps.KmlLayer('http://cityofsanfernando.gov.ph/cdrrm/kmz/CityBound.kmz');
      CSFP_Parcels.setMap(map2);

      var weatherLayer = new google.maps.weather.WeatherLayer({
        temperatureUnits: google.maps.weather.TemperatureUnit.FAHRENHEIT
      });
      weatherLayer.setMap(map2);

      var cloudLayer = new google.maps.weather.CloudLayer();
      cloudLayer.setMap(map2);

      // map.set('styles', mapStyle);
      var json = (function() {
          var json = null;
          $.ajax({
              'async': false,
              'global': false,
              'url': "evacuationmap.json?v1.0.0",
              'dataType': "json",
              'success': function(data) {
                  json = data;

                  var i, html = "";
                  for (i = 0; i < data.length; i++) {
                    // html += '<div class="btn-mapcenter" data-lat="' +data[i].e_lat+ '" data-lng="' +data[i].e_lng+ '" data-id="'+ i +'">'+ data[i].e_title +'</div>';
					
					// html += '<div class="card btn-mapcenter" data-lat="' +data[i].e_lat+ '" data-lng="' +data[i].e_lng+ '" data-id="'+ i +'">' +
                            // '<div class="d-flex flex-row">' +
                                // '<div class="p-10 bg-info">' +
                                // '<h3 class="text-white box m-b-0">'+ ((i) + 1) +'</h3></div>' +
                                // '<div class="align-self-center m-l-20">' +
                                // '<h3 class="m-b-0 text-info">'+ data[i].e_title +'</h3>' +
                                // '<h5 class="text-muted m-b-0">'+ data[i].e_address +'</h5></div>' +
                           // ' </div>' +
                        // '</div>';
						
					html += '<li class="btn-mapcenter" data-lat="' +data[i].e_lat+ '" data-lng="' +data[i].e_lng+ '" data-id="'+ i +'">' +
                                '<div class="bg-info"><i class="fa">'+ ((i) + 1) +'</i></div> '+ data[i].e_title +
								// '<span class="text-muted">Just Now</span>' +
							'</li>';

                  }
                  document.getElementById("brgy-list").innerHTML = html;

              },
              error: function (error) {
                  // var retrievedData = localStorage.getItem("json");
                  // json = JSON.parse(retrievedData);
              }
          });
          return json;
      })();

      for (var i = 0, length = json.length; i < length; i++) {
          var data = json[i],
          latLng = new google.maps.LatLng(data.e_lat, data.e_lng);
          marker[i] = new google.maps.Marker({
              position: latLng,
              map: map2,
              title: data.e_title,
              // label: {
              //     color: 'white',
              //     // fontWeight: 'bold',
              //     fontSize: '9px',
              //     text: 'Click Me!',
              //   },
                icon: {
                  labelOrigin: new google.maps.Point(16, -5),
                  // url: 'img/map-marker.png',
                  url: data.e_iconno,
                  size: new google.maps.Size(32, 32),
                  origin: new google.maps.Point(0, 0),
                  anchor: new google.maps.Point(11, 40),
                }
              // label: 'Click me!'
              // icon: place_icon(data.e_icon)
          });

          if (data.e_lat != "" || data.e_lng != "") {
              infoBox(map2, marker[i], data);
          }
      }

      function infoBox(map2, marker, data) {
          // var infoWindow = new google.maps.InfoWindow();
          google.maps.event.addListener(marker, "click", function(e) {
              infowindow.close();
              infowindow.setContent(data.e_address);
              infowindow.open(map2, marker);
          });

          (function(marker, data) {
              var loc =data.e_lat+','+data.e_lng;

              var tit =data.e_title;
              // data.e_title.replace(" ", "-");
              // alert(data.e_title.replace(/ /gi, "-"));

              google.maps.event.addListener(marker, "click", function(e) {
                  infowindow.setContent("<div class='info_box'> " +
                      "<img src='" + data.e_photo + "'/>" +
                      "<h3 class='title'>" + data.e_title + "</h3><p>" +
                      data.e_address + '</p><div class="dir">');
                    // '<a href="direction.html?loc='+loc+'&locname='+tit+'" class="button">Directions</a></div>'
                  // );
                  infowindow.open(map2, marker);
              });
          })(marker, data);
      }



    }


    //smooth zoom
    $(document).on( "click", ".btn-mapcenter", function() {
        var _t = $(this),
            lat = _t.data('lat'),
            lng = _t.data('lng'),
            _m = _t.data('id');

        panTo(lat, lng);

        setTimeout(function(){ google.maps.event.trigger(marker[_m], 'click'); }, 1000);
    });

    var panPath = [],
        panQueue = [],
        STEPS = 100;

    function panTo(newLat, newLng) {
      if (panPath.length > 0) {
        panQueue.push([newLat, newLng]);
    } else {
        panPath.push("LAZY SYNCRONIZED LOCK");
        var curLat = map2.getCenter().lat(),
            curLng = map2.getCenter().lng(),
            dLat = (newLat - curLat)/STEPS,
            dLng = (newLng - curLng)/STEPS,
            i;

        for (i=0; i < STEPS; i++) {
          panPath.push([curLat + dLat * i, curLng + dLng * i]);
      }
      panPath.push([newLat, newLng]);
      panPath.shift();
      setTimeout(doPan, 1);
  }
}

function doPan() {
  var next = panPath.shift();
  if (next != null) {
    map2.panTo( new google.maps.LatLng(next[0], next[1]));
    setTimeout(doPan, 1);
} else {
    var queued = panQueue.shift();
    if (queued != null) {
      panTo(queued[0], queued[1]);
  } else {
      map2.setZoom(15);
  }
}
}
//end smooth zoom