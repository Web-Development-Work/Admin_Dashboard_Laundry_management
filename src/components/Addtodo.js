import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';

const Addtodo = () => {
  return(
    <main className="body-content">
        <Sidebar/>
        <div class="ms-content-wrapper">
            <div class="row">
               <div class="col-md-12">
                  <nav aria-label="breadcrumb">
                     <ol class="breadcrumb pl-0">
                        <li class="breadcrumb-item"><a href="#"><i class="material-icons">home</i> Home</a></li>
                      
                        <li class="breadcrumb-item active" aria-current="page">Add To-do</li>
                     </ol>
                  </nav>
               </div>
               <div class="col-xl-12 col-md-12">
                  <div class="ms-panel">
                     <div class="ms-panel-header ms-panel-custome">
                        <h6>Add To-do</h6>
                        <Link to="/todolist" class="btn btn-primary">To Do List
                        </Link>
                     </div>
                     <div class="ms-panel-body">
                        <form class="needs-validation" novalidate="">
                           <div class="form-row">
                              <div class="col-md-6 mb-3">
                                 <label for="validationCustom002">Choose a Category</label>
                                 <div class="input-group">
                                    <select class="form-control" id="validationCustom230" required="">
                                        <option value="">Select</option>
                                       <option value="">Food and drink</option>
                                       <option value="">Clinical care</option>
                                        <option value="">Health Recording</option>
                                        <option value="">Personal Care</option>
                                        <option value="">Activities and Social</option>
                                        <option value="">Health Visit</option>
                                        <option value="">Incident</option>
                                        <option value="">Handover</option>
                                    </select>

                                 </div>
                              </div>
                           
                              <div class="col-md-6 mb-3">
                                 <label for="validationCustom005">Title</label>
                                 <div class="input-group">
                                    <input type="text" class="form-control" id="validationCustom005" required=""/>

                                 </div>
                              </div>
                            
                           </div>

                        <div class="form-row">
                             
                              <div class="col-md-12 mb-3">
                                 <label>Description</label>
                                 <div class="input-group">
                                   <textarea class="form-control"></textarea>

                                 </div>
                              </div>
                           </div>
                           <div class="form-row">
                             <div class="col-md-12 mb-3">
                            <h6 Style="font-weight:600">When is a good time to start?</h6>
                        </div>
                              <div class="col-md-6 mb-2">
                                 <label for="validationCustom004">Date</label>
                                 <div class="input-group">
                                    <input type="date" class="form-control" id="validationCustom004" required=""/>

                                 </div>
                              </div>
                              <div class="col-md-6 mb-2">
                                 <label for="validationCustom003">Time</label>
                                 <div class="input-group">
                                    <input type="time" class="form-control" id="validationCustom003" required=""/>

                                 </div>
                              </div>
                           </div>
                                <div class="form-row">
                               <div class="col-md-12 mb-3">     
                              <h6 Style="font-weight:600">Who's it for</h6>
                          </div>
                              <div class="col-md-12 mb-3">
                                 <label for="validationCustom001">Assign service users</label>
                                 <div class="input-group">
                                    <select class="form-control" id="validationCustom230" required="">
                                        <option value="">Select</option>
                                       <option value="">John doe</option>
                                       <option value="">Raxon Mary</option>
                                        <option value="">Tokder kelly</option>
                                    </select>

                                 </div>
                              </div>
                            
                           </div>
                          
                           <div class="form-row">
                              <div class="col-md-12 mb-2">

                                <ul class="ms-list ms-list-display">
                                                <li>
                                                    <label class="ms-checkbox-wrap ms-checkbox-primary">
                                                    <input type="checkbox" value=""/>
                                                    <i class="ms-checkbox-check"></i>
                                                    </label>
                                                    <span> Require a second signature? </span>
                                                </li>
                                                <li>
                                                    <label class="ms-checkbox-wrap ms-checkbox-secondary">
                                                    <input type="checkbox" value=""/>
                                                    <i class="ms-checkbox-check"></i>
                                                    </label>
                                                    <span> Require doctor to add a daily log after completing? </span>
                                                </li>
                                               
                                            </ul>
                              </div>
                             
                           </div>
                         
                           <button class="btn btn-primary mt-4 d-inline w-20" type="submit">Add To-do</button>
                        </form>

                     </div>
                  </div>
               </div>
            </div>
         </div>
    </main>
  );
};

export default Addtodo;
