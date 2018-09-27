<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <!-- Favicon icon -->
  <link rel="apple-touch-icon" type="image/png" href="<?php echo base_url('assets/images/logo-icon.png'); ?>">
    <link rel="shortcut icon" type="image/png" href="<?php echo base_url('assets/images/logo-icon.png'); ?>">
    <title>WEBGIS - Account Login</title>

    <link href="<?php echo base_url('dist/webgis/style.min.css'); ?>" rel="stylesheet">
    <link href="<?php echo base_url('dist/css/toastr.css'); ?>" rel="stylesheet">
</head>
<body class="skin-default-dark fixed-layout lock-nav">
  <div id="main-wrapper">
    <!-- ============================================================== -->
    <!-- Topbar header - style you can find in pages.scss -->
    <!-- ============================================================== -->
    <header class="topbar">
      <nav class="navbar top-navbar navbar-expand-md navbar-dark">
        <!-- ============================================================== -->
        <!-- Logo -->
        <!-- ============================================================== -->
        <div class="navbar-header">
          <a class="navbar-brand" href="javascript:void()">
            City of San Fernando, Pampanga Barangay Parcels</a>
        </div>
        <!-- ============================================================== -->
        <!-- End Logo -->
        <!-- ============================================================== -->
        <div class="navbar-collapse">
          <!-- ============================================================== -->
          <!-- toggle and nav items -->
          <!-- ============================================================== -->
          <ul class="navbar-nav mr-auto">

          </ul>
          <ul class="navbar-nav my-lg-0 menu">
            <!-- ============================================================== -->
            <!-- User profile and search -->
            <!-- ============================================================== -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="<?php echo base_url('assets/images/users/1.jpg'); ?>" alt="user" class="img-circle" width="30"></a>
              <div class="dropdown-menu dropdown-menu-right user-dd animated flipInY">
                <span class="with-arrow"><span class="bg-primary"></span></span>
                <div class="d-flex no-block align-items-center p-15 bg-primary text-white m-b-10">
                  <div class=""><img src="<?php echo base_url('assets/images/users/1.jpg'); ?>" alt="user" class="img-circle" width="60"></div>
                  <div class="m-l-10">
                    <h4 class="m-b-0">CSFP</h4>
                    <p class=" m-b-0">cityofsanfernando.gov.ph</p>
                  </div>
                </div>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item menu-btn" href="#settings"><i class="ti-settings m-r-5 m-l-5"></i> Account Setting</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="<?php echo base_url('account/logout'); ?>"><i class="fa fa-power-off m-r-5 m-l-5"></i> Logout</a>
                <div class="dropdown-divider"></div>
              </div>
            </li>
            <!-- ============================================================== -->
            <!-- User profile and search -->
            <!-- ============================================================== -->
            <li class="nav-item right-side-toggle"> <a class="nav-link  waves-effect waves-light" href="javascript:void(0)"><i class="ti-settings"></i></a></li>
          </ul>
        </div>
      </nav>
    </header>
<aside class="left-sidebar">
      <div class="d-flex no-block nav-text-box align-items-center">
        <span>WEB GIS</span>
        <a class="nav-lock waves-effect waves-dark ml-auto hidden-md-down" href="javascript:void(0)"><i class="mdi mdi-toggle-switch"></i></a>
        <a class="nav-toggler waves-effect waves-dark ml-auto hidden-sm-up" href="javascript:void(0)"><i class="ti-menu ti-close"></i></a>
      </div>
   
      <!-- Sidebar scroll-->
      <div class="scroll-sidebar">
        <!-- Sidebar navigation-->
        <nav class="sidebar-nav">
          
          <ul id="sidebarnav" class="menu">

            <div class="dropdown-divider"></div>
            <!-- <li><a class="has-arrow waves-effect waves-dark menu-btn" href="<?php // echo base_url('admin'); ?>" aria-expanded="false"><i class="icon-speedometer"></i><span class="hide-menu"> BRGY's PARCELS</span></a></li> -->

            <div class="col-lg-12">
            <label class="control-label">Barangay</label>
            <select id="ftr-brgy" name="ftr-brgy" class="form-control input-sm">
              <option>- CSFP-</option>
              <option value="1">Alasas</option>
              <option value="2">Baliti</option>
              <option value="3">Bulaon</option>
              <option value="4">Calulut</option>
              <option value="5">Dela Paz Norte</option>
              <option value="6">Dela Paz Sur</option>
              <option value="7">Del Carmen</option>
              <option value="8">Del Rosario</option>
              <option value="9">Delpilar</option>
              <option value="10">Dolores</option>

              <option value="11">Juliana</option>
              <option value="12">Lara</option>
              <option value="13">Lourdes</option>
              <option value="14">Maimpis</option>
              <option value="15">Magliman</option>
              <option value="16">Malino</option>
              <option value="17">Malpitic</option>
              <option value="18">Pandaras</option>
              <option value="19">Panipuan</option>
              <option value="20">Pulung Bulo</option>

              <option value="21">Santo Rosario</option>
              <option value="22">Quebiawan</option>
              <option value="23">Saguin</option>
              <option value="24">San Agustin</option>
              <option value="25">San Felipe</option>
              <option value="26">San Isidro</option>
              <option value="27">San Jose</option>
              <option value="28">San Juan</option>
              <option value="29">San Nicolas</option>
              <option value="30">San Pedro Cutud</option>

              <option value="31">Santa Lucia</option>
              <option value="32">Santa Teresita</option>
              <option value="33">Santo Niño</option>
              <option value="34">Sindalan</option>
              <option value="35">Telabastagan</option>
            </select>
            </div>
            <div class="col-lg-12">
            <label class="control-label"> SECTION</label>
            <input type="text" class="form-control" id="txt-section" name="" value="007" placeholder="SECTION">
            </div>
            <div class="col-lg-12">
            <label class="control-label"> PIN</label>
            <input type="text" class="form-control" id="txt-pin" name="" value="31" placeholder="PIN">
          </div>
          <div class="col-lg-12">
            <br/>
            <button type="button" class="btn btn-success col-lg-12" id="btn-search" name="button">SEARCH</button>
          </div>


          </ul>
        </nav>
        <!-- End Sidebar navigation -->
      </div>
      <!-- End Sidebar scroll-->
    </aside>
        <div class="page-wrapper">
      <!-- ============================================================== -->
      <!-- Container fluid  -->
      <!-- ============================================================== -->
      <div class="container-fluid">
  <div class="row"> 
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div class="row">  
          <div class="col-lg-9">
              <div id="gMap" style="height: 100vh;width: 64vw;"></div>
          </div>
          <div class="col-lg-3">
              <div id="details">
                  <label class="control-label"> BEGY:</label>
                  <input type="text" class="form-control" id="brgy">
                  <label class="control-label"> SEC:</label>
                  <input type="text" class="form-control" id="sec">
                  <label class="control-label"> PIN:</label>
                  <input type="text" class="form-control" id="pin">
                   <label class="control-label"> AREA:</label>
                  <input type="text" class="form-control" id="area">
                   <label class="control-label"> CLASS:</label>
                  <input type="text" class="form-control" id="class">
              </div>
          </div>
      </div>
    </div>
</div>
</div>
</div>
</div>


  <script>var base_url = "<?php echo base_url(); ?>";</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBJraAzKbs-bFAjF0DszJTrZGNCCBEfCxI&callback=initMap" async defer></script>

    <script src="<?php echo base_url('assets/node_modules/popper/popper.min.js'); ?>"></script>
    <script src="<?php echo base_url('assets/node_modules/bootstrap/dist/js/bootstrap.min.js'); ?>"></script>
    <script src="<?php echo base_url('dist/js/toastr.js'); ?>"></script>

<script type="text/javascript">
  let _  = function(x) {
  return document.getElementById(x);
}
let coors = [];
let trafficLayer;
let CSFP_Parcels;
let shapes = [];
let res;
let path = [];
let styleControl = _('style-selector-control');
let styleSelector = _('style-selector');
let xhttp = new XMLHttpRequest();
let map;

let Lat;
let Lng ;
let center;
let bounds;
let marker;
let polyline;
let parcelCoordinates;

 function readKML(xml) {
      
    let s_pin;
    let s_sec;
    let ss;
    let s_area;
    let s_class;

    let xmlDoc = xml.responseXML;

    let pin_length = xmlDoc.getElementsByTagName("Placemark").length;
    let pin_search_attrib = xmlDoc.getElementsByTagName("Placemark")[0].getElementsByTagName('SimpleData')[1];

    //console.log("pin_search_attrib",pin_search_attrib);

    let pin_search = _("txt-pin").value;
    let sec_search = _("txt-section").value;
    let s = sec_search + "" + pin_search;

    let pathpath = [];

    function results(i) {
      parcelCoordinates = xmlDoc.getElementsByTagName("Placemark")[i].getElementsByTagName('MultiGeometry')[0].getElementsByTagName("coordinates")[0].textContent;
    }

    for (i = pin_length; i--; ) {
      
    // console.log("pin_search", pin_search + " " + xmlDoc.getElementsByTagName("Placemark")[i].getElementsByTagName('SimpleData[name="PIN"]').textContent);

    s_pin   = xmlDoc.getElementsByTagName("Placemark")[i].getElementsByTagName('SimpleData')[1].textContent;
    s_sec   = xmlDoc.getElementsByTagName("Placemark")[i].getElementsByTagName('SimpleData')[4].textContent;
    s_area  = xmlDoc.getElementsByTagName("Placemark")[i].getElementsByTagName('SimpleData')[2].textContent;
    s_class = xmlDoc.getElementsByTagName("Placemark")[i].getElementsByTagName('SimpleData')[6].textContent;
    ss = s_sec + "" + s_pin;
    parcelCoordinates = xmlDoc.getElementsByTagName("Placemark")[i].getElementsByTagName('MultiGeometry')[0].getElementsByTagName("coordinates")[0].textContent;

    if (s === ss) {
      break;
      }
    }


  document.getElementById('brgy').value = 'ALASAS';
  document.getElementById('pin').value = s_pin;
  document.getElementById('sec').value = s_sec;
  document.getElementById('area').value = s_area;
  document.getElementById('class').value = s_class;


  initMap(parcelCoordinates);
}

function initMap(coors) {


var brgyselected  = document.getElementById('ftr-brgy').value;
          // typeofhazard  = document.getElementById('hazard').value,
          // lengend  = document.getElementById('legend');
      var kmz=null,
          highlights = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/new/cityBound.kmz';
     

      if(brgyselected == '1'){ //Alasas
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/ALA.kmz';
      }else if(brgyselected == '2'){ // Baliti
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/BALITI.kmz';
      }else if(brgyselected == '3'){ // Bulaon
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/BULAON.kmz';
      }else if(brgyselected == '4'){ // Calulut
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/CALU.kmz';//error
      }else if(brgyselected == '5'){// Dela Paz Norte
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/DelaPazNorte.kmz';
      }else if(brgyselected == '6'){// Dela Paz SUr
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/DelaPazSur.kmz';
      }else if(brgyselected == '7'){ //Del Carmen
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/DELCARMEN.kmz';
      }else if(brgyselected == '8'){// Del Rosario
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/DELROSARIO.kmz';
      }else if(brgyselected == '9'){ // Del Pilar
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/DelPilar.kmz';
      }else if(brgyselected == '10'){ //Dolores
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/10.kmz'; //error
      }else if(brgyselected == '11'){ // Juliana
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/Juliana.kmz';
      }else if(brgyselected == '12'){ // Lara
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/LARA.kmz';
      }else if(brgyselected == '13'){ // Lourdes
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/Lourdes.kmz';
      }else if(brgyselected == '14'){ // Maimpis
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/Maimpis.kmz';
      }else if(brgyselected == '15'){ // Magliman
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/Magliman.kmz';
      }else if(brgyselected == '16'){ // Malino
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/MALINO.kmz';
      }else if(brgyselected == '17'){ // Malpitic
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/MALPITIC.kmz';
      }else if(brgyselected == '18'){ // Pandaras
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/PANDARAS.kmz';
      }else if(brgyselected == '19'){ // Panipuan
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/PANIPUAN.kmz';
      }else if(brgyselected == '20'){ // Pulung Bulu
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/PULUNGBULU.kmz';
      }else if(brgyselected == '21'){ // Poblacion
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/POBLACION.kmz';
      }else if(brgyselected == '22'){ // Quebiawan
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/QUEBIAWAN.kmz';
      }else if(brgyselected == '23'){ // Saguin
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/SAGUIN.kmz';
      }else if(brgyselected == '24'){ // San Agustine
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/SANAGUSTIN.kmz';//error
      }else if(brgyselected == '25'){ // San Felipe
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/SANFELIPE.kmz';
      }else if(brgyselected == '26'){ // San Isidro
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/SANISIDRO.kmz';
      }else if(brgyselected == '27'){ // San Jose
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/SANJOSE.kmz';
      }else if(brgyselected == '28'){ // San Juan
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/SANJUAN.kmz';
      }else if(brgyselected == '29'){ // San Nicolas
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/SANNICOLAS.kmz';
      }else if(brgyselected == '30'){ // San Pedro
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/SANPEDRO.kmz';
      }else if(brgyselected == '31'){ // Sta Lucia
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/STALUCIA.kmz';
      }else if(brgyselected == '32'){ // Sta Teresita
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/STATERESITA.kmz';
      }else if(brgyselected == '33'){ // Sto Nino
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/STONINO.kmz';
      }else if(brgyselected == '34'){ // Sindalan
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/SINDALAN.kmz';
      }else if(brgyselected == '35'){ // Telebastagan
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/tb.kmz';//error
      }else{ // brgybound
        kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/new/brgybound.kmz';
        // kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kml/ALA.kml';
      }


  path = [];


    // CSFP_Parcels = new google.maps.KmlLayer('http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/ALA.kmz');
    // alert(kmz);
    CSFP_Parcels = new google.maps.KmlLayer(kmz);
   map = new google.maps.Map( _("gMap"), {
     center: {
       lat: 15.038984,
       lng: 120.680855
     },
     zoom: 14,
     mapTypeControl: false,
   });
     map.setOptions({
     styles: styles["night"]
   });

   // if(coors == undefined){
   //  coors = "";
   // }
   
   // alert(coors);
    res = coors.split(" ");

   

   CSFP_Parcels.setMap(map);

   for(i = 0; i < res.length; i++) {

       let res2 = res[i].split(",");

       Lat = parseFloat(res2[1]);
       Lng = parseFloat(res2[0]);
       path.push(new google.maps.LatLng(Lat, Lng));

   }


bounds = new google.maps.LatLngBounds();
var i;
   for (i = 0; i < path.length; i++) {
      bounds.extend(path[i]);
    }
  

// example marker:
marker = new google.maps.Marker({
    map: map, 
    position: bounds.getCenter()
   
});

 
// map.fitBounds(bounds.getCenter()); 
// map.setCenter(new GLatLng(bounds.getCenter()), 31);

  
   polyline = new google.maps.Polygon({
       path: path,
       fillColor: '#FFFFFF',
       fillOpacity: 1.0,
       strokeColor: "#F00",
       strokeOpacity: 1.0,
       strokeWeight: 2
   });

   polyline.setMap(map);


   shapes.push(polyline);

   // map.setZoom(31);
   map.controls[google.maps.ControlPosition.TOP_LEFT].push(styleControl);
   // map.controls.zoom(31);

  var b = bounds.getCenter();
  setTimeout(function(){ 

    map.setZoom(17);
    map.setCenter(b);

    // var myParser = new geoXML3.parser({
    //   map: map
    // });
    // var kml = myParser.parse('http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/ALA.kmz');

    // google.maps.event.addDomListener(window, 'load', initialize);

  }, 500);






 



   // styleSelector.addEventListener('change', function() {
     // map.setOptions({
     //   styles: styles["night"]
     // });
   // });
 }


// function initialize() {
//   var usa = new google.maps.LatLng(Lat,Lng);
//   // var mapOptions = {
//   //   zoom: 4,
//   //   center: bounds.getCenter(),
//   //   mapTypeId: google.maps.MapTypeId.HYBRID
//   // }
//   // var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

// var myParser = new geoXML3.parser({
//     map: map
//   });
//     var kml = myParser.parse('http://cityofsanfernando.gov.ph/cdrrm/CSFP-BRGY-PARCEL/ALA.kmz');
// }

 _('btn-search').onclick = () => {
  // var kmz = document.getElementById('ftr-brgy').value;

  var kml = null;
  var brgyselected = document.getElementById('ftr-brgy').value;
 if(brgyselected == '1'){ //Alasas
        kml = 'http://cityofsanfernando.gov.ph/cdrrm/kml/ALA.kml';
      }else if(brgyselected == '2'){ // Baliti
        kml = 'http://cityofsanfernando.gov.ph/cdrrm/kml/BALITI.kml';
      }else if(brgyselected == '3'){ // Bulaon
        kml = 'http://cityofsanfernando.gov.ph/cdrrm/kml/BULAON.kml';
      }else if(brgyselected == '4'){ // Calulut
        kml = 'http://cityofsanfernando.gov.ph/cdrrm/kml/CALU.kml';
      }else if(brgyselected == '5'){// Dela Paz Norte
        kml = 'http://cityofsanfernando.gov.ph/cdrrm/kml/DelaPazNorte.kml';
      }else if(brgyselected == '6'){// Dela Paz SUr
        kml = 'http://cityofsanfernando.gov.ph/cdrrm/kml/DelaPazSur.kml';
      }else if(brgyselected == '7'){ //Del Carmen
        kml = 'http://cityofsanfernando.gov.ph/cdrrm/kml/DELCARMEN.kml';
      }else if(brgyselected == '8'){// Del Rosario
        kml = 'http://cityofsanfernando.gov.ph/cdrrm/kml/DELROSARIO.kml';
      }else if(brgyselected == '9'){ // Del Pilar
        kml = 'http://cityofsanfernando.gov.ph/cdrrm/kml/DelPilar.kml';
      }else if(brgyselected == '10'){ //Dolores
        kml = 'http://cityofsanfernando.gov.ph/cdrrm/kml/10.kml'; //error
      }else if(brgyselected == '11'){ // Juliana
        kml = 'http://cityofsanfernando.gov.ph/cdrrm/kml/Juliana.kml';
      }else if(brgyselected == '12'){ // Lara
        kml = 'http://cityofsanfernando.gov.ph/cdrrm/kml/LARA.kml';
      }else if(brgyselected == '13'){ // Lourdes
        kml = 'http://cityofsanfernando.gov.ph/cdrrm/kml/Lourdes.kml';
      }else if(brgyselected == '14'){ // Maimpis
        kml = 'http://cityofsanfernando.gov.ph/cdrrm/kml/Maimpis.kml';
      }else if(brgyselected == '15'){ // Magliman
        kml = 'http://cityofsanfernando.gov.ph/cdrrm/kml/Magliman.kml';
      }else if(brgyselected == '16'){ // Malino
        kml = 'http://cityofsanfernando.gov.ph/cdrrm/kml/MALINO.kml';
      }else if(brgyselected == '17'){ // Malpitic
        kml = 'http://cityofsanfernando.gov.ph/cdrrm/kml/MALPITIC.kml';
      }else if(brgyselected == '18'){ // Pandaras
        kml = 'http://cityofsanfernando.gov.ph/cdrrm/kml/PANDARAS.kml';
      }else if(brgyselected == '19'){ // Panipuan
        kml = 'http://cityofsanfernando.gov.ph/cdrrm/kml/PANIPUAN.kml';
      }else if(brgyselected == '20'){ // Pulung Bulu
        kml = 'http://cityofsanfernando.gov.ph/cdrrm/kml/PULUNGBULU.kml';
      }else if(brgyselected == '21'){ // Poblacion
        kml = 'http://cityofsanfernando.gov.ph/cdrrm/kml/POBLACION.kml';
      }else if(brgyselected == '22'){ // Quebiawan
        kml = 'http://cityofsanfernando.gov.ph/cdrrm/kml/QUEBIAWAN.kml';
      }else if(brgyselected == '23'){ // Saguin
        kml = 'http://cityofsanfernando.gov.ph/cdrrm/kml/SAGUIN.kml';
      }else if(brgyselected == '24'){ // San Agustine
        kml = 'http://cityofsanfernando.gov.ph/cdrrm/kml/SANAGUSTIN.kml';//error
      }else if(brgyselected == '25'){ // San Felipe
        kml = 'http://cityofsanfernando.gov.ph/cdrrm/kml/SANFELIPE.kml';
      }else if(brgyselected == '26'){ // San Isidro
        kml = 'http://cityofsanfernando.gov.ph/cdrrm/kml/SANISIDRO.kml';
      }else if(brgyselected == '27'){ // San Jose
        kml = 'http://cityofsanfernando.gov.ph/cdrrm/kml/SANJOSE.kml';
      }else if(brgyselected == '28'){ // San Juan
        kml = 'http://cityofsanfernando.gov.ph/cdrrm/kml/SANJUAN.kml';
      }else if(brgyselected == '29'){ // San Nicolas
        kml = 'http://cityofsanfernando.gov.ph/cdrrm/kml/SANNICOLAS.kml';
      }else if(brgyselected == '30'){ // San Pedro
        kml = 'http://cityofsanfernando.gov.ph/cdrrm/kml/SANPEDRO.kml';
      }else if(brgyselected == '31'){ // Sta Lucia
        kml = 'http://cityofsanfernando.gov.ph/cdrrm/kml/STALUCIA.kml';
      }else if(brgyselected == '32'){ // Sta Teresita
        kml = 'http://cityofsanfernando.gov.ph/cdrrm/kml/STATERESITA.kml';
      }else if(brgyselected == '33'){ // Sto Nino
        kml = 'http://cityofsanfernando.gov.ph/cdrrm/kml/STONINO.kml';
      }else if(brgyselected == '34'){ // Sindalan
        kml = 'http://cityofsanfernando.gov.ph/cdrrm/kml/SINDALAN.kml';
      }else if(brgyselected == '35'){ // Telebastagan
        kml = 'http://cityofsanfernando.gov.ph/cdrrm/kml/tb.kml';//error
      }else{ // brgybound
        kml = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/new/brgybound.kml';
        // kmz = 'http://cityofsanfernando.gov.ph/cdrrm/kml/ALA.kml';
      }




    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            readKML(this);
        }
    };
    xhttp.open("GET",kml , true);
    xhttp.send();

  };



let styles = {
  default: "night",

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
</script>


</body>
</html>
