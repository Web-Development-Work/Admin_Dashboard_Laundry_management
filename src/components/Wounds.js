import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbarone from './User/Navbarone';

const Wounds = () => {
  return(
    <main className="body-content">
        <Sidebar/>
        <div className="ms-content-wrapper">
            <div className="row">
                <Navbarone/>
                <div class="col-xl-12 col-md-12">
                      <div class="ms-panel">
                           <div class="ms-panel-body" Style="padding-top:0px; padding-bottom:0px;">
                      <div class="section_box1_content2" Style="padding: 0px 0px 0px 0px;">
                            <div class="row">
                                <div class="col-sm-12" Style="padding: 0px 0px 0px 15px;">
                                    <div class="tab_menus" Style="float:left;">
                                        <ul>
                                            <li class="active"><a href="wounds.html" class="active">Create New</a></li>
                                            <li><a href="wounds-active.html">Active</a></li>
                                            <li><a href="wounds-historical.html">Historical</a></li>
                                            <li><a href="skin-infection.html">Sskin Infection</a></li>
                                            
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                        </div>








                        <form>
                        
                        <div class="col-md-12">
                            <div class="row">      
                        <div class="col-xl-6 col-md-6">      
                       <div class="ms-panel">
                       <div class="ms-panel-body">
                         <img src="../../assets/img/hbody.png" Style="width:100%;"/>
                        </div>
                        </div>
                        
                       <div class="ms-panel">
                       <div class="ms-panel-body">
                         <div class="row">
                             <div class="col-3 text-center">
                               <label>
                                   <input type="file" name="upload" Style="display:none;"/> 
                                 <img src="../../assets/img/noimage.png" Style="width:100%;"/>
                                 Upload
                               </label>   
                             </div>
                              <div class="col-3 text-center">
                               <label>
                                   <input type="file" name="upload" Style="display:none;"/> 
                                 <img src="../../assets/img/noimage.png" Style="width:100%;"/>
                                 Upload
                               </label>   
                             </div>
                              <div class="col-3 text-center">
                               <label>
                                   <input type="file" name="upload" Style="display:none;"/> 
                                 <img src="../../assets/img/noimage.png" Style="width:100%;"/>
                                 Upload
                               </label>   
                             </div>
                              <div class="col-3 text-center">
                               <label>
                                   <input type="file" name="upload" Style="display:none;"/> 
                                 <img src="../../assets/img/noimage.png" Style="width:100%;"/>
                                 Upload
                               </label>   
                             </div>
                              <div class="col-3 text-center">
                               <label>
                                   <input type="file" name="upload" Style="display:none;"/> 
                                 <img src="../../assets/img/noimage.png" Style="width:100%;"/>
                                 Upload
                               </label>   
                             </div>
                              <div class="col-3 text-center">
                               <label>
                                   <input type="file" name="upload" Style="display:none;"/> 
                                 <img src="../../assets/img/noimage.png" Style="width:100%;"/>
                                 Upload
                               </label>   
                             </div>
                              <div class="col-3 text-center">
                               <label>
                                   <input type="file" name="upload" Style="display:none;"/> 
                                 <img src="../../assets/img/noimage.png" Style="width:100%;"/>
                                 Upload
                               </label>   
                             </div>
                              <div class="col-3 text-center">
                               <label>
                                   <input type="file" name="upload" Style="display:none;"/> 
                                 <img src="../../assets/img/noimage.png" Style="width:100%;"/>
                                 Upload
                               </label>   
                             </div>
                         </div>
                         
                        </div>
                        </div>
                        
                        <div class="ms-panel">
                        <div class="ms-panel-body">
                        <div class="row">
                            <textarea class="form-control" placeholder="Previous Notes"></textarea>
                        </div>
                        </div>
                        </div>
                        <div class="ms-panel">
                        <div class="ms-panel-body">
                        <div class="row">
                            <textarea class="form-control" placeholder="Notes"></textarea>
                        </div>
                        </div>
                        </div>
                    </div>
                        <div class="col-xl-6 col-md-6">      
                  <div class="ms-panel">
                     
                     <div class="ms-panel-body">
                         
                         
                       
                           <div class="form-row">
                              
                              <div class="col-md-6 mb-3">
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
                              
                              <div class="col-md-6 mb-3">
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
                               <div class="col-md-6 mb-2">
                                 <label for="validationCustom004">Recorded Date</label>
                                 <div class="input-group">
                                    <input type="date" class="form-control" id="validationCustom004" required=""/>

                                 </div>
                              </div>
                              <div class="col-md-6 mb-3">
                                 <label for="validationCustom001">Grade</label>
                                 <div class="input-group">
                                    <select class="form-control" id="validationCustom230" required="">
                                        <option value="">Select Grade</option>
                                       <option value="">Grade1</option>
                                       <option value="">Grade2</option>
                                        <option value="">Grade3</option>
                                         <option value="">Grade4</option>
                                          <option value="">Grade5</option>
                                    </select>

                                 </div>
                              </div>
                                
                              
                           </div>
                             <div class="form-row">
                            <div class="col-md-6 mb-2">
                                 <label for="validationCustom003">Time</label>
                                 <div class="input-group">
                                    <input type="time" class="form-control" id="validationCustom003" required=""/>

                                 </div>
                              </div>
                              <div class="col-md-6 mb-3">
                                 <label for="validationCustom001">Colour</label>
                                 <div class="input-group">
                                    <select class="form-control" id="validationCustom230" required="">
                                       <option value="">Select Colour</option>
                                       <option value="">Black</option>
                                       <option value="">Yellow</option>
                                       <option value="">Red</option>
                                       <option value="">Green</option>
                                       <option value="">Pink</option>
                                    </select>

                                 </div>
                              </div>
                              </div>
                                <div class="form-row">
                                <div class="col-md-6 mb-3">
                                 <label for="validationCustom001">Recorded by</label>
                                 <div class="input-group">
                                    <select class="form-control" id="validationCustom230" required="">
                                        <option value="">Select Staff</option>
                                       <option value="">John doe</option>
                                       <option value="">Raxon Mary</option>
                                        <option value="">Tokder kelly</option>
                                    </select>

                                 </div>
                              </div> 
                              <div class="col-md-6 mb-3">
                                 <label for="validationCustom001">Odour</label>
                                 <div class="input-group">
                                    <select class="form-control" id="validationCustom230" required="">
                                        <option value="">Select Odour</option>
                                       <option value="">None</option>
                                       <option value="">Mild</option>
                                        <option value="">Medium</option>
                                        <option value="">Offensive</option>
                                    </select>

                                 </div>
                              </div>
                          
                           </div>
                          <div class="form-row"> 
                           <div class="col-md-6">
                          <label for="validationCustom001">Select Condition</label>
                           <div class="input-group">
                         
                             <span class="dott1"></span>&nbsp;&nbsp;
                             <p>Burns</p>
                            </div>
                          
                          </div>
                        <div class="col-md-6 mb-3">
                                 <label for="validationCustom001">Exudate Amount</label>
                                 <div class="input-group">
                                    <select class="form-control" id="validationCustom230" required="">
                                        <option value="">Select Exudate Amount</option>
                                       <option value=""></option>
                                      
                                    </select>

                                 </div>
                              </div>
                    </div>
                      <div class="form-row"> 
                           <div class="col-md-6">
                          <label for="validationCustom001">Location</label>
                           <div class="input-group">
                         
                           
                             <p>bed</p>
                            </div>
                          
                          </div>
                        <div class="col-md-6 mb-3">
                                 <label for="validationCustom001">Pain</label>
                                 <div class="input-group">
                                    <select class="form-control" id="validationCustom230" required="">
                                        <option value="">Select Pain</option>
                                       <option value=""></option>
                                      
                                    </select>

                                 </div>
                              </div>
                    </div>
                    
                     <div class="form-row"> 
                           <div class="col-md-6">
                          <label for="validationCustom001">Pain Frequency</label>
                           <div class="input-group">
                         
                           <select class="form-control" id="validationCustom230" required="">
                                        <option value="">Select Pain Frequency</option>
                                       <option value=""></option>
                                      
                                    </select>
                            </div>
                          
                          </div>
                        <div class="col-md-6 mb-3">
                                 <label for="validationCustom001">Dressing Pattern</label>
                                 <div class="input-group">
                                    <select class="form-control" id="validationCustom230" required="">
                                        <option value="">Select Dressing Pattern</option>
                                       <option value=""></option>
                                      
                                    </select>

                                 </div>
                              </div>
                    </div>
                     <div class="form-row"> 
                           <div class="col-md-6">
                          <label for="validationCustom001">Wound Type</label>
                           <div class="input-group">
                         
                           <select class="form-control" id="validationCustom230" required="">
                                        <option value="">Select Wound Type</option>
                                       <option value=""></option>
                                      
                                    </select>
                            </div>
                          
                          </div>
                        <div class="col-md-6 mb-3">
                                 <label for="validationCustom001">Risk Level</label>
                                 <div class="input-group">
                                    <select class="form-control" id="validationCustom230" required="">
                                        <option value="">Select Risk Level</option>
                                       <option value="">No Risk</option>
                                       <option value="">High Risk</option>
                                       <option value="">Medium Risk</option>
                                       <option value="">Low Risk</option>
                                      
                                    </select>

                                 </div>
                              </div>
                    </div>
                       <div class="form-row">
                           <div class="col-md-12"> 
                        <strong>Size</strong>
                        </div>
                           <div class="col-md-4">
                          <label for="validationCustom001">Depth(mm)</label>
                           <div class="input-group">
                         
                           <select class="form-control" id="validationCustom230" required="">
                                        <option value="">Select Depth</option>
                                       <option value=""></option>
                                      
                                    </select>
                            </div>
                          
                          </div>
                        <div class="col-md-4 mb-3">
                                 <label for="validationCustom001">Length</label>
                                 <div class="input-group">
                                   <select class="form-control" id="validationCustom230" required="">
                                        <option value="">Select length</option>
                                       <option value=""></option>
                                      
                                    </select>

                                 </div>
                              </div>
                           <div class="col-md-4 mb-3">
                                 <label for="validationCustom001">Width</label>
                                 <div class="input-group">
                                   <select class="form-control" id="validationCustom230" required="">
                                        <option value="">Select Width</option>
                                       <option value=""></option>
                                      
                                    </select>

                                 </div>
                              </div>
                    </div>
                    
                          <div class="form-row"> 
                           <div class="col-md-6">
                          <label for="validationCustom001">Infected</label>
                           <div class="input-group">
                            <label><input type="checkbox" value="yes"/> Yes</label> &nbsp;&nbsp;&nbsp;&nbsp;
                            <label> <input type="checkbox" value="No"/> No</label>
                            </div>
                          
                          </div>
                           <div class="col-md-6 mb-3">
                                 <label for="validationCustom001">Next Review Date</label>
                                <input type="date" name="nextreviewdate" class="form-control"/>
                           </div>
                    </div>
                        <div class="form-row"> 
                           <div class="col-md-12">
                          <label for="validationCustom001">Infected</label>
                           <div class="input-group">
                            <label><input type="checkbox" value="createcareplan"/> Create Care plan</label> &nbsp;&nbsp;&nbsp;&nbsp;
                          
                            </div>
                          
                          </div>
                           
                    </div>
                     </div>
                  </div>
                 
                  
                   
               </div>
                        <div class="col-md-12">
                            <button class="btn btn-primary mt-4 d-inline w-20" type="submit">Create New</button>
                            <button class="btn btn-primary mt-4 d-inline w-20" type="submit">Back</button>
                        </div>
                        </div>  
                        </div>
                        </form>


                        
            </div>
        </div>
    </main>
  );
};

export default Wounds;
