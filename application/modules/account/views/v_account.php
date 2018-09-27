<div class="right_col" role="main">
  <div class="clearfix"></div>


<div class="row">


  <div class="col-md-7 col-sm-7 col-xs-12">
    <div class="x_panel">
      <div class="x_title">
        <h2>ACCOUNTS
          <small>TABLE</small>
        </h2>
        <div class="clearfix"></div>
      </div>
      <div class="x_content">

        <div class="form-group">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <table class="cell-border compact hover width-full" id="dt_account" name="dt_account" cellspacing="0" width="100%">
             <thead>
              <tr>
               <th>ID</th>
               <th>USERNAME</th>
               <th>USER LEVEL</th>
               <th>LOGGED-IN</th>
               <th>LOGGED-OUT</th>
               <th>ACTIVE</th>
             </tr>
           </thead>
         </table>
       </div>
     </div>


   </div>
 </div>
</div>

<div class="col-md-5 col-sm-5 col-xs-12">
  <div class="x_panel">
    <div class="x_title">
      <h2>RECORD
        <small>INFORMATION</small>
      </h2>
      <button type="button" id="btn_create" class="btn-sm btn btn-success pull-right"><i class="fa fa-plus"></i> Add New</button>
      <div class="clearfix"></div>
    </div>
    <div class="x_content">

      <div class="form-group">
        <div class="col-md-12 col-sm-12 col-xs-12 pull-right">

          <form id="frm_account" name="frm_account" class="form-horizontal form-label-left">
              <div class="form-group">
                <input type="hidden" id="hid_account" name="hid_account">
                <div class="col-md-6 col-sm-6 col-xs-12">
                  <label for="u_username">USERNAME:</label>
                  <input type="text" id="u_username" class="form-control" name="u_username" readonly="readonly" />
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12">
                    <label for="u_password">PASSWORD:</label>
                  <input type="password" id="u_password" class="form-control" name="u_password" readonly="readonly" />
                  </div>
              </div>
              <div class="form-group">
                <div class="col-md-6 col-sm-6 col-xs-12">
                    <label for="u_level">USER LEVEL:</label>
                    <select id="u_level" name="u_level" class="form-control" disabled="disabled">
                      <option value="">Choose</option>
                      <option value="admin">Admin</option>
                      <option value="accounting">Accounting</option>
                      <option value="hr">HR</option>
                  </select>
                  </div>
                  <div class="col-md-6 col-sm-6 col-xs-12">
                    <label for="u_isactive">ACTIVE:</label>
                    <select id="u_isactive" name="u_isactive" class="form-control" disabled="disabled">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                </div>
              </div>

              <div id="div_btns" class="col-md-12 col-sm-12 col-xs-12" style="display: none;">
                  <div class="form-group">
                    <label>Actions:</label>
                    <div class="ln_solid"></div>
                    <div class="btn-group btn-group-justified" role="group">
                      <div class="btn-group" role="group">
                        <button data-toggle="tooltip" data-placement="bottom" title="Reset the form and refresh the records from Accounts table" class="btn-sm btn btn-default" type="reset" id="btn_default" name="btn_default"><i class="fa fa-refresh"></i> Refresh</button>
                      </div>
                      <div class="btn-group" role="group">
                        <button data-toggle="tooltip" data-placement="bottom" title="Be careful! This will delete selected record from Accounts table" type="submit" class="btn-sm btn btn-danger" id="btn_delete" name="btn_delete"><i class="fa fa-trash-o"></i> Delete</button>
                      </div>
                      <div class="btn-group" role="group">
                        <button data-toggle="tooltip" data-placement="bottom" title="Save this new Accounts record" type="submit" class="btn-sm btn btn-success" id="btn_save" name="btn_save"><i class="fa fa-floppy-o"></i> Save</button>
                      </div>
                    </div>
                  </div>
                </div>


          </form>

        </div>
      </div>

      <div class="clearfix"></div>


  </div>
</div>


</div>



</div>

</div>
