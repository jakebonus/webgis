var shapes = [];
      var path = [
        new google.maps.LatLng(25.000000, 120.000000),
        new google.maps.LatLng(25.000000, 135.000000),
        new google.maps.LatLng(5.000000, 135.000000),
        new google.maps.LatLng(5.000000, 115.000000),
        new google.maps.LatLng(15.000000, 115.000000),
        new google.maps.LatLng(21.000000, 120.000000)
      ];
      var polyline = new google.maps.Polygon({
        path: path,
        strokeColor: "#FFFFFF",
        strokeOpacity: 1.0,
        strokeWeight: 1
      });
      polyline.setMap(map);
      // map.setCenter(new google.maps.LatLng(15.127540020982048, 120.61295678195461), 15);
      shapes.push(polyline);