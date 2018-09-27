<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Admin extends MX_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->model('mdl_account');
    }

    //LOGIN
    public function index()
    {

        if ($this->session->userdata('cdrrmo_session')) {
             $data['title'] = 'Account Login';
            $this->load->view('admin/v_csfpmap', $data);
        } else {
           redirect('account');
        }
       
    }

 
}
