$( document ).ready(function() {

  $("#frm_feeds").formValidation({
    framework: "bootstrap",
    icon: null,
    fields: {
      f_title: {
        validators: {
          regexp: {
            regexp: /^[0-9a-zA-ZÑñ .,-]+$/i
          },
          stringLength: {
            max: 30
          },
          notEmpty: {
            message: ''
          }
        }
      },
      f_brgy: {
        validators: {
          regexp: {
            regexp: /^[0-9a-zA-ZÑñ .,-]+$/i
          },
          stringLength: {
            max: 30
          }
        }
      },
      f_date: {
        validators: {
          date: {
            format: 'YYYY-MM-DD',
            message: ''
          },
          notEmpty: {
            message: ''
          }
        }
      }
    }
   })
   .on('success.form.fv', function(e) {

   
    save_feed();
    return false;
   }).on('err.field.fv', function(e, data) {
   
   });

  });




  var $dt_feeds = $('#dt_feeds');

  // $dt_feeds.DataTable({
  //   'dom': '<"wrapper"Bfit>',
  //   'scrollY': '70vh',
  //   "bInfo" : false,
  //   'searching': false,
  //   'scrollX': true,
  //   'scrollCollapse': true,
  //   'paging': false,
  //   "ordering": false,
  //   'buttons': [
  // ]
  // });

  var dt_feeds = $dt_feeds.DataTable({
    'ajax': {
        "type": "GET",
        "url": base_url + 'feeds.txt',
        // "data": data,
        "dataSrc": ""
      },
      // fnCreatedRow: function(nRow, data, iDisplayIndex) {
      //    $(nRow).attr('data-c_id', data.c_id);
      //  },
       
      'columns': [

        { "data": function(data, type, row, meta) {
          var content = "";
          content += '<div class="panel panel-default">'
          content += '<div class="panel-body">';
          content += '<section class="post-heading">';
          content += '<div class="row">';
          content += '<div class="col-md-11">';
          content += '<div class="media">';
          content += '<div class="media-left">';
          content += '<a href="#">';
          content += '<img class="media-object photo-profile" src="https://scontent.fmnl17-1.fna.fbcdn.net/v/t1.0-1/c0.0.60.60/p60x60/30415667_237958176769169_7508514551885725696_n.jpg?_nc_cat=0&oh=245d5dc4a4bf6920169b1b4bded3f9e2&oe=5BB4A2F4" width="40" height="40" alt="...">';
          content += '</a>';
          content += '</div>';
          content += '<div class="media-body">';
          content += '<a href="#" class="anchor-username"><h4 class="media-heading">'+data.f_title+'</h4></a>';
          content += '<a href="#" class="anchor-time"> Posted by:'+data.a_id+'</a>';
          content += '</div>';
          content += '</div>';
          content += '</div>';
          content += '</div>';             
          content += '</section>';
          content += '<section class="post-body">'
          content += '<p class="post-content">'+data.f_content+'</p>';
          content += '</section>';
          content += '</div>';
          content += '</div>';


          // content += '<div class="timeline">';
          // content += '<div class="container left">';
          // content += '<div class="content">';
          // content += '<h2>'+data.f_title+'</h2>';
          // content += '<p>'+data.f_content+'</p>'
          // content += '</div>';
          // content += '</div>';
          return content;
          // return '<a href="#" data-toggle="modal" data-target="#emp_pic" data-a_office="' + data.a_office + '" data-a_position="' + data.a_position + '" data-id="' + data.a_action + '"  data-name="' + data.name + '">' + data.a_position + '</a>';
            }
        },
      ],
      'dom': '<"wrapper"Bfit>',
      'scrollY': '85vh',
      'ordering':false,
      "bInfo" : false,
      'searching': false,
      'scrollX': true,
      'scrollCollapse': true,
      'paging': false,
      'buttons': [
    ],
      fnInitComplete: function(oSettings, json) {
        $('.alert-info .glyphicon-remove').trigger("click");
        $('body').find('.dataTables_scrollBody').addClass("scrollbar");
        $('body').find('#f_content').addClass("scrollbar");
      }
  });

  // var btn_savefeeds = document.getElementById('btn_savefeeds');
  //     btn_savefeeds.onclick = function(){
  //       save_feed();
  //     }

  function save_feed(){
      $is_processing =  $(document).find('.toast.toast-info').length;
      
      if($is_processing == 0){
        var arr = $("#frm_feeds").serializeObject();
              toastr.info('Processing','Please wait...');
            postAjax(base_url + 'feed/savefeed/', arr,
            function(data) {

              if (data.status == "yes") {
                toastr.clear();
                toastr.success(data.content,data.title);
                
              } else {
                toastr.clear();
                toastr.error(data.content,data.title);
                
              }
            }
            
          );
        }
        return false;
  }
