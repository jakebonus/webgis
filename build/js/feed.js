var id = 0;
$(document).ready(function() {
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
    }).on('success.form.fv', function(e) {
        save_feed();
        return false;
    }).on('err.field.fv', function(e, data) {});
});
var $dt_feeds = $('#dt_feeds');
var $dt_feeds2 = $('#dt_feeds2');
var dt_feeds = $dt_feeds.DataTable({
    'ajax': {
        "type": "GET",
        "url": base_url + 'feeds.txt',
        "dataSrc": ""
    },
    'columns': [{
        "data": function(data, type, row, meta) {
            var content = "";
            content += '<div class="panel panel-default">'
            content += '<div class="panel-body">';
            content += '<section class="post-heading">';
            content += '<div class="row">';
            content += '<div class="col-lg-11">';
            content += '<div class="media">';
            content += '<div class="media-left">';
            content += '<a href="#">';
            content += '<img class="media-object photo-profile" src="https://scontent.fmnl17-1.fna.fbcdn.net/v/t1.0-1/c0.0.60.60/p60x60/30415667_237958176769169_7508514551885725696_n.jpg?_nc_cat=0&oh=245d5dc4a4bf6920169b1b4bded3f9e2&oe=5BB4A2F4" width="40" height="40" alt="...">';
            content += '</a>';
            content += '</div>';
            content += '<div class="media-body">';
            content += '<a href="#" class="anchor-username"><h4 class="media-heading">' + data.f_title + '</h4></a>';
            content += '<a href="#" class="anchor-time"> Posted by:' + data.a_id + '</a>';
            content += '</div>';
            content += '</div>';
            content += '</div>';
            content += '<div class="col-lg-1" style="text-align: center;">';
            content += '<a href="#" data-toggle="modal" data-target="#myModal"><i class="fa fa-trash"></i></a>';
            content += '</div>';
            content += '</div>';
            content += '</section>';
            content += '<section class="post-body">'
            content += '<p class="post-content">' + data.f_content + '</p>';

            content += '<div style="background-image: url('+base_url+'img/feeds/thumbs/'+data.f_thumb +');  background-repeat: no-repeat; background-size: contain; height: 40vh;"></div>';

            content += '</section>';


            content += '</div>';
            content += '</div>';

            return content;
        }
    }, ],
    'dom': '<"wrapper"Bfit>',
    'scrollY': '85vh',
    'ordering': false,
    "bInfo": false,
    'searching': false,
    'scrollX': true,
    'scrollCollapse': true,
    'paging': false,
    'buttons': [],
    fnInitComplete: function(oSettings, json) {
        $('.alert-info .glyphicon-remove').trigger("click");
        $('body').find('.dataTables_scrollBody').addClass("scrollbar");
        $('body').find('#f_content').addClass("scrollbar");
    }
});
var dt_feeds2 = $dt_feeds2.DataTable({ 
    'ajax': {
        "type": "GET",
        "url": base_url + 'feeds.txt',
        "dataSrc": ""
    },
    'columns': [{
        "data": function(data, type, row, meta) {
            var content = "";
            content += '<div class="panel panel-default">'
            content += '<div class="panel-body">';
            content += '<section class="post-heading">';
            content += '<div class="row">';
            content += '<div class="col-md-11">';
            content += '<div class="media">';
            content += '<div class="media-left">';
            content += '<a href="#">';
            content += '<img class="media-object photo-profile" src="http://cityofsanfernando.gov.ph/cdrrm/assets/images/logo-icon.png" width="40" height="40" alt="...">';
            content += '</a>';
            content += '</div>';
            content += '<div class="media-body">';
            content += '<a href="#" class="anchor-username"><h4 class="media-heading">' + data.f_title + '</h4></a>';
            content += '<a href="#" class="anchor-time"> Posted by:' + data.a_id + '</a>';
            content += '</div>';
            content += '</div>';
            content += '</div>';
            content += '</div>';
            content += '</section>';

            content += '<section class="post-body">'
            content += '<p class="post-content">' + data.f_content + '</p>';
            content += '</section>';
            content += '</div>';
            content += '</div>';

            return content;
        }
    }, ],
    'dom': '<"wrapper"Bfit>',
    'scrollY': '85vh',
    'ordering': false,
    "bInfo": false,
    'searching': false,
    'scrollX': true,
    'scrollCollapse': true,
    'paging': false,
    'buttons': [],
    fnInitComplete: function(oSettings, json) {
        $('.alert-info .glyphicon-remove').trigger("click");
        $('body').find('.dataTables_scrollBody').addClass("scrollbar");
        $('body').find('#f_content').addClass("scrollbar");
    }
});

function save_feed() {
    $is_processing = $(document).find('.toast.toast-info').length;
    if ($is_processing == 0) {
        var arr = $("#frm_feeds").serializeObject();
        toastr.info('Processing', 'Please wait...');
        postAjax(base_url + 'feed/savefeed/', arr, function(data) {
            if (data.status == "yes") {
                // id = ;
                $('#f_id').val(data.id);
                dzFeedPhotos.processQueue();
                toastr.clear();
                toastr.success(data.content, data.title);
                $('#frm_feeds')[0].reset();
                dzFeedPhotos.queuecomplete();
            } else {
                toastr.clear();
                toastr.error(data.content, data.title);
            }
        });
    }
    return false;
}
Dropzone.options.myAwesomeDropzone = false;
Dropzone.autoDiscover = false;
var dzFeedPhotos = new Dropzone('#post_photos', {
    url: base_url + "feed/uploadphoto/",
    paramName: "file", // The name that will be used to transfer the file
    addRemoveLinks: true,
    maxFiles: 1,
    maxFilesize: 4, // MB
    autoProcessQueue: false,
    parallelUploads: 1,
    acceptedFiles: ".jpg, .jpeg, .png",
    init: function() {
        this.on("addedfile", function(file, data) {});
        this.on("sending", function(file, xhr, formData) {
            formData.append('id', $('#f_id').val());
        });
        this.on("sendingmultiple", function(data, xhr, formData) {});
        this.on("uploadprogress", function(file, progress) {
            toastr.clear();
            toastr.info(progress + '%', 'Uploading...');
        });
        this.on("totaluploadprogress", function(progress) {});
        this.on("success", function(file, response) {
            var obj = jQuery.parseJSON(response);
            if (obj.status == 'yes') {
                toastr.clear();
                toastr.success(obj.content, obj.title);
                this.removeAllFiles();
            } else {
                toastr.clear();
                toastr.error(obj.content, obj.title);
            }
            $('#f_id').val('');
            this.removeAllFiles();
        });
        this.on("error", function(file, response) {
            toastr.clear();
            toastr.error(response, "Error Occured");
            $('#f_id').val('');
        });
        this.on("queuecomplete", function() {
            this.removeAllFiles();
        });
        this.on("removedfile", function(file) {});
    }
});
// Dropzone.autoDiscover = false;
// var totalFiles = 0;
// var dzDocuments = new Dropzone('#post_photos', {
//  url: base_url + "feed/savefeed",
//  addRemoveLinks: true,
//  maxFiles: 1,
//  maxFilesize: 4,
//  autoProcessQueue: false,
//  parallelUploads: 1,
//  acceptedFiles: ".jpg, .jpeg, .png",
//  init: function () {
//    this.on("addedfile", function (file, data) {});
//    this.on("sending", function (file, xhr, formData) {
//      // formData.append("txt_newstitle", $("#txt_newstitle").val());
//      // formData.append("ta_newsheadline", totalEncode($('#ta_newsheadline').summernote('code')));
//      // formData.append("ta_newsdetails", totalEncode($('#ta_newsdetails').summernote('code')));
//    });
//    this.on("sendingmultiple", function (data, xhr, formData) {});
//    this.on("uploadprogress", function (file, progress) {
//      toastr.clear();
//      toastr.info(progress + '%', 'Uploading...');
//      //toastr.info(progress,'Uploading...');
//    });
//    this.on("totaluploadprogress", function (progress) {
//      //toastr.info(progress + '%','Uploading...');
//    });
//    this.on("success", function (file, response) {
//      var obj = jQuery.parseJSON(response);
//      if (obj.status == 'yes') {
//        toastr.clear();
//        toastr.success(obj.content, obj.title);
//        // $('#ta_newsheadline').summernote('enable');
//        // $('#ta_newsdetails').summernote('enable');
//        // $('#ta_newsheadline').summernote('code', '');
//        // $('#ta_newsdetails').summernote('code', '');
//        // $('#txt_newstitle').val('');
//      } else {
//        toastr.clear();
//        toastr.error(obj.content, obj.title);
//      }
//    });
//    this.on("error", function (file, response) {
//      toastr.clear();
//      toastr.error(response, "Error Occured");
//    });
//    this.on("queuecomplete", function () {
//      this.removeAllFiles();
//    });
//    this.on("removedfile", function (file) {});
//  }
// });
// }