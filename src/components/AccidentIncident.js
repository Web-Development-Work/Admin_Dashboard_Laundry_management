import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbarone from './User/Navbarone';


const AccidentIncident = () => {
  return (
    <main className="body-content">
    <Sidebar/>
    <div className="ms-content-wrapper">
        <div className="row">
            <Navbarone/>

            <div class="col-md-12">
                  <nav aria-label="breadcrumb">
                     <ol class="breadcrumb pl-0">
                        <li class="breadcrumb-item"><a href="#"><i class="material-icons">home</i> Home</a></li>
                      
                        <li class="breadcrumb-item active" aria-current="page">Create / Update Accident &amp; Incident </li>
                     </ol>
                  </nav>
            </div>

            <div class="col-xl-12 col-md-12">
                  <div class="ms-panel">
                     
                     <div class="ms-panel-body">
                        <form class="needs-validation" novalidate="">
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
                              <div class="col-md-4 mb-3">
                                 <label for="validationCustom001">Reported by</label>
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
                                 <label for="validationCustom003">Location</label>
                                 <div class="input-group">
                                    <input type="text" class="form-control" id="validationCustom003" required=""/>

                                 </div>
                              </div>
                                <div class="col-md-4 mb-2">
                                 <label for="validationCustom003">Risk Level</label>
                                 <div class="input-group">
                                     <select class="form-control" id="validationCustom230" required="">
                                        <option value="">Select Risk Level</option>
                                       <option value="">High</option>
                                       <option value="">Medium</option>
                                        <option value="">Low</option>
                                    </select>

                                 </div>
                              </div>
                               <div class="col-md-4 mb-2">
                                 <label for="validationCustom003">Type</label>
                                 <div class="input-group">
                                     <select class="form-control" id="validationCustom230" required="">
                                        <option value="">Select Type</option>
                                       <option value="">Test</option>
                                      
                                      
                                    </select>

                                 </div>
                              </div>
                           </div>
                            <div class="form-row">
                               <div class="col-md-4 mb-2">
                                 <label for="validationCustom003">People Involved</label>
                                 <div class="input-group">
                                    <input type="text" class="form-control" id="validationCustom003" required=""/>

                                 </div>
                              </div>
                                <div class="col-md-4 mb-2">
                                 <label for="validationCustom003">Witness</label>
                                 <div class="input-group">
                                    <input type="text" class="form-control" id="validationCustom003" required=""/>

                                 </div>
                              </div>
                               <div class="col-md-4 mb-2">
                                 <label for="validationCustom003">Fatality</label>
                                 <div class="input-group">
                                     <select class="form-control" id="validationCustom230" required="">
                                        <option value="">No</option>
                                       <option value="">Yes</option>
                                      
                                      
                                    </select>

                                 </div>
                              </div>
                           </div>

                          
                          
                           <div class="form-row">
                                 <div class="col-md-12 mb-2">
                                <label><strong>Indicate Type of Injury (Select If Any)</strong> </label>
                                </div>
                              <div class="col-md-3 mb-2">
                                
                                 
                                 <label><span><input type="checkbox"/></span> Bruising, Contusion</label><br/>
                                <label><span><input type="checkbox"/></span> Interal Injury</label><br/>
                                <label><span><input type="checkbox"/></span> Infection</label><br/>
                                <label><span><input type="checkbox"/></span> Ear Injury</label><br/>
                                 <label><span><input type="checkbox"/></span> Dislocation</label>

                                 
                              </div>
                              <div class="col-md-3 mb-2">
                                 
                                 
                                    <label><span><input type="checkbox"/></span> Anxiety</label><br/>
                                <label><span><input type="checkbox"/></span> Suffocation</label><br/>
                                <label><span><input type="checkbox"/></span> Panic Attack</label><br/>
                                <label><span><input type="checkbox"/></span> Head Internal Injury</label><br/>
                                <label><span><input type="checkbox"/></span> Foot Injury</label>
                                 </div>
                               <div class="col-md-3 mb-2">
                                 
                                 
                                    <label><span><input type="checkbox"/></span> Ampution</label><br/>
                                <label><span><input type="checkbox"/></span> Open Wounds</label><br/>
                                <label><span><input type="checkbox"/></span> Close Fracture</label><br/>
                                <label><span><input type="checkbox"/></span> Hand Fracture</label>
                              
                                
                              </div>
                              <div class="col-md-3 mb-2">
                                 
                               
                                    <label><span><input type="checkbox"/></span> Gassing</label><br/>
                                <label><span><input type="checkbox"/></span> Poisoning</label><br/>
                                <label><span><input type="checkbox"/></span> Electrical Injury</label><br/>
                                <label><span><input type="checkbox"/></span> Burn, scalds &amp; frostbite</label>
                               
                                 
                              </div>
                           </div>
                           
                             <div class="form-row">
                                 <div class="col-md-12 mb-2">
                                <label><strong>Indicate Part of body Injured (Select If Any)</strong> </label>
                                </div>
                              <div class="col-md-3 mb-2">
                                
                                
                                 <label><span><input type="checkbox"/></span> Head Injury</label><br/>
                                <label><span><input type="checkbox"/></span> Neck</label><br/>
                                <label><span><input type="checkbox"/></span> Chest</label><br/>
                                <label><span><input type="checkbox"/></span> Finger (one or more)</label><br/>
                                 <label><span><input type="checkbox"/></span> Knee Joint </label>

                              
                              </div>
                              <div class="col-md-3 mb-2">
                                 
                              
                                    <label><span><input type="checkbox"/></span> Toes (one or more)</label><br/>
                                <label><span><input type="checkbox"/></span> Eye</label><br/>
                                <label><span><input type="checkbox"/></span> Back</label><br/>
                                <label><span><input type="checkbox"/></span> Abdoman</label>
                              
                                 
                              </div>
                               <div class="col-md-3 mb-2">
                                 
                                 
                                <label><span><input type="checkbox"/></span> Hip joint, thigh, knee cap</label><br/>
                                <label><span><input type="checkbox"/></span> Hand Fracture</label><br/>
                                <label><span><input type="checkbox"/></span> Foot Fracture</label><br/>
                                <label><span><input type="checkbox"/></span> Nose bone fracture</label>
                              
                                 
                              </div>
                              <div class="col-md-3 mb-2">
                                 
                                
                                    <label><span><input type="checkbox"/></span> Back head</label><br/>
                                <label><span><input type="checkbox"/></span> Chin </label><br/>
                                <label><span><input type="checkbox"/></span> Ankle fracture</label>
                              
                               
                              </div>
                           </div>
                           
                         
                            <button class="btn btn-primary mt-4 d-inline w-20" type="submit">Save</button>
                            <button class="btn btn-primary mt-4 d-inline w-20" type="submit">Back</button>
                        </form>

                     </div>
                  </div>
               </div>


        </div>
    </div>
</main>
  )
};

export default AccidentIncident;
