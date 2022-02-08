import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbarone from './User/Navbarone';

const Vital = () => {
  return(
    <main className="body-content">
    <Sidebar/>
    <div className="ms-content-wrapper">
       
        <div className="row">
            <Navbarone/>
            <div class="col-md-12">
               <nav aria-label="breadcrumb">
            <ol class="breadcrumb pl-0">
              <li class="breadcrumb-item">
                <a href="#"><i class="material-icons">home</i> Home</a>
              </li>
              <li class="breadcrumb-item active">Vitals 
              <a class="btn btn-primary" href="javascript:void(0)" Style="float:right; margin-top:0px;" data-toggle="modal" data-target="#createvital">Create New</a></li>
            </ol>
          </nav>
          <div class="ms-panel">
                      
                        <div class="ms-panel-body">
                            <div class="table-responsive">
                                <div id="data-table-2_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer"><div class="row"><div class="col-sm-12 col-md-6"><div class="dataTables_length" id="data-table-2_length"><label>Show <select name="data-table-2_length" aria-controls="data-table-2" class="custom-select custom-select-sm form-control form-control-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> </label></div></div><div class="col-sm-12 col-md-6"><div id="data-table-2_filter" class="dataTables_filter"><label><input type="search" class="form-control form-control-sm" placeholder="Search Data..." aria-controls="data-table-2"/></label></div></div></div><div class="row"><div class="col-sm-12"><table class="table table-striped thead-primary w-100 dataTable no-footer" id="data-table-2" role="grid" aria-describedby="data-table-2_info">
                                 <thead>
                 <tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-sort="ascending" aria-label="DATE: activate to sort column descending" Style="width: 39.6562px;">DATE</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="TIME: activate to sort column ascending" Style="width: 30.9688px;">TIME</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="WEIGHT: activate to sort column ascending" Style="width: 48px;">WEIGHT</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="HEIGHT: activate to sort column ascending" Style="width: 45.3438px;">HEIGHT</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="BMI: activate to sort column ascending" Style="width: 22px;">BMI</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="HEARTRATE: activate to sort column ascending" Style="width: 73.1094px;">HEARTRATE</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="BP: activate to sort column ascending" Style="width: 16.6719px;">BP</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="SO2: activate to sort column ascending" Style="width: 24.0156px;">SO2</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="TEMP: activate to sort column ascending" Style="width: 33.3438px;">TEMP</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="CHOLESTROL: activate to sort column ascending" Style="width: 82.6719px;">CHOLESTROL</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="RESPIRATION RATE: activate to sort column ascending" Style="width: 116.234px;">RESPIRATION RATE</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="BLOOD GLUCOSE: activate to sort column ascending" Style="width: 106.016px;">BLOOD GLUCOSE</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="PAIN: activate to sort column ascending" Style="width: 27.7812px;">PAIN</th></tr>
        </thead>
                                   <tbody>
  
                                
                               <tr role="row" class="odd">
                                    
                                    <td class="sorting_1">10/12/2021</td>
                                    <td> 10:30 PM</td>
                                    <td>80</td>
                                    <td></td> 
                                    <td>0</td> 
                                    <td></td>
                                    <td>80/120</td>
                                    <td>2</td>
                                    <td>37</td>
                                    <td></td>
                                    <td>2</td>
                                    <td></td>
                                    <td>7</td>
                                </tr></tbody>
                                </table></div></div><div class="row"><div class="col-sm-12 col-md-5"><div class="dataTables_info" id="data-table-2_info" role="status" aria-live="polite">Showing 1 to 1 of 1 entries</div></div><div class="col-sm-12 col-md-7"><div class="dataTables_paginate paging_simple_numbers" id="data-table-2_paginate"><ul class="pagination has-gap"><li class="paginate_button page-item previous disabled" id="data-table-2_previous"><a href="#" aria-controls="data-table-2" data-dt-idx="0" tabindex="0" class="page-link">Previous</a></li><li class="paginate_button page-item active"><a href="#" aria-controls="data-table-2" data-dt-idx="1" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item next disabled" id="data-table-2_next"><a href="#" aria-controls="data-table-2" data-dt-idx="2" tabindex="0" class="page-link">Next</a></li></ul></div></div></div></div>
                            </div>
                        </div>
                    </div>
          </div>
        </div>

        <div class="new_modals">
                <div class="modal fade none-border" id="createvital" Style="display: none;" aria-hidden="true">

                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                               <h4 class="modal-title"><strong>Add Vitals</strong></h4>
                               <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                                <div class="modal_save">
                                    <button class="btn btn-success " type="button" onclick="SavePatients()">Save</button>
                                </div>

                               
                            </div>
                            <div class="row cal_m">
                                <div class="modal_contents">

                                    <div role="form">
                                        <div class="row">
                                           
                                            <div class="col-sm-3 col-lg-3">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Date <span class="man_fields1">*</span></label>
                                                    <input type="date" class="form-control"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-3 col-lg-3">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Time <span class="man_fields1">*</span></label>
                                                    <input type="time" class="form-control"/>
                                                </div>
                                            </div>
                                             <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Height <span class="man_fields1">*</span></label>
                                                      <input type="number" class="form-control" maxlength="50"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                           <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Weight <span class="man_fields1">*</span></label>
                                                      <input type="number" class="form-control" maxlength="50"/>
                                                </div>
                                            </div>
                                           <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">BMI <span class="man_fields1">*</span></label>
                                                      <input type="number" class="form-control" maxlength="50"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                           
                                           <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Heartrate <span class="man_fields1">*</span></label>
                                                      <input type="number" class="form-control" maxlength="50"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-3 col-lg-3">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">BP(Systolic) <span class="man_fields1">*</span></label>
                                                      <input type="number" class="form-control" maxlength="50"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-3 col-lg-3">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">BP(Diastolic) <span class="man_fields1">*</span></label>
                                                      <input type="number" class="form-control" maxlength="50"/>
                                                </div>
                                            </div>
                                        </div>
                                         <div class="row">
                                             <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">SO2</label>
                                                    <input type="number" class="form-control"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Temp</label>
                                                    <input type="number" class="form-control"/>
                                                </div>
                                            </div>
                                         </div>
                                         <div class="row">
                                             <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Cholestrol</label>
                                                    <input type="number" class="form-control"/>
                                                </div>
                                            </div>
                                             <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Respiration Rate</label>
                                                    <input type="number" class="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        
                                         <div class="row">
                                             <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Blood Glucose</label>
                                                    <input type="number" class="form-control"/>
                                                </div>
                                            </div>
                                             <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Pain</label>
                                                    <input type="number" class="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                         <div class="row">
                                             <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    Any Supplement Oxygen <br/><br/>
                                                    <label><span><input type="checkbox"/></span> Yes</label>&nbsp;&nbsp;
                                                    <label><span><input type="checkbox"/></span> No</label>
                                                </div>
                                            </div>
                                             <div class="col-sm-6 col-lg-6">
                                                <div class="form-group">
                                                    Level of Consciousness <br/><br/>
                                                    <label><span><input type="checkbox"/></span> A</label>&nbsp;&nbsp;
                                                    <label><span><input type="checkbox"/></span> V</label>&nbsp;&nbsp;
                                                    <label><span><input type="checkbox"/></span> P</label>&nbsp;&nbsp;
                                                    <label><span><input type="checkbox"/></span> U</label>
                                                </div>
                                            </div>
                                        </div>
                                        
                                
                               

                                 </div>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
        </div>
    </div>
</main>
  );
};

export default Vital;
