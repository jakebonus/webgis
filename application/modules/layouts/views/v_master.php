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
	<title>CSFP Live Forecast - City of San Fernando, Pampanga - Developed by City Information and Communications Technology Office ( CICTO )</title>
	<!-- Custom CSS -->
	<link href="<?php echo base_url('dist/css/style.min.css'); ?>" rel="stylesheet">
	<link href="<?php echo base_url('assets/node_modules/formvalidation/formValidation.css'); ?>" rel="stylesheet">
	<link href="<?php echo base_url('dist/css/toastr.css'); ?>" rel="stylesheet">

	<link rel="stylesheet" href="<?php echo base_url('vendors/pdatatables/jquery.dataTables.min.css'); ?>">
	<link href="<?php echo base_url('vendors/formvalidation/formValidation.min.css'); ?>" rel="stylesheet">
	<link href="<?php echo base_url('vendors/select2/dist/css/select2.css'); ?>" rel="stylesheet">
	<link href="<?php echo base_url('build/css/postfeedlayout.css'); ?>" rel="stylesheet">

	<?php $this->load->view('prince/v_head'); ?>
	<?php $this->load->view('jake/v_head'); ?>

	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->
</head>

<body class="skin-default-dark fixed-layout lock-nav">
	<div id="fb-root"></div>
	<script>
		(function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s);
			js.id = id;
			js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=456423674552445";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	</script>
	<!-- ============================================================== -->
	<!-- Preloader - style you can find in spinners.css -->
	<!-- ============================================================== -->

	<!-- ============================================================== -->
	<!-- Main wrapper - style you can find in pages.scss -->
	<!-- ============================================================== -->
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
						City of San Fernando, Pampanga Live Forecast</a>
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
		<!-- ============================================================== -->
		<!-- End Topbar header -->
		<!-- ============================================================== -->
		<!-- ============================================================== -->
		<!-- Left Sidebar - style you can find in sidebar.scss  -->
		<!-- ============================================================== -->
		<aside class="left-sidebar">
			<div class="d-flex no-block nav-text-box align-items-center">
				<span>CONTROL PANEL</span>
				<a class="nav-lock waves-effect waves-dark ml-auto hidden-md-down" href="javascript:void(0)"><i class="mdi mdi-toggle-switch"></i></a>
				<a class="nav-toggler waves-effect waves-dark ml-auto hidden-sm-up" href="javascript:void(0)"><i class="ti-menu ti-close"></i></a>
			</div>
			
			<iframe src="http://oras.pagasa.dost.gov.ph/widget.shtml" style="height: 85px; width: 100%; border: none;background-color: #fff;" scrolling="no"></iframe>
			
			<!-- Sidebar scroll-->
			<div class="scroll-sidebar">
				<!-- Sidebar navigation-->
				<nav class="sidebar-nav">
					
					<ul id="sidebarnav" class="menu">

						<div class="dropdown-divider"></div>
						<li><a class="has-arrow waves-effect waves-dark menu-btn" href="#windforecast" aria-expanded="false"><i class="icon-speedometer"></i><span class="hide-menu"> WIND FORECAST</span></a></li>
						<li><a class="has-arrow waves-effect waves-dark menu-btn" href="#rainforecast" aria-expanded="false"><i class="icon-speedometer"></i><span class="hide-menu"> RAIN FORECAST</span></a></li>
						<li><a class="has-arrow waves-effect waves-dark menu-btn" href="#traffic" aria-expanded="false"><i class="icon-speedometer"></i><span class="hide-menu"> TRAFFIC MONITORING</span></a></li>
						<li><a class="has-arrow waves-effect waves-dark menu-btn" href="#pagasatrack" aria-expanded="false"><i class="icon-speedometer"></i><span class="hide-menu"> PAGASA TRACK</span></a></li>
						<li><a class="has-arrow waves-effect waves-dark menu-btn" href="#satellite" aria-expanded="false"><i class="icon-speedometer"></i><span class="hide-menu"> PAGASA SATELLITE</span></a></li>
						
						<li><a class="has-arrow waves-effect waves-dark menu-btn" href="#satellitenoaa" aria-expanded="false"><i class="icon-speedometer"></i><span class="hide-menu"> NOAA SATELLITE</span></a></li>
						
						<li><a class="has-arrow waves-effect waves-dark menu-btn" href="#evacuationmap" aria-expanded="false"><i class="icon-speedometer"></i><span class="hide-menu"> EVACUATION MAP</span></a></li>
						
						<li><a class="has-arrow waves-effect waves-dark menu-btn" href="#updates" aria-expanded="false"><i class="icon-speedometer"></i><span class="hide-menu"> UPDATES</span></a></li>
						<li><a class="has-arrow waves-effect waves-dark menu-btn" href="#feeds" aria-expanded="false"><i class="icon-speedometer"></i><span class="hide-menu"> FEEDS</span></a></li>
						<li><a class="has-arrow waves-effect waves-dark menu-btn" href="#brgyparcel" aria-expanded="false"><i class="icon-speedometer"></i><span class="hide-menu"> CSFP PARCEL MAP</span></a></li>
						
						<li><a class="has-arrow waves-effect waves-dark menu-btn" href="#facebook" aria-expanded="false"><i class="icon-speedometer"></i><span class="hide-menu"> FACEBOOK PAGES</span></a></li>
						<div class="dropdown-divider"></div>

					</ul>
				</nav>
				<!-- End Sidebar navigation -->
			</div>
			<!-- End Sidebar scroll-->
		</aside>
		<!-- ============================================================== -->
		<!-- End Left Sidebar - style you can find in sidebar.scss  -->
		<!-- ============================================================== -->
		<!-- ============================================================== -->
		<!-- Page wrapper  -->
		<!-- ============================================================== -->
		<div class="page-wrapper">
			<!-- ============================================================== -->
			<!-- Container fluid  -->
			<!-- ============================================================== -->
			<div class="container-fluid">

				<!-- ============================================================== -->
				<!-- Start Page Content -->
				<!-- ============================================================== -->
				<div id="windforecast" class="menu-content">
					<?php $this->load->view('prince/v_windforecast'); ?>
				</div>

				<div id="rainforecast" class="menu-content">
					<?php $this->load->view('prince/v_rainforecast'); ?>
				</div>

				<div id="evacuationmap" class="menu-content">
					<!--iframe id="iframe1" src="http://cityofsanfernando.gov.ph/cdrrmo/shortlist/" allowfullscreen scrolling="no" width="100%" height="100%"></iframe-->
				
					<?php $this->load->view('prince/v_evacuationmap'); ?>
				</div>

				<div id="traffic" class="menu-content">
					<?php $this->load->view('prince/v_traffic'); ?>
				</div>
				
				<div id="pagasatrack" class="menu-content">
					<div class="txt-source" style="top: 17px;"> <span class="dot"></span> Live from https://www1.pagasa.dost.gov.ph</div>

					<div class="w3-content w3-section" style="max-width:100%">
										
					<div style="
					width: 100%;
					background-image: url(https://pubfiles.pagasa.dost.gov.ph/tamss/weather/track.png?v<?php echo time(); ?>);
					height: calc(100vh - 124px);
					background-size: contain;
					background-position: top center;
					background-repeat: no-repeat;
					background-color: #fff;
					"></div>

					</div>

				</div>

				<div id="satellite" class="menu-content">
					<?php $this->load->view('prince/v_satellite'); ?>
				</div>
				
				<div id="satellitenoaa" class="menu-content">
					<?php $this->load->view('prince/v_satellitenoaa'); ?>
				</div>

				<div id="settings" class="menu-content">
					<br>
					<div class="row">
						<div class="col-lg-6">
							<div class="card">
								<div class="card-body">
									<h4 class="card-title">Change Username</h4>
									<form id="frm_changeusername" name="frm_changeusername" method="post" class="form p-t-20">
										<div class="form-group">
											<label for="old_username">Old Username</label>
											<div class="input-group">
												<div class="input-group-prepend">
													<span class="input-group-text"><i class="ti-user"></i></span>
												</div>
												<input id="old_username" name="old_username" type="text" class="form-control" placeholder="Old Username">
											</div>
										</div>
										<div class="form-group">
											<label for="new_username">New Username</label>
											<div class="input-group">
												<div class="input-group-prepend">
													<span class="input-group-text"><i class="ti-user"></i></span>
												</div>
												<input id="new_username" name="new_username" type="text" class="form-control" placeholder="New Username">
											</div>
										</div>
										<button id="btn_changeusername" name="btn_changeusername" type="submit" class="btn btn-success waves-effect waves-light m-r-10">Update Username</button>
									</form>
								</div>
							</div>
						</div>
						<div class="col-lg-6">
							<div class="card">
								<div class="card-body">
									<h4 class="card-title">Change Password</h4>
									<form id="frm_changepassword" name="frm_changepassword" method="post" class="form p-t-20">
										<div class="form-group">
											<label for="old_password">Old Password</label>
											<div class="input-group">
												<div class="input-group-prepend">
													<span class="input-group-text"><i class="ti-lock"></i></span>
												</div>
												<input id="old_password" name="old_password" type="password" class="form-control" aria-label="Username">
											</div>
										</div>
										<div class="form-group">
											<label for="new_password">New Password</label>
											<div class="input-group">
												<div class="input-group-prepend">
													<span class="input-group-text"><i class="ti-lock"></i></span>
												</div>
												<input id="new_password" name="new_password" type="password" class="form-control" aria-label="Email">
											</div>
										</div>
										<div class="form-group">
											<label for="confirm_password">Confirm Password</label>
											<div class="input-group">
												<div class="input-group-prepend">
													<span class="input-group-text"><i class="ti-lock"></i></span>
												</div>
												<input id="confirm_password" name="confirm_password" type="password" class="form-control" aria-label="Password">
											</div>
										</div>
										<button id="btn_changepassword" name="btn_changepassword" type="submit" class="btn btn-success waves-effect waves-light m-r-10">Update Password</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="updates" class="menu-content">
					<?php $this->load->view('jake/v_updates'); ?>
				</div>
					<!-- feeds -->
				<div id="feeds" class="menu-content">
					<?php $this->load->view('jake/v_feeds'); ?>
				</div>
				
						<!-- feeds -->
				<div id="brgyparcel" class="menu-content">
					<?php $this->load->view('jake/v_brgyparcel'); ?>
				</div> <!-- end of brgy parcel -->
				
				
				<div id="facebook" class="menu-content">
					<div class="row">
						<div class="col-sm-4 col-md-4">
						<div style="max-height:800px; overflow:hidden; background:#FFF;">
							<div class="fb-page" data-href="https://www.facebook.com/CityMayorEDSA/" data-tabs="timeline" data-width="450" data-height="800" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/CSFP.CIO" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/CSFP.CIO">Mayor EDSA </a></blockquote></div>
						</div>
					</div>
					<div class="col-sm-4 col-md-4">
						<div style="max-height:800px; overflow:hidden; background:#FFF;">
							<div class="fb-page" data-href="https://www.facebook.com/CSFP.CIO" data-tabs="timeline" data-width="450" data-height="800" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/CSFP.CIO" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/CSFP.CIO">CSFP CIO</a></blockquote></div>
						</div>
					</div>
				<div class="col-sm-4 col-md-4">
					<div style="max-height:800px; overflow:hidden; background:#FFF;">
					<div class="fb-page" data-href="https://www.facebook.com/cdrrmo.csfp.official" data-tabs="timeline" data-width="450" data-height="800" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/cdrrmo.csfp.official" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/cdrrmo.csfp.official">CDRRMO CSFP</a></blockquote></div>
					</div>
					</div>
				</div>
				</div>

				<!-- ============================================================== -->
				<!-- End PAge Content -->
				<!-- ============================================================== -->
				<!-- ============================================================== -->
				<!-- Right sidebar -->
				<!-- ============================================================== -->
				<!-- .right-sidebar -->
				<div class="right-sidebar">
					<div class="slimscrollright">
						<div class="rpanel-title"> Choose Theme <span><i class="ti-close right-side-toggle"></i></span> </div>
						<div class="r-panel-body">
							<ul id="themecolors" class="m-t-20">
								<li><a href="javascript:void(0)" data-skin="skin-default-dark" class="default-dark-theme working">7</a></li>
								<li><a href="javascript:void(0)" data-skin="skin-green-dark" class="green-dark-theme">8</a></li>
								<li><a href="javascript:void(0)" data-skin="skin-red-dark" class="red-dark-theme">9</a></li>
								<li><a href="javascript:void(0)" data-skin="skin-blue-dark" class="blue-dark-theme">10</a></li>
								<li><a href="javascript:void(0)" data-skin="skin-purple-dark" class="purple-dark-theme">11</a></li>
								<li><a href="javascript:void(0)" data-skin="skin-megna-dark" class="megna-dark-theme ">12</a></li>
							</ul>
						</div>
					</div>
				</div>
				<!-- ============================================================== -->
				<!-- End Right sidebar -->
				<!-- ============================================================== -->
			</div>
			<!-- ============================================================== -->
			<!-- End Container fluid  -->
			<!-- ============================================================== -->
		</div>
		<!-- ============================================================== -->
		<!-- End Page wrapper  -->
		<!-- ============================================================== -->
		<!-- ============================================================== -->
		<!-- footer -->
		<!-- ============================================================== -->
		<footer class="footer">
			All Rights Reserved | Copyright &copy;
			<?php echo date('Y'); ?> | CSFP Live Forecast | Developed by City Information and Communications Technology Office ( CICTO )
		</footer>
		<!-- ============================================================== -->
		<!-- End footer -->
		<!-- ============================================================== -->
	</div>
	<!-- ============================================================== -->
	<!-- End Wrapper -->
	<!-- <script src="<?php /* echo base_url('dist/js/jquery-3.2.1.min.js'); */ ?>"></script> -->
	<script type="text/javascript">
	var base_url = "<?php echo base_url(); ?>";
	</script>


	<script src="<?php echo base_url('vendors/comet/prototype.js'); ?>"></script>

	<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
	<script src="https://maps.googleapis.com/maps/api/js?libraries=weather&key=AIzaSyBJraAzKbs-bFAjF0DszJTrZGNCCBEfCxI" async defer></script>

	<!-- Bootstrap tether Core JavaScript -->
	<script src="<?php echo base_url('assets/node_modules/popper/popper.min.js'); ?>"></script>
	<script src="<?php echo base_url('assets/node_modules/bootstrap/dist/js/bootstrap.min.js'); ?>"></script>

	<script src="<?php echo base_url('assets/node_modules/formvalidation/formValidation.min.js'); ?>"></script>
	<script src="<?php echo base_url('assets/node_modules/formvalidation/framework/bootstrap.min.js'); ?>"></script>

	<!-- slimscrollbar scrollbar JavaScript -->
	<script src="<?php echo base_url('dist/js/perfect-scrollbar.jquery.min.js'); ?>"></script>
	<!--Wave Effects -->
	<script src="<?php echo base_url('dist/js/waves.js'); ?>"></script>
	<!--Menu sidebar -->
	<script src="<?php echo base_url('dist/js/sidebarmenu.js'); ?>"></script>
	<!--stickey kit -->
	<script src="<?php echo base_url('assets/node_modules/sticky-kit-master/dist/sticky-kit.min.js'); ?>"></script>
	<script src="<?php echo base_url('assets/node_modules/sparkline/jquery.sparkline.min.js'); ?>"></script>
	<!--Custom JavaScript -->
	<script src="<?php echo base_url('dist/js/custom.min.js'); ?>"></script>
	<script src="<?php echo base_url('dist/js/profile.js'); ?>"></script>

		<script src="<?php echo base_url('vendors/formvalidation/formValidation.min.js'); ?>"></script>
		<script src="<?php echo base_url('vendors/formvalidation/framework/bootstrap.min.js'); ?>"></script>
		<script src="<?php echo base_url('vendors/select2/dist/js/select2.full.min.js'); ?>"></script>
	   <script src="<?php echo base_url('vendors/jquery.inputmask/dist/min/jquery.inputmask.bundle.min.js'); ?>"></script>    <!-- dataTables -->
		 <script src="<?php echo base_url('vendors/pdatatables/jquery.dataTables.min.js'); ?>"></script>
	   <script src="<?php echo base_url('vendors/pdatatables/dataTables.buttons.min.js'); ?>"></script>
	   <script src="<?php echo base_url('vendors/pdatatables/buttons.print.min.js'); ?>"></script>
	   <script src="<?php echo base_url('vendors/pdatatables/jszip.min.js'); ?>"></script>
	   <script src="<?php echo base_url('vendors/pdatatables/buttons.html5.min.js'); ?>"></script>
	   <script src="<?php echo base_url('dist/js/toastr.js');?>"></script>


		 <?php $this->load->view('prince/v_footer'); ?>
		 <?php $this->load->view('jake/v_footer'); ?>

	   <script>
	$(document).ready(function() {
	$(".time").inputmask("hh:mm",{ "placeholder": "hh:mm" });
	$(".date").inputmask("yyyy-mm-dd",{ "placeholder": "yyyy-mm-dd" });
	$(".numeric").inputmask('decimal', { rightAlign: false });
	$(".currency").inputmask("numeric", {
					radixPoint: ".",
					groupSeparator: ",",
					digits: 2,
					autoGroup: true,
					prefix: '₱ ',
					rightAlign: false,
					oncleared: function () {
					self.Value('');
					}
					});
	$(".mobilenum").inputmask({"mask": "9999-999-9999"});       });
	</script>

	<script>
		var $content = $('.menu-content');
		function showContent(selector) {
			$content.hide();
			$(selector).show();
		}
		$('.menu').on('click', '.menu-btn', function(e) {
			showContent(e.currentTarget.hash);
			e.preventDefault();
		});
		showContent('#windforecast');
	</script>

</body>

</html>
