import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbarone from './User/Navbarone';


const CreateRisk = () => {
  return(
    <main className="body-content">
    <Sidebar/>
    <div className="ms-content-wrapper">
        <div className="row">
            <Navbarone/>
            <div class="col-md-12">
                  <nav aria-label="breadcrumb">
                     <ol class="breadcrumb pl-0">
                        <li class="breadcrumb-item"><a href="#"><i class="material-icons">home</i> Home</a></li>
                      
                        <li class="breadcrumb-item active" aria-current="page">Create Risk</li>
                     </ol>
                  </nav>
            </div>


            <div class="col-xl-12 col-md-12">
                  <div class="ms-panel">
                     
                     <div class="ms-panel-body">
                        <form class="needs-validation" novalidate="">
                           <div class="form-row">
                              <div class="col-md-4 mb-3">
                                 <label for="validationCustom001">Select Risk Area</label>
                                 <div class="input-group">
                                    <select class="form-control" id="validationCustom230" required="">
                                        <option value="">Select Risk Area</option>
                                       <option value="">Brathing</option>
                                       <option value="">Caugh</option>
                                        <option value="">Incident</option>
                                        <option value="">Bed Rails Assessment</option>
                                        <option value="">Falls</option>
                                        <option value="">Accident</option>
                                        
                                    </select>

                                 </div>
                              </div>
                              <div class="col-md-4 mb-3">
                                 <label for="validationCustom001">Risk Level</label>
                                 <div class="input-group">
                                    <select class="form-control" id="validationCustom230" required="">
                                        <option value="">Risk Level</option>
                                       <option value="">Low</option>
                                       <option value="">Medium</option>
                                       <option value="">High</option>
                                      
                                    </select>

                                 </div>
                              </div>
                              
                              <div class="col-md-4 mb-3">
                                 <label for="validationCustom001">Conducted by</label>
                                 <div class="input-group">
                                    <select class="form-control" id="validationCustom230" required="">
                                        <option value="">Select Staff</option>
                                       <option value="">John doe</option>
                                       <option value="">Raxon Mary</option>
                                        <option value="">Tokder kelly</option>
                                    </select>

                                 </div>
                              </div>
                              
                           </div>
                           <div class="form-row">
                                 <div class="col-md-4 mb-2">
                                 <label for="validationCustom004">Case Id</label>
                                 <div class="input-group">
                                    <input type="text" class="form-control" id="validationCustom004" required=""/>

                                 </div>
                              </div>
                              <div class="col-md-4 mb-2">
                                 <label for="validationCustom004">Date</label>
                                 <div class="input-group">
                                    <input type="date" class="form-control" id="validationCustom004" required=""/>

                                 </div>
                              </div>
                              <div class="col-md-4 mb-2">
                                 <label for="validationCustom003">Time</label>
                                 <div class="input-group">
                                    <input type="time" class="form-control" id="validationCustom003" required=""/>

                                 </div>
                              </div>
                           </div>
                           <div class="form-row">
                               <div class="col-md-4 mb-2">
                                 <label for="validationCustom004">Last Assessment</label>
                                 <div class="input-group">
                                    <input type="date" class="form-control" id="validationCustom004" required=""/>

                                 </div>
                              </div>
                              <div class="col-md-4 mb-3">
                                 <label for="validationCustom001">Select Risk Sub Area</label>
                                 <div class="input-group">
                                    <select class="form-control" id="validationCustom230" required="">
                                        <option value="">Select Risk Sub Area</option>
                                       <option value="">Brathing</option>
                                       <option value="">Caugh</option>
                                        <option value="">Incident</option>
                                        <option value="">Bed Rails Assessment</option>
                                        <option value="">Falls</option>
                                        <option value="">Accident</option>
                                        
                                    </select>

                                 </div>
                              </div>
                           </div>
                          
                           

                     </form></div>
                  </div>
                  <div class="col-md-12" Style="padding:0px;">
     
            <div class="row selectmodals">
               <div class="col-md-6">
                    <div class="ms-panel ms-panel-fh">
                     <div class="ms-panel-header">
                        <h6>Select Roles <a href="#" Style="float:right" data-toggle="modal" data-target="#selectroles"><i class="fa fa-plus" Style="font-size:16px; color: gray;"></i></a></h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                      
                      <div class="selecteditems">
                      </div>
                     
                          
                          
                        </div>
                     </div>
               </div>
               {/* <!-- <div class="col-md-6">-->
               <!--     <div class="ms-panel ms-panel-fh">-->
               <!--      <div class="ms-panel-header">-->
               <!--         <h6>Select Objective <a href="#" Style="float:right" data-toggle="modal" data-target="#selectobjective"><i class="fa fa-plus" Style="font-size:16px; color: gray;"></i></a></h6>-->
               <!--      </div>-->
               <!--      <div class="ms-panel-body clearfix">-->
               <!--       <div class="selecteditems">-->
               <!--       </div>-->
               <!--         </div>-->
               <!--      </div>-->
               <!--</div>-->*/}
                <div class="col-md-6"> 
                    <div class="ms-panel ms-panel-fh">
                     <div class="ms-panel-header">
                        <h6>Select Action Plan <a href="#" Style="float:right" data-toggle="modal" data-target="#selectplan"><i class="fa fa-plus" Style="font-size:16px; color: gray;"></i></a></h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                      
                      <div class="selecteditems">
                      </div>  
                          
                        </div>
                     </div>
               </div>
                <div class="col-md-6">
                    <div class="ms-panel ms-panel-fh">
                     <div class="ms-panel-header">
                        <h6>Select Desired Outcome <a href="#" Style="float:right" data-toggle="modal" data-target="#selectoutcome"><i class="fa fa-plus" Style="font-size:16px; color: gray;"></i></a></h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                      
                     <div class="selecteditems">
                      </div>
                    
                           
                          
                          
                        </div>
                     </div>
               </div>
               <div class="col-md-6">
                    <div class="ms-panel ms-panel-fh">
                  
                     <div class="ms-panel-body clearfix">
                      
                     <div class="form-row">
                                 <div class="col-md-12 mb-3">
                                 <label for="validationCustom001">Approved by</label>
                                 <div class="input-group">
                                    <select class="form-control" id="validationCustom230" required="">
                                        <option value="">Select Staff</option>
                                       <option value="">John doe</option>
                                       <option value="">Raxon Mary</option>
                                        <option value="">Tokder kelly</option>
                                    </select>

                                 </div>
                              </div>   
                              <div class="col-md-12 mb-2">
                                 <label for="validationCustom004">Approved Date</label>
                                 <div class="input-group">
                                    <input type="date" class="form-control" id="validationCustom004" required=""/>

                                 </div>
                              </div>
                                
                             
                           </div>
                    
                           
                          
                          
                        </div>
                     </div>
               </div>
                
              
           </div>
              
          </div>
                  
                    <div class="ms-panel">
                     
                     <div class="ms-panel-body">
                          
                           
                            
                            <div class="form-row">
                               
                               <div class="col-md-6 mb-2">
                                
                                 <div class="input-group">
                                 <label><span><input type="checkbox"/></span> Review Required</label>
                               

                                 </div>
                              </div>
                               <div class="col-md-6 mb-3">
                                 <label for="validationCustom001">Upload Attachment</label>
                                                        <div class="input-group">
      <input id="uploadFile" placeholder="Upload Photo" disabled="disabled" class="form-control"/>
      <span class="input-group-addon"> <label class="btn btn-primary" Style="padding: 0.5rem 1rem;
    margin-top: 0px;border-radius: 0px;"><input id="uploadBtn" type="file" Style="display:none;"/> Upload</label> </span>   
    </div>
                              </div>
                             </div> 
                               <div class="form-row">
                               <div class="col-md-6 mb-2">
                                 <label for="validationCustom004">Next Review Date</label>
                                 <div class="input-group">
                                    <input type="date" class="form-control" id="validationCustom004" required=""/>

                                 </div>
                               </div>
                                <div class="col-md-6 mb-3">
                                 <label for="validationCustom001">Created by</label>
                                 <div class="input-group">
                                    <select class="form-control" id="validationCustom230" required="">
                                        <option value="">Select Staff</option>
                                       <option value="">John doe</option>
                                       <option value="">Raxon Mary</option>
                                        <option value="">Tokder kelly</option>
                                    </select>

                                 </div>
                              </div>
                             
                           </div>
                           
                              <div class="form-row">
                               <div class="col-md-12 mb-2">
                                 <label for="validationCustom004">Previous Notes</label>
                                 <div class="input-group">
                                   <textarea class="form-control" placeholder="Previous Notes"></textarea>

                                 </div>
                              </div>
                               <div class="col-md-12 mb-2">
                                 <label for="validationCustom004">Notes</label>
                                 <div class="input-group">
                                   <textarea class="form-control" placeholder="Notes"></textarea>

                                 </div>
                              </div>
                             
                           </div>
                           
                         
                            <button class="btn btn-primary mt-4 d-inline w-20" type="submit">Create New</button>
                            <button class="btn btn-primary mt-4 d-inline w-20" type="submit">Back</button>
                        
                      </div>
                  </div>
               </div>
        </div>
    </div>
</main>
  );
};

export default CreateRisk;
