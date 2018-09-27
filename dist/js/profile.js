$(function() {
    $('#frm_changeusername').formValidation({
        framework: "bootstrap",
        button: {
            selector: '#btn_changeusername',
            disabled: 'disabled'
        },
        icon: null,
        fields: {
            old_username: {
                validators: {
                    notEmpty: {
                        message: 'Your old username is required'
                    },
                    stringLength: {
                        min: 6,
                        max: 30
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9]+$/
                    }
                }
            },
            new_username: {
                validators: {
                    notEmpty: {
                        message: 'Your new username is required'
                    },
                    stringLength: {
                        min: 6,
                        max: 30
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9]+$/
                    }
                }
            }
        }
    }).on('success.form.fv', function(e) {
        e.preventDefault();
        var $form = $(e.target),
            fv = $form.data('formValidation');
        $.ajax({
            dataType: 'json',
            type: 'post',
            url: base_url + "account/update_username",
            data: $('#frm_changeusername').serialize() + "&isSubmit=" + 1,
            beforeSend: function() {
                toastr.info('Saving new username!', 'Please wait...');
                $('#btn_changeusername').prop('disabled', true);
            },
            success: function(data) {
                if (data.status == "yes") {
                    $('#btn_changeusername').prop('disabled', false);
                    $('#frm_changeusername')[0].reset();
                    toastr.clear();
                    toastr.success(data.content, data.title);
                } else {
                    $('#btn_changeusername').prop('disabled', false);
                    $('#frm_changeusername')[0].reset();
                    toastr.clear();
                    toastr.error(data.content, data.title);
                }
            },
            error: function(jqXHR, exception) {
                $('#btn_changeusername').prop('disabled', false);
                $('#frm_changeusername')[0].reset();
                toastr.clear();
                toastr.error('Connection problems occurred... Unable to connect to the Internet! The Internet connection has been lost.', 'Error...');
            }
        });
    });
    $('#frm_changepassword').formValidation({
        framework: "bootstrap",
        button: {
            selector: '#btn_changepassword',
            disabled: 'disabled'
        },
        icon: null,
        fields: {
            old_password: {
                validators: {
                    notEmpty: {
                        message: 'Your old password is required'
                    },
                    stringLength: {
                        min: 6,
                        max: 30
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9]+$/
                    }
                }
            },
            new_password: {
                validators: {
                    notEmpty: {
                        message: 'Your new password is required'
                    },
                    stringLength: {
                        min: 6,
                        max: 30
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9]+$/
                    }
                }
            },
            confirm_password: {
                validators: {
                    identical: {
                        field: 'new_password',
                        message: 'Your new password and confirm password are not the same!'
                    }
                }
            }
        }
    }).on('success.form.fv', function(e) {
        e.preventDefault();
        var $form = $(e.target),
            fv = $form.data('formValidation');
        $.ajax({
            dataType: 'json',
            type: 'post',
            url: base_url + "account/update_password",
            data: $('#frm_changepassword').serialize() + "&isSubmit=" + 1,
            beforeSend: function() {
                toastr.info('Saving new password!', 'Please wait...');
                $('#btn_changepassword').prop('disabled', true);
            },
            success: function(data) {
                if (data.status == "yes") {
                    $('#btn_changepassword').prop('disabled', false);
                    $('#frm_changepassword')[0].reset();
                    toastr.clear();
                    toastr.success(data.content, data.title);
                } else {
                    $('#btn_changepassword').prop('disabled', false);
                    $('#frm_changepassword')[0].reset();
                    toastr.clear();
                    toastr.error(data.content, data.title);
                }
            },
            error: function(jqXHR, exception) {
                $('#btn_changepassword').prop('disabled', false);
                $('#frm_changepassword')[0].reset();
                toastr.clear();
                toastr.error('Connection problems occurred... Unable to connect to the Internet! The Internet connection has been lost.', 'Error...');
            }
        });
    });
});