<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Mdl_account extends CI_Model
{

    public function __construct()
    {
        parent::__construct();
    }

    public function m_ajax_get_datatables_accounts()
    {
        $sql = "SELECT `u_id`,`u_username`,`u_level`,`u_isactive`,`u_loggedin`,`u_loggedout`,
                        DATE_FORMAT(`u_loggedin`,'%b %d, %Y %h:%i %p') AS LOGGEDIN,
                        DATE_FORMAT(`u_loggedout`,'%b %d, %Y %h:%i %p') AS LOGGEDOUT,
                        CASE
                            `u_level`
                            WHEN 'admin'
                            THEN 'Admin'
                            WHEN 'accounting'
                            THEN 'Accounting'
                            WHEN 'hr'
                            THEN 'HR'
                          END AS USERLEVEL
                FROM `tbl_user`";
        $query = $this->db->query($sql);
        if ($query->num_rows() > 0) {
            return $query->result();
        } else {
            return false;
        }
    }

    //LOGIN/CHECK LOGIN CREDENTIALS
    public function m_ajax_login($data)
    {
        $dateloggedin = date("Y-m-d G:i:s", time());

        $iterations = 12000;
        $salt       = "~(X.+![@]-N)~";

        $sql = "SELECT `u_id`,`u_username`,`u_password`,`u_level`
                    FROM `tbl_user`
                    WHERE `u_username` = ? AND `u_password` = ? AND `u_isactive` = ?
                    LIMIT 1";
        $attr  = array($data['a_username'], base64_encode(hash_pbkdf2("sha256", $data['a_password'], $salt, $iterations, 32, true)), 'yes');
        $query = $this->db->query($sql, $attr);

        if ($query->num_rows() > 0) {
            foreach ($query->result() as $r) {
                $a_id = $r->u_id;
            }
            $sql2   = "UPDATE `tbl_user` SET `u_loggedin` = ? WHERE `u_id` = ?";
            $param2 = array($dateloggedin, $a_id);
            $this->db->query($sql2, $param2);
            return $query->result();
        } else {
            return false;
        }
    }

    public function m_ajax_check_oldpassword($oldpassword)
    {
        $iterations = 12000;
        $salt       = "~(X.+![@]-N)~";

        $sql = "SELECT `u_id`,`u_password`
                    FROM `tbl_user`
                    WHERE `u_password` = ? AND `u_id` = ? AND `u_isactive` = ?
                    LIMIT 1";
        $attr  = array(base64_encode(hash_pbkdf2("sha256", $oldpassword, $salt, $iterations, 32, true)), $this->session->userdata('u_id'), 'yes');
        $query = $this->db->query($sql, $attr);

        if ($query->num_rows() > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function m_ajax_check_oldusername($oldusername)
    {

        $sql = "SELECT `u_id`,`u_username`
                    FROM `tbl_user`
                    WHERE `u_username` = ? AND `u_id` = ? AND `u_isactive` = ?
                    LIMIT 1";
        $attr  = array($oldusername, $this->session->userdata('u_id'), 'yes');
        $query = $this->db->query($sql, $attr);

        if ($query->num_rows() > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function m_logout()
    {
        $datelogout = date("Y-m-d G:i:s");
        $sql        = "UPDATE `tbl_user` SET `u_loggedout` = ? WHERE `u_id` = ?";
        $param      = array($datelogout, $this->session->userdata('u_id'));
        if ($this->db->query($sql, $param)) {
            $this->session->sess_destroy();
            return true;
        } else {
            return false;
        }
    }

    public function m_ajax_update_password($password)
    {
        $iterations = 12000;
        $salt       = "~(X.+![@]-N)~";

        $sql  = "UPDATE `tbl_user` SET `u_password` = ? WHERE `u_id` = ? AND `u_isactive` = ?";
        $attr = array(base64_encode(hash_pbkdf2("sha256", $password, $salt, $iterations, 32, true)), $this->session->userdata('u_id'), 'yes');
        if ($this->db->query($sql, $attr)) {
            return true;
        } else {
            return false;
        }
    }

    public function m_ajax_update_username($username)
    {
        $sql  = "UPDATE `tbl_user` SET `u_username` = ? WHERE `u_id` = ? AND `u_isactive` = ?";
        $attr = array($username, $this->session->userdata('u_id'), 'yes');
        if ($this->db->query($sql, $attr)) {
            return true;
        } else {
            return false;
        }
    }

    public function m_ajax_check_account($data)
    {
        $sql = "SELECT `u_id`
                FROM `tbl_user`
                WHERE `u_username` = ? AND `u_isactive` = ?";
        $attr  = array($data['u_username'], 'yes');
        $query = $this->db->query($sql, $attr);
        if ($query->num_rows() > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function m_ajax_save_account($data)
    {
        if ($this->db->insert('tbl_user', $data)) {
            return true;
        } else {
            return false;
        }
    }

    public function m_ajax_update_account($data, $id)
    {
        $this->db->where('u_id', $id);
        if ($this->db->update('tbl_user', $data)) {
            return true;
        } else {
            return false;
        }
    }

    public function m_ajax_delete_account($data, $id)
    {
        $this->db->where('u_id', $id);
        if ($this->db->update('tbl_user', $data)) {
            return true;
        } else {
            return false;
        }
    }
}
