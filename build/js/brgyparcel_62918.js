

$(document).on('click', ".menu-btn", function (e) {
	if (e.currentTarget.hash == "#brgyparcel") {
		if(!document.getElementById("map").hasAttribute("style")){
            initMap();
		}
	}
});

var map;

    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {
          lat: 15.038984,
          lng: 120.680855
        },
        zoom: 16,
        mapTypeControl: false,
      });

    //   var trafficLayer = new google.maps.TrafficLayer();
      var brgyselected  = document.getElementById('brgy').value,
          typeofhazard  = document.getElementById('hazard').value;
      var kmz=null,
          highlights = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/CityBound.kmz';
     

      if(brgyselected == '1'){
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/02Alasas.kmz';
      }else if(brgyselected == '2'){
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/03Baliti.kmz';
      }else if(brgyselected == '3'){
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/04Bulaon.kmz';
      }else if(brgyselected == '4'){
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/05Calulut.kmz';//error
      }else if(brgyselected == '5'){
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/06DelaPazNorte.kmz';
      }else if(brgyselected == '6'){
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/07DelaPazSur.kmz';
      }else if(brgyselected == '7'){
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/08DelCarmen.kmz';
      }else if(brgyselected == '8'){
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/10DelRosario.kmz';
      }else if(brgyselected == '9'){
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/09DelPilar.kmz';
      }else if(brgyselected == '10'){
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/09DelPilar.kmz'; //error
      }else if(brgyselected == '11'){
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/12Juliana.kmz';
      }else if(brgyselected == '12'){
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/13Lara.kmz';
      }else if(brgyselected == '13'){
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/14Lourdes.kmz';
      }else if(brgyselected == '14'){
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/016Maimpis.kmz';//error
      }else if(brgyselected == '15'){
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/15Magliman.kmz';
      }else if(brgyselected == '16'){
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/17Malino.kmz';
      }else if(brgyselected == '17'){
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/18Malpitic.kmz';
      }else if(brgyselected == '18'){
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/19Pandaras.kmz';
      }else if(brgyselected == '19'){
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/20Panipuan.kmz';
      }else if(brgyselected == '20'){
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/21PulungBulu.kmz';
      }else if(brgyselected == '21'){
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/01Poblacion.kmz';
      }else if(brgyselected == '22'){
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/22Quebiawan.kmz';
      }else if(brgyselected == '23'){
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/23Saguin.kmz';
      }else if(brgyselected == '24'){
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/24SanAgustin.kmz';//error
      }else if(brgyselected == '25'){
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/25SanFelipe.kmz';
      }else if(brgyselected == '26'){
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/26SanIsidro.kmz';
      }else if(brgyselected == '27'){
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/27SanJose.kmz';
      }else if(brgyselected == '28'){
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/28SanJuan.kmz';
      }else if(brgyselected == '29'){
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/29SanNicolas.kmz';
      }else if(brgyselected == '30'){
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/30SanPedro.kmz';
      }else if(brgyselected == '31'){
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/31StaLucia.kmz';
      }else if(brgyselected == '32'){
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/32StaTeresita.kmz';
      }else if(brgyselected == '33'){
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/33StoNino.kmz';//error
      }else if(brgyselected == '34'){
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/34Sindalan.kmz';//error
      }else if(brgyselected == '35'){
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/35Telabastagan.kmz';//error
      }else{
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/CSFP_BrgyBounderies.kmz';
      }


      //  flood = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/floodMaps.kmz';
      
      if(typeofhazard == 'flood'){
        highlights = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/floodMaps.kmz';
      }else{
        highlights = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/CityBound.kmz';
      }

      hazard = new google.maps.KmlLayer(highlights);
      brgykmz = new google.maps.KmlLayer(kmz);
      // csfpflood = new google.maps.KmlLayer(flood);
      

      // trafficLayer.setMap(map);
      hazard.setMap(map);
      brgykmz.setMap(map);
      // csfpflood.setMap(map);

      var weatherLayer = new google.maps.weather.WeatherLayer({
        temperatureUnits: google.maps.weather.TemperatureUnit.FAHRENHEIT
      });
      weatherLayer.setMap(map);

      var cloudLayer = new google.maps.weather.CloudLayer();
      cloudLayer.setMap(map);

      //polyline


      // Add a style-selector control to the map.
      var styleControl = document.getElementById('style-selector-control');
      map.controls[google.maps.ControlPosition.TOP_LEFT].push(styleControl);

        map.setOptions({
          styles: styles["night"]
        });
      // });
    }

    var styles = {
      default: null,
      silver: [{
          elementType: 'geometry',
          stylers: [{
            color: '#f5f5f5'
          }]
        },
        {
          elementType: 'labels.icon',
          stylers: [{
            visibility: 'off'
          }]
        },
        {
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#616161'
          }]
        },
        {
          elementType: 'labels.text.stroke',
          stylers: [{
            color: '#f5f5f5'
          }]
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#bdbdbd'
          }]
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [{
            color: '#eeeeee'
          }]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#757575'
          }]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{
            color: '#e5e5e5'
          }]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#9e9e9e'
          }]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{
            color: '#ffffff'
          }]
        },
        {
          featureType: 'road.arterial',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#757575'
          }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{
            color: '#dadada'
          }]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#616161'
          }]
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#9e9e9e'
          }]
        },
        {
          featureType: 'transit.line',
          elementType: 'geometry',
          stylers: [{
            color: '#e5e5e5'
          }]
        },
        {
          featureType: 'transit.station',
          elementType: 'geometry',
          stylers: [{
            color: '#eeeeee'
          }]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{
            color: '#c9c9c9'
          }]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#9e9e9e'
          }]
        }
      ],

      night: [{
          elementType: 'geometry',
          stylers: [{
            color: '#242f3e'
          }]
        },
        {
          elementType: 'labels.text.stroke',
          stylers: [{
            color: '#242f3e'
          }]
        },
        {
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#746855'
          }]
        },
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#d59563'
          }]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#d59563'
          }]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{
            color: '#263c3f'
          }]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#6b9a76'
          }]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{
            color: '#38414e'
          }]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{
            color: '#212a37'
          }]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#9ca5b3'
          }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{
            color: '#746855'
          }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{
            color: '#1f2835'
          }]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#f3d19c'
          }]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{
            color: '#2f3948'
          }]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#d59563'
          }]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{
            color: '#17263c'
          }]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#515c6d'
          }]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{
            color: '#17263c'
          }]
        }
      ],

      retro: [{
          elementType: 'geometry',
          stylers: [{
            color: '#ebe3cd'
          }]
        },
        {
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#523735'
          }]
        },
        {
          elementType: 'labels.text.stroke',
          stylers: [{
            color: '#f5f1e6'
          }]
        },
        {
          featureType: 'administrative',
          elementType: 'geometry.stroke',
          stylers: [{
            color: '#c9b2a6'
          }]
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'geometry.stroke',
          stylers: [{
            color: '#dcd2be'
          }]
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#ae9e90'
          }]
        },
        {
          featureType: 'landscape.natural',
          elementType: 'geometry',
          stylers: [{
            color: '#dfd2ae'
          }]
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [{
            color: '#dfd2ae'
          }]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#93817c'
          }]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry.fill',
          stylers: [{
            color: '#a5b076'
          }]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#447530'
          }]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{
            color: '#f5f1e6'
          }]
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry',
          stylers: [{
            color: '#fdfcf8'
          }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{
            color: '#f8c967'
          }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{
            color: '#e9bc62'
          }]
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry',
          stylers: [{
            color: '#e98d58'
          }]
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry.stroke',
          stylers: [{
            color: '#db8555'
          }]
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#806b63'
          }]
        },
        {
          featureType: 'transit.line',
          elementType: 'geometry',
          stylers: [{
            color: '#dfd2ae'
          }]
        },
        {
          featureType: 'transit.line',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#8f7d77'
          }]
        },
        {
          featureType: 'transit.line',
          elementType: 'labels.text.stroke',
          stylers: [{
            color: '#ebe3cd'
          }]
        },
        {
          featureType: 'transit.station',
          elementType: 'geometry',
          stylers: [{
            color: '#dfd2ae'
          }]
        },
        {
          featureType: 'water',
          elementType: 'geometry.fill',
          stylers: [{
            color: '#b9d3c2'
          }]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#92998d'
          }]
        }
      ],

      hiding: [{
          featureType: 'poi.business',
          stylers: [{
            visibility: 'off'
          }]
        },
        {
          featureType: 'transit',
          elementType: 'labels.icon',
          stylers: [{
            visibility: 'off'
          }]
        }
      ]
    };

    $(document).ready(function() {
      $(".weather-content").removeClass('hidden');
    });
