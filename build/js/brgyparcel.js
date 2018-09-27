

$(document).on('click', ".menu-btn", function (e) {
	if (e.currentTarget.hash == "#brgyparcel") {
		if(!document.getElementById("map").hasAttribute("style")){
            initMap();
            get_csfp_brgy_population();
		}
	}
});


var getJSON = function(url) {
return new Promise(function(resolve, reject) {
var xhr = new XMLHttpRequest();
xhr.open('get', url, true);
xhr.responseType = 'json';
xhr.onload = function() {
var status = xhr.status;
if (status == 200) {
resolve(xhr.response);
} else {
reject(status);
}
};
xhr.send();
});
};

function get_csfp_brgy_population(){
//   Highcharts.createElement('link', {
//     href: 'https://fonts.googleapis.com/css?family=Unica+One',
//     rel: 'stylesheet',
//     type: 'text/css'
// }, null, document.getElementsByTagName('head')[0]);

Highcharts.theme = {
    colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
        '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
    chart: {
        backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
                [0, '#2a2a2b'],
                [1, '#3e3e40']
            ]
        },
        style: {
            fontFamily: '\'Unica One\', sans-serif'
        },
        plotBorderColor: '#606063'
    },
    title: {
        style: {
            color: '#E0E0E3',
            textTransform: 'uppercase',
            fontSize: '20px'
        }
    },
    subtitle: {
        style: {
            color: '#E0E0E3',
            textTransform: 'uppercase'
        }
    },
    xAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#E0E0E3'
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        title: {
            style: {
                color: '#A0A0A3'

            }
        }
    },
    yAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#E0E0E3'
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        tickWidth: 1,
        title: {
            style: {
                color: '#A0A0A3'
            }
        }
    },
    tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        style: {
            color: '#F0F0F0'
        }
    },
    plotOptions: {
        series: {
            dataLabels: {
                color: '#B0B0B3'
            },
            marker: {
                lineColor: '#333'
            }
        },
        boxplot: {
            fillColor: '#505053'
        },
        candlestick: {
            lineColor: 'white'
        },
        errorbar: {
            color: 'white'
        }
    },
    legend: {
        itemStyle: {
            color: '#E0E0E3'
        },
        itemHoverStyle: {
            color: '#FFF'
        },
        itemHiddenStyle: {
            color: '#606063'
        }
    },
    credits: {
        style: {
            color: '#666'
        }
    },
    labels: {
        style: {
            color: '#707073'
        }
    },

    drilldown: {
        activeAxisLabelStyle: {
            color: '#F0F0F3'
        },
        activeDataLabelStyle: {
            color: '#F0F0F3'
        }
    },

    navigation: {
        buttonOptions: {
            symbolStroke: '#DDDDDD',
            theme: {
                fill: '#505053'
            }
        }
    },

    // scroll charts
    rangeSelector: {
        buttonTheme: {
            fill: '#505053',
            stroke: '#000000',
            style: {
                color: '#CCC'
            },
            states: {
                hover: {
                    fill: '#707073',
                    stroke: '#000000',
                    style: {
                        color: 'white'
                    }
                },
                select: {
                    fill: '#000003',
                    stroke: '#000000',
                    style: {
                        color: 'white'
                    }
                }
            }
        },
        inputBoxBorderColor: '#505053',
        inputStyle: {
            backgroundColor: '#333',
            color: 'silver'
        },
        labelStyle: {
            color: 'silver'
        }
    },

    navigator: {
        handles: {
            backgroundColor: '#666',
            borderColor: '#AAA'
        },
        outlineColor: '#CCC',
        maskFill: 'rgba(255,255,255,0.1)',
        series: {
            color: '#7798BF',
            lineColor: '#A6C7ED'
        },
        xAxis: {
            gridLineColor: '#505053'
        }
    },

    scrollbar: {
        barBackgroundColor: '#808083',
        barBorderColor: '#808083',
        buttonArrowColor: '#CCC',
        buttonBackgroundColor: '#606063',
        buttonBorderColor: '#606063',
        rifleColor: '#FFF',
        trackBackgroundColor: '#404043',
        trackBorderColor: '#404043'
    },

    // special colors for some of the
    legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
    background2: '#505053',
    dataLabelsColor: '#B0B0B3',
    textColor: '#C0C0C0',
    contrastTextColor: '#F0F0F3',
    maskColor: 'rgba(255,255,255,0.3)'
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);




    getJSON(base_url + 'brgyparcel/get_csfppopbybrgy').then(function(data) {
      
            Highcharts.chart('container1', {
    chart: {
        type: 'column',
        height: 250
        // width: 900
    },
    title: {
        text: 'CSFP POPULATION ' +data[0].bp_year
    },
    subtitle: {
        // text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '9px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'FERNANDINOs'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Population in '+data[0].bp_year+': <b>{point.y:0f} </b>'
    },
    series: [{
        name: 'Population',
        data: [
            ['ALASAS', Number(data[0].bp_alasas)],
            ['BALITI', Number(data[0].bp_baliti)],
            ['BULAON', Number(data[0].bp_bulaon)],
            ['CALULUT', Number(data[0].bp_calulut)],
            ['DELA PAZ NORTE', Number(data[0].bp_delapaznorte)],
            ['DELA PAZ SUR', Number(data[0].bp_delapazsur)],
            ['DEL CARMEN', Number(data[0].bp_delcarmen)],
            ['DEL PILAR', Number(data[0].bp_delpilar)],
            ['DEL ROSARIO', Number(data[0].bp_delrosario)],
            ['DOLORES', Number(data[0].bp_dolores)],
            ['JULIANA', Number(data[0].bp_juliana)],
            ['LARA', Number(data[0].bp_lara)],
            ['LOURDES', Number(data[0].bp_lourdes)],
            ['MAGLIMAN', Number(data[0].bp_magliman)],
            ['MAIMPIS', Number(data[0].bp_maimpis)],
            ['MALINO', Number(data[0].bp_malino)],
            ['MALPITIC', Number(data[0].bp_malpitic)],
            ['PANDARAS', Number(data[0].bp_pandaras)],
            ['PANIPUAN', Number(data[0].bp_panipuan)],
            ['PULUNG BULU', Number(data[0].bp_pulungbulu)],
            ['QUEBIAWAN', Number(data[0].bp_quebiawan)],
            ['SAGUIN', Number(data[0].bp_saguin)],
            ['SAN AGUSTIN', Number(data[0].bp_sanagustin)],
            ['SAN FELIPE', Number(data[0].bp_sanfelipe)],
            ['SAN ISIDRO', Number(data[0].bp_sanisidro)],
            ['SAN JOSE', Number(data[0].bp_sanjose)],
            ['SAN JAUN', Number(data[0].bp_sanjuan)],
            ['SAN NICOLAS', Number(data[0].bp_sannicolas)],
            ['SAN PEDRO', Number(data[0].bp_sanpedro)],
            ['STA LUCIA', Number(data[0].bp_stalucia)],
            ['STA TERESITA', Number(data[0].bp_stateresita)],
            ['STO NIÑO', Number(data[0].bp_stonino)],
            ['STO ROSARIO', Number(data[0].bp_storosario)],
            ['SINDALAN', Number(data[0].bp_sindalan)],
            ['TELEBASTAGAN', Number(data[0].bp_telabastagan)]
        ],
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:0f}', // one decimal
            y: 2, // 10 pixels down from the top
            style: {
                fontSize: '9px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});
     }
   , function(status) {
     alert('Something went wrong.');
   });



// Highcharts.chart('container1', {
//     chart: {
//         type: 'column'
//     },
//     title: {
//         text: 'World\'s largest cities per 2017'
//     },
//     subtitle: {
//         text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
//     },
//     xAxis: {
//         type: 'category',
//         labels: {
//             rotation: -45,
//             style: {
//                 fontSize: '13px',
//                 fontFamily: 'Verdana, sans-serif'
//             }
//         }
//     },
//     yAxis: {
//         min: 0,
//         title: {
//             text: 'Population (millions)'
//         }
//     },
//     legend: {
//         enabled: false
//     },
//     tooltip: {
//         pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
//     },
//     series: [{
//         name: 'Population',
//         data: [
//             ['Shanghai', 24.2],
//             ['Beijing', 20.8],
//             ['Karachi', 14.9],
//             ['Shenzhen', 13.7],
//             ['Guangzhou', 13.1],
//             ['Istanbul', 12.7],
//             ['Mumbai', 12.4],
//             ['Moscow', 12.2],
//             ['São Paulo', 12.0],
//             ['Delhi', 11.7],
//             ['Kinshasa', 11.5],
//             ['Tianjin', 11.2],
//             ['Lahore', 11.1],
//             ['Jakarta', 10.6],
//             ['Dongguan', 10.6],
//             ['Lagos', 10.6],
//             ['Bengaluru', 10.3],
//             ['Seoul', 9.8],
//             ['Foshan', 9.3],
//             ['Tokyo', 9.3]
//         ],
//         dataLabels: {
//             enabled: true,
//             rotation: -90,
//             color: '#FFFFFF',
//             align: 'right',
//             format: '{point.y:.1f}', // one decimal
//             y: 10, // 10 pixels down from the top
//             style: {
//                 fontSize: '13px',
//                 fontFamily: 'Verdana, sans-serif'
//             }
//         }
//     }]
// });
}

function getPopulation(){



$(function () { 

  // getJSON(base_url + 'brgyparcel/get_percentpopbybrgy?idNo=' + idNo.value).then(function(data) {



        Highcharts.theme = {
    colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
        '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
    chart: {
        backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
                [0, '#2a2a2b'],
                [1, '#3e3e40']
            ]
        },
        style: {
            fontFamily: '\'Unica One\', sans-serif'
        },
        plotBorderColor: '#606063'
    },
    title: {
        style: {
            color: '#E0E0E3',
            textTransform: 'uppercase',
            fontSize: '20px'
        }
    },
    subtitle: {
        style: {
            color: '#E0E0E3',
            textTransform: 'uppercase'
        }
    },
    xAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#E0E0E3'
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        title: {
            style: {
                color: '#A0A0A3'

            }
        }
    },
    yAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#E0E0E3'
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        tickWidth: 1,
        title: {
            style: {
                color: '#A0A0A3'
            }
        }
    },
    tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        style: {
            color: '#F0F0F0'
        }
    },
    plotOptions: {
        series: {
            dataLabels: {
                color: '#B0B0B3'
            },
            marker: {
                lineColor: '#333'
            }
        },
        boxplot: {
            fillColor: '#505053'
        },
        candlestick: {
            lineColor: 'white'
        },
        errorbar: {
            color: 'white'
        }
    },
    legend: {
        itemStyle: {
            color: '#E0E0E3'
        },
        itemHoverStyle: {
            color: '#FFF'
        },
        itemHiddenStyle: {
            color: '#606063'
        }
    },
    credits: {
        style: {
            color: '#666'
        }
    },
    labels: {
        style: {
            color: '#707073'
        }
    },

    drilldown: {
        activeAxisLabelStyle: {
            color: '#F0F0F3'
        },
        activeDataLabelStyle: {
            color: '#F0F0F3'
        }
    },

    navigation: {
        buttonOptions: {
            symbolStroke: '#DDDDDD',
            theme: {
                fill: '#505053'
            }
        }
    },

    // scroll charts
    rangeSelector: {
        buttonTheme: {
            fill: '#505053',
            stroke: '#000000',
            style: {
                color: '#CCC'
            },
            states: {
                hover: {
                    fill: '#707073',
                    stroke: '#000000',
                    style: {
                        color: 'white'
                    }
                },
                select: {
                    fill: '#000003',
                    stroke: '#000000',
                    style: {
                        color: 'white'
                    }
                }
            }
        },
        inputBoxBorderColor: '#505053',
        inputStyle: {
            backgroundColor: '#333',
            color: 'silver'
        },
        labelStyle: {
            color: 'silver'
        }
    },

    navigator: {
        handles: {
            backgroundColor: '#666',
            borderColor: '#AAA'
        },
        outlineColor: '#CCC',
        maskFill: 'rgba(255,255,255,0.1)',
        series: {
            color: '#7798BF',
            lineColor: '#A6C7ED'
        },
        xAxis: {
            gridLineColor: '#505053'
        }
    },

    scrollbar: {
        barBackgroundColor: '#808083',
        barBorderColor: '#808083',
        buttonArrowColor: '#CCC',
        buttonBackgroundColor: '#606063',
        buttonBorderColor: '#606063',
        rifleColor: '#FFF',
        trackBackgroundColor: '#404043',
        trackBorderColor: '#404043'
    },

    // special colors for some of the
    legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
    background2: '#505053',
    dataLabelsColor: '#B0B0B3',
    textColor: '#C0C0C0',
    contrastTextColor: '#F0F0F3',
    maskColor: 'rgba(255,255,255,0.3)'
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);

var brgySelect = document.getElementById("brgy");
var brgyText = brgySelect.options[brgySelect.selectedIndex].text;

var brgy = null;

if(brgyText == '- CSFP PARCEL-'){ 
    brgy =  'CSFP';
 }else{
    brgy =  brgyText;
 }

    getJSON(base_url + 'brgyparcel/get_brgypopulationpercentage?brgy='+brgyText).then(function(data) {
      
            var myChart = Highcharts.chart('container', {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false,
                        type: 'pie',
                        width: 300
                    },
                    title: {
                        // text: data[0].gb_brgy + ' male/female'
                        text: brgy + ' male/female'
                    },
                     tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                      plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                cursor: 'pointer ',
                                dataLabels: {
                                    enabled: true,
                                    format: '{point.percentage:.1f} %',
                                    style: {
                                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                                    }
                                },
                                showInLegend: true
                            }
                        },
                       series: [{
                                name: 'Population',
                                colorByPoint: true,
                                data: [
                                {
                                    name: 'MALE',
                                    y: Number(data[0].gb_male),
                                },  {
                                    name: 'FEMALE',
                                    y: Number(data[0].gb_female),

                                 }
                                ]
                            }]
                });
     }
   , function(status) {
     alert('Something went wrong.');
   });

});

}


var map;

    function initMap() {

      getPopulation();

      map = new google.maps.Map(document.getElementById('map'), {
        center: {
          lat: 15.038984,
          lng: 120.680855
        },
        zoom: 11,
        mapTypeControl: true,
      });

    //   var trafficLayer = new google.maps.TrafficLayer();
      var brgyselected  = document.getElementById('brgy').value,
          typeofhazard  = document.getElementById('hazard').value,
          lengend  = document.getElementById('legend');
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
      }
      
      if(typeofhazard == 'flood'){
        highlights = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/new/flood.kmz';
        lengend.src = 'http://cityofsanfernando.gov.ph/cdrrm/build/images/flood.png';
      }else if(typeofhazard == 'liquefaction'){
        highlights = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/CSFP_LiquefactionMap.kmz';
        lengend.src = 'http://cityofsanfernando.gov.ph/cdrrm/build/images/liquefaction.png';
      }else{
        lengend.src = 'http://cityofsanfernando.gov.ph/cdrrm/build/images/csfp.png';
        highlights = 'http://cityofsanfernando.gov.ph/cdrrm/kmz/new/cityBound.kmz';
      }




      hazard = new google.maps.KmlLayer(highlights);
      brgykmz = new google.maps.KmlLayer(kmz);
      
      hazard.setMap(map);
      brgykmz.setMap(map);

// PAR
      // var shapes = [];
      // var path = [
      //   new google.maps.LatLng(25.000000, 120.000000),
      //   new google.maps.LatLng(25.000000, 135.000000),
      //   new google.maps.LatLng(5.000000, 135.000000),
      //   new google.maps.LatLng(5.000000, 115.000000),
      //   new google.maps.LatLng(15.000000, 115.000000),
      //   new google.maps.LatLng(21.000000, 120.000000)
      // ];
      // var polyline = new google.maps.Polygon({
      //   path: path,
      //   strokeColor: "#4aed04",
      //   strokeOpacity: 1.0,
      //   strokeWeight: 1,
      //   fillColor: 'transparent',
      // });
      // polyline.setMap(map);
      // shapes.push(polyline);




      // var weatherLayer = new google.maps.weather.WeatherLayer({
      //   temperatureUnits: google.maps.weather.TemperatureUnit.FAHRENHEIT
      // });
      
      // weatherLayer.setMap(map);

      // var cloudLayer = new google.maps.weather.CloudLayer();
      // cloudLayer.setMap(map);

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
