<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Account extends MX_Controller
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
            redirect('admin');
        }
        $data['title'] = 'Account Login';
        $this->load->view('account/v_login', $data);
    }

    //======== CREATE NEW USER ACCOUNT
    public function ajax_save_account()
    {

        if ($this->session->userdata('cdrrmo_session')) {

            $iterations = 12000;
            $salt       = "~(X.+![@]-N)~";

            $data = array(
                'u_username' => trim($this->input->post('u_username', true)),
                'u_password' => base64_encode(hash_pbkdf2("sha256", $this->input->post('u_password', true), $salt, $iterations, 32, true)),
                'u_level'    => trim($this->input->post('u_level', true)),
                'u_isactive' => trim($this->input->post('u_isactive', true)),
                'u_addedby'  => $this->session->userdata('u_id'),
            );

            if ($this->mdl_account->m_ajax_check_account($data) === false) {

                if ($this->mdl_account->m_ajax_save_account($data)) {
                    $contents = array('status' => 'yes', 'content' => 'New User Account record saved.');
                    echo json_encode($contents);
                } else {
                    $contents = array('status' => 'no', 'content' => 'Failed to save new User Account record.');
                    echo json_encode($contents);
                }

            } else {
                $contents = array('status' => 'no', 'content' => 'The User Account you are trying to add is already existing.');
                echo json_encode($contents);
            }
        } else {
            $contents = array('status' => 'no', 'content' => 'Session Expired. Please login again.');
            echo json_encode($contents);
        }
    }

    //======== UPDATE EXISTING USER ACCOUNT
    public function ajax_update_account()
    {
        if ($this->session->userdata('cdrrmo_session')) {

            if ($this->input->post('u_password') != "") {

                $iterations = 12000;
                $salt       = "~(X.+![@]-N)~";

                $data = array(
                    'u_username'    => trim($this->input->post('u_username', true)),
                    'u_password'    => base64_encode(hash_pbkdf2("sha256", $this->input->post('u_password', true), $salt, $iterations, 32, true)),
                    'u_level'       => trim($this->input->post('u_level', true)),
                    'u_isactive'    => trim($this->input->post('u_isactive', true)),
                    'u_updatedby'   => $this->session->userdata('u_id'),
                    'u_dateupdated' => date('Y-m-d H:i:s'),
                );
            } else {
                $data = array(
                    'u_username'    => trim($this->input->post('u_username', true)),
                    'u_level'       => trim($this->input->post('u_level', true)),
                    'u_isactive'    => trim($this->input->post('u_isactive', true)),
                    'u_updatedby'   => $this->session->userdata('u_id'),
                    'u_dateupdated' => date('Y-m-d H:i:s'),
                );

            }

            $id = $this->input->post('hid_account');

            if ($this->mdl_account->m_ajax_update_account($data, $id)) {
                $contents = array('status' => 'yes', 'content' => 'User Account record updated.');
                echo json_encode($contents);
            } else {
                $contents = array('status' => 'no', 'content' => 'Failed to delete User Account record.');
                echo json_encode($contents);
            }
        } else {
            $contents = array('status' => 'no', 'content' => 'Session Expired. Please login again.');
            echo json_encode($contents);
        }
    }

    //======== DELETE USER ACCOUNT
    public function ajax_delete_account()
    {
        if ($this->session->userdata('cdrrmo_session')) {

            $data = array(
                'u_isactive'    => 'no',
                'u_deletedby'   => $this->session->userdata('u_id'),
                'u_datedeleted' => date('Y-m-d H:i:s'),
            );

            $id = $this->input->post('hid_account');

            if ($this->mdl_account->m_ajax_delete_account($data, $id)) {
                $contents = array('status' => 'yes', 'content' => 'User Account record deleted.');
                echo json_encode($contents);
            } else {
                $contents = array('status' => 'no', 'content' => 'Failed to delete User Account record.');
                echo json_encode($contents);
            }
        } else {
            $contents = array('status' => 'no', 'content' => 'Session Expired. Please login again.');
            echo json_encode($contents);
        }
    }

    //AJAX LOGIN
    public function ajax_login()
    {
        if ($this->input->post('isLogin') == 1) {

            $data = array(
                'a_username' => trim($this->input->post('txt_username')),
                'a_password' => $this->input->post('txt_password'),
            );

            if ($user = $this->mdl_account->m_ajax_login($data)) {
                foreach ($user as $u) {

                    $newdata = array(
                        'cdrrmo_session' => md5(microtime()),
                        'u_id'           => $u->u_id,
                        'u_username'     => $u->u_username,
                        'u_level'        => $u->u_level,
                    );

                    $this->session->set_userdata($newdata);
                }

                $result = array('status' => 'yes', 'title' => 'Login Success', 'content' => 'Successfully logged in! Redirecting...', 'link_url' => base_url('admin'));
                echo json_encode($result);
            } else {
                $result = array('status' => 'no', 'title' => 'Login Failed', 'content' => 'Invalid Username and Password!');
                echo json_encode($result);
            }
        }
    }

    //LOGOUT/DESTROY ALL SESSIONS
    public function logout()
    {
        if ($this->mdl_account->m_logout()) {
            redirect('account');
        }
    }

    public function check_session()
    {
        if ($this->session->userdata('cdrrmo_session')) {
            $result = array('status' => 'yes', 'url' => '', 'content' => 'Session is okay.');
            echo json_encode($result);
        } else {
            $result = array('status' => 'no', 'url' => base_url() . 'account', 'content' => 'Please login again.');
            echo json_encode($result);
        }
    }

    //==== CHANGE PASSWORD
    public function profile()
    {
        if ($this->session->userdata('cdrrmo_session')) {
            $data['title']   = 'Profile';
            $data['content'] = 'account/v_profile';
            $this->load->view('layouts/v_master', $data);
        } else {
            redirect('account');
        }
    }

    // UPDATES USER ACCOUNT PASSWORD
    public function update_password()
    {
        if ($this->session->userdata('cdrrmo_session')) {

            $confirm_password = $this->input->post('confirm_password');
            $old_password     = $this->input->post('old_password');

            if ($this->mdl_account->m_ajax_check_oldpassword($old_password)) {

                if ($this->input->post('new_password') === $confirm_password) {

                    if ($this->mdl_account->m_ajax_update_password($confirm_password)) {
                        $result = array('status' => 'yes', 'title' => 'Success', 'content' => 'Password Successfully Updated');
                        echo json_encode($result);
                        exit();
                    } else {
                        $result = array('status' => 'no', 'title' => 'Failed', 'content' => 'Password failed to updated');
                        echo json_encode($result);
                        exit();
                    }
                } else {
                    $result = array('status' => 'no', 'title' => 'Failed', 'content' => 'Password did not matched!');
                    echo json_encode($result);
                    exit();
                }

            } else {
                $result = array('status' => 'no', 'title' => 'Failed', 'content' => 'Invalid Old Password!');
                echo json_encode($result);
                exit();
            }

        } else {
            $contents = array('status' => 'no', 'title' => 'Failed', 'content' => 'Session Expired. Please login again.');
            echo json_encode($contents);
        }

    }

    // UPDATES USER ACCOUNT USERNAME
    public function update_username()
    {
        if ($this->session->userdata('cdrrmo_session')) {

            $new_username = $this->input->post('new_username');
            $old_username = $this->input->post('old_username');

            if ($this->mdl_account->m_ajax_check_oldusername($old_username)) {

                if ($this->mdl_account->m_ajax_update_username($new_username)) {
                    $result = array('status' => 'yes', 'title' => 'Success', 'content' => 'Username successfully updated');
                    echo json_encode($result);
                    exit();
                } else {
                    $result = array('status' => 'no', 'title' => 'Failed', 'content' => 'Username failed to updated');
                    echo json_encode($result);
                    exit();
                }

            } else {
                $result = array('status' => 'no', 'title' => 'Failed', 'content' => 'Invalid old username!');
                echo json_encode($result);
                exit();
            }
        } else {
            $contents = array('status' => 'no', 'title' => 'Failed', 'content' => 'Session Expired. Please login again.');
            echo json_encode($contents);
        }

    }
}
