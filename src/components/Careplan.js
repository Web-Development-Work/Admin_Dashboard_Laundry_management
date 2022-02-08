import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbarone from './User/Navbarone';


const Careplan = () => {
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
              <li class="breadcrumb-item active">Careplan <Link class="btn btn-primary" to="/createcareplan" Style="float:right; margin-top:0px;">Create New</Link></li>
            </ol>
          </nav>
          
          <div class="ms-panel">
                       
                        <div class="ms-panel-body">
                            <div class="section_box1_content2" Style="padding: 0px 10px 0px 10px;">
                            <div class="row">
                                <div class="col-sm-12" Style="padding: 0px; margin-bottom: 20px;">
                                    <div class="tab_menus" Style="float:left;">
                                        <ul>
                                            <li class="active"><a href="#" class="active">Current</a></li>
                                            <li><a href="javascript:void(0)">Previous</a></li>
                                            <li><a href="javascript:void(0)">Due</a></li>
                                            <li><a href="javascript:void(0)">Over Due</a></li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div class="table-responsive">
                                <div id="data-table-2_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer"><div class="row"><div class="col-sm-12 col-md-6"><div class="dataTables_length" id="data-table-2_length"><label>Show <select name="data-table-2_length" aria-controls="data-table-2" class="custom-select custom-select-sm form-control form-control-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> </label></div></div><div class="col-sm-12 col-md-6"><div id="data-table-2_filter" class="dataTables_filter"><label><input type="search" class="form-control form-control-sm" placeholder="Search Data..." aria-controls="data-table-2"/></label></div></div></div><div class="row"><div class="col-sm-12"><table class="table table-striped thead-primary w-100 dataTable no-footer" id="data-table-2" role="grid" aria-describedby="data-table-2_info">
                                 <thead>
                 <tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Date &amp;amp; Time: activate to sort column descending" Style="width: 94.3594px;">Date &amp; Time</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Conducted By: activate to sort column ascending" Style="width: 81.3438px;">Conducted By</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Area: activate to sort column ascending" Style="width: 26.6875px;">Area</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" Style="width: 59.5938px;">Status</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Next Review: activate to sort column ascending" Style="width: 100.391px;">Next Review</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Closed: activate to sort column ascending" Style="width: 40.0156px;">Closed</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Source: activate to sort column ascending" Style="width: 40.6875px;">Source</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Complete Status: activate to sort column ascending" Style="width: 94.6875px;">Complete Status</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="View &amp;amp; Edit: activate to sort column ascending" Style="width: 65.1406px;">View &amp; Edit</th></tr>
        </thead>
                                   <tbody>
                                    
                                  
                                  
                                  
                                  
                                  
                                  
                                  
                                
                               <tr role="row" class="odd">
                                    
                                    <td class="sorting_1">10/12/2021 10:30 PM</td>
                                    <td>Ronak batra</td> 
                                    <td></td>
                                    <td>  <label class="toggleSwitch nolabel" onclick="">
                                    <input type="checkbox" checked=""/>
                                    <span>
                                    <span>Inactive</span>
                                    <span>Active</span>
                                      </span>
                                     <a></a>
                                    </label></td>
                                    <td><span class="badge badge-danger">Overdue</span> 17/11/2021</td>
                                    <td><span class="badge badge-square badge-success">No</span></td>
                                    <td>Wounds</td>
                                    <td><span class="badge badge-square badge-success">Completed</span></td> 
                                    <td class="center" width="80">
                                        <a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a> 
                                    </td>
                                  </tr><tr role="row" class="even">
                                    
                                    <td class="sorting_1">10/12/2021 10:30 PM</td>
                                    <td>Johny Tylor</td> 
                                    <td></td>
                                    <td>  <label class="toggleSwitch nolabel" onclick="">
                                    <input type="checkbox" checked=""/>
                                    <span>
                                    <span>Inactive</span>
                                    <span>Active</span>
                                      </span>
                                     <a></a>
                                    </label></td>
                                    <td><span class="badge badge-danger">Overdue</span> 17/11/2021</td>
                                    <td><span class="badge badge-square badge-success">No</span></td>
                                    <td>Wounds</td>
                                    <td><span class="badge badge-square badge-success">Completed</span></td> 
                                    <td class="center" width="80">
                                        <a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a> 
                                    </td>
                                  </tr><tr role="row" class="odd">
                                    
                                    <td class="sorting_1">10/12/2021 10:30 PM</td>
                                    <td>Meldohi jenni</td> 
                                    <td></td>
                                    <td>  <label class="toggleSwitch nolabel" onclick="">
                                    <input type="checkbox" checked=""/>
                                    <span>
                                    <span>Inactive</span>
                                    <span>Active</span>
                                      </span>
                                     <a></a>
                                    </label></td>
                                    <td><span class="badge badge-danger">Overdue</span> 17/11/2021</td>
                                    <td><span class="badge badge-square badge-success">No</span></td>
                                    <td>Wounds</td>
                                    <td><span class="badge badge-square badge-success">Completed</span></td> 
                                    <td class="center" width="80">
                                        <a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a> 
                                    </td>
                                  </tr><tr role="row" class="even">
                                    
                                    <td class="sorting_1">10/12/2021 10:30 PM</td>
                                    <td>Jameel iqball</td> 
                                    <td></td>
                                    <td>  <label class="toggleSwitch nolabel" onclick="">
                                    <input type="checkbox" checked=""/>
                                    <span>
                                    <span>Inactive</span>
                                    <span>Active</span>
                                      </span>
                                     <a></a>
                                    </label></td>
                                    <td><span class="badge badge-danger">Overdue</span> 17/11/2021</td>
                                    <td><span class="badge badge-square badge-success">No</span></td>
                                    <td>Wounds</td>
                                    <td><span class="badge badge-square badge-success">Completed</span></td> 
                                    <td class="center" width="80">
                                        <a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a> 
                                    </td>
                                  </tr><tr role="row" class="odd">
                                    
                                    <td class="sorting_1">10/12/2021 10:30 PM</td>
                                    <td>Jwwry Thomaas</td> 
                                    <td></td>
                                    <td>  <label class="toggleSwitch nolabel" onclick="">
                                    <input type="checkbox" checked=""/>
                                    <span>
                                    <span>Inactive</span>
                                    <span>Active</span>
                                      </span>
                                     <a></a>
                                    </label></td>
                                    <td><span class="badge badge-danger">Overdue</span> 17/11/2021</td>
                                    <td><span class="badge badge-square badge-success">No</span></td>
                                    <td>Wounds</td>
                                    <td><span class="badge badge-square badge-success">Completed</span></td> 
                                    <td class="center" width="80">
                                        <a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a> 
                                    </td>
                                  </tr><tr role="row" class="even">
                                    
                                    <td class="sorting_1">10/12/2021 10:30 PM</td>
                                    <td>Petrix lovis</td> 
                                    <td></td>
                                    <td>  <label class="toggleSwitch nolabel" onclick="">
                                    <input type="checkbox" checked=""/>
                                    <span>
                                    <span>Inactive</span>
                                    <span>Active</span>
                                      </span>
                                     <a></a>
                                    </label></td>
                                    <td><span class="badge badge-danger">Overdue</span> 17/11/2021</td>
                                    <td><span class="badge badge-square badge-success">No</span></td>
                                    <td>Wounds</td>
                                    <td><span class="badge badge-square badge-success">Completed</span></td> 
                                    <td class="center" width="80">
                                        <a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a> 
                                    </td>
                                  </tr></tbody>
                                </table></div></div><div class="row"><div class="col-sm-12 col-md-5"><div class="dataTables_info" id="data-table-2_info" role="status" aria-live="polite">Showing 1 to 6 of 6 entries</div></div><div class="col-sm-12 col-md-7"><div class="dataTables_paginate paging_simple_numbers" id="data-table-2_paginate"><ul class="pagination has-gap"><li class="paginate_button page-item previous disabled" id="data-table-2_previous"><a href="#" aria-controls="data-table-2" data-dt-idx="0" tabindex="0" class="page-link">Previous</a></li><li class="paginate_button page-item active"><a href="#" aria-controls="data-table-2" data-dt-idx="1" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item next disabled" id="data-table-2_next"><a href="#" aria-controls="data-table-2" data-dt-idx="2" tabindex="0" class="page-link">Next</a></li></ul></div></div></div></div>
                            </div>
                        </div>
                    </div>
          </div>
        </div>


    </div>
</main>
  );
};

export default Careplan;
