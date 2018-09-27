

// Tooltip
$(document).ready(function() {



  //FORM OBJECT
  // $.fn.serializeObject = function() {
  //   var o = {};
  //   var a = this.serializeArray();
  //   $.each(a, function() {
  //     if (o[this.name]) {
  //       if (!o[this.name].push) {
  //         o[this.name] = [o[this.name]];
  //       }
  //       o[this.name].push(this.value || '');
  //     } else {
  //       o[this.name] = this.value || '';
  //     }
  //   });
  //   return o;
  // };


// function postAjax(url, data, success) {
//   var params = typeof data == 'string' ? data : Object.keys(data).map(
//     function(k) {
//       return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
//     }
//   ).join('&');

//   var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
//   xhr.open('POST', url);
//   xhr.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       success(JSON.parse(xhr.responseText));
      
//     }
//   };
//   xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
//   xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//   xhr.send(params);
//   return xhr;
// }

// function getAjax(url, success) {
//   var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
//   xhr.open('GET', url);
//   xhr.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       success(xhr.responseText);
//     }
//   };
//   xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
//   xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//   xhr.send();
//   return xhr;
// }

// var isDate_ = function(input) {
//   var status = false;
//   if (!input || input.length <= 0) {
//     status = false;
//   } else {
//     var result = new Date(input);
//     if (result == 'Invalid Date') {
//       status = false;
//     } else {
//       status = true;
//     }
//   }
//   return status;
// }

// function getAge(fromdate, todate){
//   if(isDate_(fromdate)) {
//     if(todate) todate= new Date(todate);
//     else todate= new Date();

//     var aa, age= [], fromdate= new Date(fromdate),
//     y= [todate.getFullYear(), fromdate.getFullYear()],
//     ydiff= y[0]-y[1],
//     m= [todate.getMonth(), fromdate.getMonth()],
//     mdiff= m[0]-m[1],
//     d= [todate.getDate(), fromdate.getDate()],
//     ddiff= d[0]-d[1];

//     if(mdiff < 0 || (mdiff=== 0 && ddiff<0))--ydiff;
//     if(mdiff<0) mdiff+= 12;
//     if(ddiff<0){
//         fromdate.setMonth(m[1]+1, 0);
//         ddiff= fromdate.getDate()-d[1]+d[0];
//         --mdiff;
//     }
//     if(ydiff> 0) age.push(ydiff+ ''+(ydiff> 1? ' -':' - '));
//     // if(ydiff> 0) age.push(ydiff+ ' year'+(ydiff> 1? 's -':' - '));
//     if(mdiff> 0) age.push(mdiff+ ' month'+(mdiff> 1? 's -':' - '));
//     if(ddiff> 0) age.push(ddiff+ ' day'+(ddiff> 1? 's - ':' - '));
//     if(age.length>1) age.splice(age.length-1,0,' and ');

//     aa = age.join('').split('-');
//     return aa[0];
//   }
// }

// var getJSON = function(url) {
// return new Promise(function(resolve, reject) {
// var xhr = new XMLHttpRequest();
// xhr.open('get', url, true);
// xhr.responseType = 'json';
// xhr.onload = function() {
// var status = xhr.status;
// if (status == 200) {
// resolve(xhr.response);
// } else {
// reject(status);
// }
// };
// xhr.send();
// });
// };


// function printContent(el) {
//   var data = document.getElementById(el).innerHTML,
//       popupWindow = window.open('');
//       popupWindow.document.write('<HTML>\n<HEAD>\n');
//       popupWindow.document.write('<TITLE></TITLE>\n');
//       popupWindow.document.write('<URL></URL>\n');
//       // popupWindow.document.write("<link href='https://cityofsanfernando.gov.ph/cedula/build/css/cedulalayout.css?v=1.0.11' rel='stylesheet' type='text/css' />\n");
//       popupWindow.document.write("<link href='https://localhost/cedula/build/css/cedulalayout.css?v=1.0.1' rel='stylesheet' type='text/css' />\n");
//       popupWindow.document.write('<script>\n');
//       popupWindow.document.write('function print_win(){\n');
//       popupWindow.document.write('\nwindow.print(true,1,1);\n');
//       popupWindow.document.write('\nwindow.close();\n');
//       popupWindow.document.write('}\n');
//       popupWindow.document.write('<\/script>\n');
//       popupWindow.document.write('</HEAD>\n');
//       popupWindow.document.write('<BODY onload="print_win()">\n');
//       popupWindow.document.write(data);
//       popupWindow.document.write('</BODY>\n');
//       popupWindow.document.write('</HTML>\n');
//       popupWindow.document.close();
//  }


});



function getErrorMessage(jqXHR, exception) {
  var msg = '';
  if (jqXHR.status === 0) {
      toastr.error('Not connected. Verify Network.','Something\'s not right..');
  } else if (jqXHR.status == 404) {
      toastr.error('Requested page not found.','Something\'s not right..');
  } else if (jqXHR.status == 500) {
      toastr.error('Server Communication Error.','Something\'s not right..');
  } else if (exception === 'parsererror') {
      toastr.error('Request parsing failed.','Something\'s not right..');
  } else if (exception === 'timeout') {
      toastr.error('Time out error.','Something\'s not right..');
  } else if (exception === 'abort') {
      toastr.error('Request aborted by the server.','Something\'s not right..');
  } else {
      toastr.error('Uncaught Error.\n' + jqXHR.responseText,'Request aborted by the server.');
 }
}

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": true,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "10000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }

  
  $.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
      if (o[this.name]) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || '');
      } else {
        o[this.name] = this.value || '';
      }
    });
    return o;
  };

  function postAjax(url, data, success) {
    var params = typeof data == 'string' ? data : Object.keys(data).map(
      function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
      }
    ).join('&');
  
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open('POST', url);
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        success(JSON.parse(xhr.responseText));
        
      }
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(params);
    return xhr;
  }