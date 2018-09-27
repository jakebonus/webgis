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
    <title>CDRRMO - Account Login</title>
    <!-- page css -->
    <link href="<?php echo base_url('dist/css/pages/login-register-lock.css'); ?>" rel="stylesheet">
    <!-- Custom CSS -->
    <link href="<?php echo base_url('dist/css/style.min.css'); ?>" rel="stylesheet">
    <link href="<?php echo base_url('dist/css/toastr.css'); ?>" rel="stylesheet">
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->
</head>

<body class="login">
    <!-- ============================================================== -->
    <!-- Preloader - style you can find in spinners.css -->
    <!-- ============================================================== -->
    <div class="preloader">
        <div class="loader">
            <div class="loader__figure"></div>
            <p class="loader__label">Developed by City Information and Communications Technology Office ( CICTO )</p>
        </div>
    </div>
    <!-- ============================================================== -->
    <!-- Main wrapper - style you can find in pages.scss -->
    <!-- ============================================================== -->
    <div class="row">
      <div class="container login_container">
        <div class="col-md-6 col-sm-6 col-xs-12 text-center">
        </div>
        <div class="col-md-6 col-sm-6 col-xs-12 text-center">
        <div class="card card-container">

            <img draggable="false" id="profile-img" class="profile-img-card" src="<?php echo base_url('assets/images/cicto-logo.png'); ?>" />
            
           <hr class="colorgraph">
            <?php
              $frm_login = array(
                  'class' => 'form-signin',
                  'id'    => 'frm_login',
                  'name'  => 'frm_login',
              );
              echo form_open('', $frm_login);
              ?>
                <input type="text" id="txt_username" name="txt_username" class="form-control" placeholder="Username" required autofocus>
                <input type="password" id="txt_password" name="txt_password" class="form-control" placeholder="Password" required>
                <button id="btn_signin" class="btn btn-lg btn-primary btn-block btn-signin" type="submit"><i class="fa fa-spinner"></i> Log in</button>
            </form>
            <p><small class="liner">Developed by</small><br>City Information and Communications Technology Office ( CICTO )</p>
        </div>
    </div>
  </div>
</div>
    <!-- ============================================================== -->
    <!-- End Wrapper -->
    <!-- ============================================================== -->
    <!-- ============================================================== -->
    <!-- All Jquery -->
    <!-- ============================================================== -->
    <script>var base_url = "<?php echo base_url(); ?>";</script>
    <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <!-- Bootstrap tether Core JavaScript -->
    <script src="<?php echo base_url('assets/node_modules/popper/popper.min.js'); ?>"></script>
    <script src="<?php echo base_url('assets/node_modules/bootstrap/dist/js/bootstrap.min.js'); ?>"></script>
    <script src="<?php echo base_url('dist/js/toastr.js'); ?>"></script>
    <!--Custom JavaScript -->
    <script>
    $(function() {
        $(".preloader").fadeOut();
    });
    
      (function() {
        $('#frm_login').on('submit', function() {
          $.ajax({
            dataType: 'json',
            type: 'post',
            url: base_url + "account/ajax_login",
            data: $('#frm_login').serialize() + "&isLogin=" + 1,
            beforeSend: function() {
              $('#btn_signin').text('Please wait...');
              $('#btn_signin').attr('disabled', 'disabled');
              toastr.info('Trying to log you in.','Please wait...');
            },
            success: function(data) {
              if (data.status == "yes") {
                $('#btn_signin').removeAttr('disabled');
                $('#frm_login')[0].reset();
                toastr.clear();
                toastr.success(data.content,data.title);
                window.location.href = data.link_url;
              } else {
                $('#btn_signin').removeAttr('disabled');
                $('#txt_password').val('');
                toastr.clear();
                toastr.error(data.content,data.title);
              }
               $('#btn_signin').text('Log In');
            },
            error: function(jqXHR, exception) {
              toastr.clear();
              getErrorMessage(jqXHR, exception);
              $('#btn_signin').removeAttr('disabled');
              $('#txt_password').val('');
              $('#btn_signin').text('LOG IN');
            }
          });
          return false;
        });
      })();


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
    </script>
    
</body>
</html>