import React from 'react'
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbarone from './User/Navbarone';
import NavbarTwo from './User/NavbarTwo';

const DocumentList = () => {
    return (
        <main className="body-content">
             <Sidebar/>
            <div className="ms-content-wrapper">
            <div className="row">
               <Navbarone/>
               <NavbarTwo/>
               <div class="col-md-12">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb pl-0">
                            <li class="breadcrumb-item">
                                <a href="#"><i class="material-icons">home</i> Home</a>
                            </li>
                            <li class="breadcrumb-item active">Document List</li>
                        </ol>
                    </nav>
                    <div class="ms-panel">
                        <div class="ms-panel-header ms-panel-custome">
                            <h6>Document List</h6><Link class="btn btn-primary" to="/adddocument">Add Document</Link>
                        </div>
                        <div class="ms-panel-body">
                            <div class="table-responsive">
                                <div id="data-table-2_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer"><div class="row"><div class="col-sm-12 col-md-6"><div class="dataTables_length" id="data-table-2_length"><label>Show <select name="data-table-2_length" aria-controls="data-table-2" class="custom-select custom-select-sm form-control form-control-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> </label></div></div><div class="col-sm-12 col-md-6"><div id="data-table-2_filter" class="dataTables_filter"><label><input type="search" class="form-control form-control-sm" placeholder="Search Data..." aria-controls="data-table-2"/></label></div></div></div><div class="row"><div class="col-sm-12"><table class="table table-striped thead-primary w-100 dataTable no-footer" id="data-table-2" role="grid" aria-describedby="data-table-2_info">
                                 <thead>
                 <tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Document Title: activate to sort column descending" Style="width: 110.531px;">Document Title</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Category Name: activate to sort column ascending" Style="width: 112.484px;">Category Name</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Document: activate to sort column ascending" Style="width: 107.828px;">Document</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Description: activate to sort column ascending" Style="width: 133.172px;">Description</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="View &amp;amp; Edit: activate to sort column ascending" Style="width: 75.9844px;">View &amp; Edit</th></tr>
        </thead>
                                   <tbody>
  
                               
                                <tr role="row" class="odd">
                                   
                                    <td class="sorting_1">Lorem Ipsum</td>
                                    <td>Category1</td>
                                    <td><i class="fa fa-file-o" Style="font-size:36px;"></i> Document1</td>
                                    <td>This is test document1</td>
                                   
                                    <td class="center" width="80">
                                        <a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a>
                                    </td>
                                </tr><tr role="row" class="even">
                                   
                                    <td class="sorting_1">Lorem Ipsum</td>
                                    <td>Category2</td>
                                    <td><i class="fa fa-file-o" Style="font-size:36px;"></i> Document2</td>
                                    <td>This is test document2</td>
                                   
                                    <td class="center" width="80">
                                        <a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a>
                                    </td>
                                </tr><tr role="row" class="odd">
                                  
                                    <td class="sorting_1">Lorem Ipsum</td>
                                    <td>Category3</td>
                                    <td><i class="fa fa-file-o" Style="font-size:36px;"></i> Document3</td>
                                    <td>This is test document3</td>
                                   
                                    <td class="center" width="80">
                                        <a href="#"><i class="fa fa-edit" Style="font-size:24px;"></i></a>
                                    </td>
                                   
                                </tr></tbody>
                                </table></div></div><div class="row"><div class="col-sm-12 col-md-5"><div class="dataTables_info" id="data-table-2_info" role="status" aria-live="polite">Showing 1 to 3 of 3 entries</div></div><div class="col-sm-12 col-md-7"><div class="dataTables_paginate paging_simple_numbers" id="data-table-2_paginate"><ul class="pagination has-gap"><li class="paginate_button page-item previous disabled" id="data-table-2_previous"><a href="#" aria-controls="data-table-2" data-dt-idx="0" tabindex="0" class="page-link">Previous</a></li><li class="paginate_button page-item active"><a href="#" aria-controls="data-table-2" data-dt-idx="1" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item next disabled" id="data-table-2_next"><a href="#" aria-controls="data-table-2" data-dt-idx="2" tabindex="0" class="page-link">Next</a></li></ul></div></div></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </main>
    )
}

export default DocumentList
