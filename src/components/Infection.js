import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbarone from './User/Navbarone';

const Infection = () => {
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
                      
                        <li class="breadcrumb-item active" aria-current="page">Infection</li>
                     </ol>
                  </nav>
            </div>



            <div class="col-xl-12 col-md-12">
                  <div class="ms-panel">
                     
                     <div class="ms-panel-body">
                        <form class="needs-validation" novalidate="">
                           <div class="form-row">
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
                              <div class="col-md-6 mb-2">
                                 <label for="validationCustom004">Case Id</label>
                                 <div class="input-group">
                                    <input type="text" class="form-control" id="validationCustom004" required=""/>

                                 </div>
                              </div>
                              
                           </div>
                           <div class="form-row">
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
                                  <div class="table-responsive">
                                  <table class="table table-bordered">
                                      <thead>
                                          <tr><th>Does patient currently have OR is known to have a positive culture of a multidrug-resident 
                                          <br/>oragnism (MDRO) or other organism of epidemiological significance?</th>
                                          <th>Colonization or history</th>
                                      </tr></thead>
                                      <tbody>
                                          <tr>
                                              <td>Lorem Ipsum Goprer Hoieryi hgderyiop koeworfer</td>
                                               <td><input type="checkbox"/></td>
                                          </tr>
                                           <tr>
                                              <td>Lorem Ipsum Goprer Hoieryi hgderyiop koeworfer</td>
                                               <td><input type="checkbox"/></td>
                                          </tr>
                                           <tr>
                                              <td>Lorem Ipsum Goprer Hoieryi hgderyiop koeworfer</td>
                                               <td><input type="checkbox"/></td>
                                          </tr>
                                           <tr>
                                              <td>Lorem Ipsum Goprer Hoieryi hgderyiop koeworfer</td>
                                               <td><input type="checkbox"/></td>
                                          </tr>
                                           <tr>
                                              <td>Lorem Ipsum Goprer Hoieryi hgderyiop koeworfer</td>
                                               <td><input type="checkbox"/></td>
                                          </tr>
                                           <tr>
                                              <td>Lorem Ipsum Goprer Hoieryi hgderyiop koeworfer</td>
                                               <td><input type="checkbox"/></td>
                                          </tr>
                                           <tr>
                                              <td>Lorem Ipsum Goprer Hoieryi hgderyiop koeworfer</td>
                                               <td><input type="checkbox"/></td>
                                          </tr>
                                           <tr>
                                              <td>Lorem Ipsum Goprer Hoieryi hgderyiop koeworfer</td>
                                               <td><input type="checkbox"/></td>
                                          </tr>
                                      </tbody>
                                  </table>
                                  </div>
                              </div>
                              
                           </div>
                          
                           <div class="form-row">
                              <div class="col-md-12 mb-2">
                                 <label>+ Interovecteriaceae spp. include klebsiella, E.coli, Enterobactor, Proteus, Serratia, and Citrobactor among others. </label>
                                 
                              </div>
                             
                           </div>
                     
                           <div class="form-row">
                                 <div class="col-md-12 mb-2">
                                <label><strong>Does the patient currently any of the following symtemps?</strong> </label>
                                </div>
                              <div class="col-md-4 mb-2">
                                
                                 <div class="input-group">
                                 <label><span><input type="checkbox"/></span> Lorem ipsum Yreiu khorey Sworterds</label>
                                <label><span><input type="checkbox"/></span> Lorem ipsum Yreiu khorey Sworterds</label>
                                <label><span><input type="checkbox"/></span> Lorem ipsum Yreiu khorey Sworterds</label>
                                <label><span><input type="checkbox"/></span> Lorem ipsum Yreiu khorey Sworterds</label>

                                 </div>
                              </div>
                              <div class="col-md-4 mb-2">
                                 
                                 <div class="input-group">
                                    <label><span><input type="checkbox"/></span> Lorem ipsum Yreiu khorey Sworterds</label>
                                <label><span><input type="checkbox"/></span> Lorem ipsum Yreiu khorey Sworterds</label>
                                <label><span><input type="checkbox"/></span> Lorem ipsum Yreiu khorey Sworterds</label>
                                <label><span><input type="checkbox"/></span> Lorem ipsum Yreiu khorey Sworterds</label>

                                 </div>
                              </div>
                               <div class="col-md-4 mb-2">
                                 
                                 <div class="input-group">
                                    <label><span><input type="checkbox"/></span> Lorem ipsum Yreiu khorey Sworterds</label>
                                <label><span><input type="checkbox"/></span> Lorem ipsum Yreiu khorey Sworterds</label>
                                <label><span><input type="checkbox"/></span> Lorem ipsum Yreiu khorey Sworterds</label>
                                <label><span><input type="checkbox"/></span> Lorem ipsum Yreiu khorey Sworterds</label>

                                 </div>
                              </div>
                           </div>
                            <div class="form-row">
                                 <div class="col-md-12 mb-2">
                                <label><strong>Is the patient currently in isolation?</strong> </label>
                                </div>
                              <div class="col-md-4 mb-2">
                                
                                 <div class="input-group">
                                 <label><span><input type="checkbox"/></span> No</label>
                               

                                 </div>
                              </div>
                              <div class="col-md-4 mb-2">
                                 
                                 <div class="input-group">
                                    <label><span><input type="checkbox"/></span> Yes</label>
                              

                                 </div>
                              </div>
                               <div class="col-md-4 mb-2">
                                
                              </div>
                           </div>
                           <div class="form-row">
                                 <div class="col-md-12 mb-2">
                                <label><strong>Does the patient currently any of the following devices?</strong> </label>
                                </div>
                              <div class="col-md-4 mb-2">
                                
                                 
                                <label><input type="checkbox"/> Device name </label><br/>
                                <label><input type="checkbox"/> Device name </label>
                     

                               
                              </div>
                              <div class="col-md-4 mb-2">
                                 
                                 <label><input type="checkbox"/> Device name </label><br/>
                                <label><input type="checkbox"/> Device name </label>
                              </div>
                               <div class="col-md-4 mb-2">
                                 
                                <label><input type="checkbox"/> Device name </label><br/>
                                <label><input type="checkbox"/> Device name </label>
                              </div>
                           </div>
                            <div class="form-row">
                                 <div class="col-md-12 mb-2">
                                <label><strong>Is the patient currently on antibiotics?</strong> </label>
                                </div>
                              <div class="col-md-4 mb-2">
                                
                                 <div class="input-group">
                                 <label><span><input type="checkbox"/></span> No</label>
                               

                                 </div>
                              </div>
                              <div class="col-md-4 mb-2">
                                 
                                 <div class="input-group">
                                    <label><span><input type="checkbox"/></span> Yes</label>
                              

                                 </div>
                              </div>
                               <div class="col-md-4 mb-2 text-right">
                                <a href="#" class="btn btn-primary" Style="margin-top:0px;">Add Medicines</a>
                              </div>
                           </div>
                            <div class="form-row">
                              <div class="col-md-12 mb-3">
                                   <div class="table-responsive">
                                  <table class="table table-bordered">
                                       <thead>
                                   <tr><th>Medicine Name </th>
                                   <th>Gp/Consultant Name</th>
                                   <th>Type</th>
                                   <th>Route</th>
                               </tr></thead>
                               <tbody>
                                   <tr>
                                       <td></td>
                                       <td> </td>
                                       <td></td>
                                       <td></td>
                                      
                                   </tr>
                                   
                               </tbody>
                                  </table>
                                   
                                </div>
                                  
                            <div class="table-responsive">
                                  <table class="table table-bordered">
                                       <thead>
                                   <tr><th>Vaccination </th>
                                   <th>Date</th>
                                   <th>Valid Until</th>
                               
                               </tr></thead>
                               <tbody>
                                   <tr>
                                       <td>Test1</td>
                                       <td>10/12/2021 </td>
                                       <td>8/01/2022</td>
                                      
                                   </tr>
                                   
                               </tbody>
                                  </table>
                                   
                                  </div>
                              </div>
                              
                           </div>
                            <div class="form-row">
                               
                              <div class="col-md-6 mb-2">
                                
                                 <div class="input-group">
                                 <label><span><input type="checkbox"/></span> Review Required</label>
                               

                                 </div>
                              </div>
                              <div class="col-md-6 mb-2">
                                 
                                 <div class="input-group">
                                    <label><span><input type="checkbox"/></span> Close Case</label>
                              

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
                                 <label for="validationCustom001">Approved by</label>
                                 <div class="input-group">
                                    <select class="form-control" id="validationCustom230" required="">
                                        <option value=""></option>
                                       
                                    </select>

                                 </div>
                              </div>
                             
                           </div>
                            <div class="form-row">
                              <div class="col-md-6 mb-2">
                                 <label for="validationCustom004">Previous Notes</label>
                                 <div class="input-group">
                                   <textarea class="form-control" placeholder="Previous Notes"></textarea>

                                 </div>
                              </div>
                               <div class="col-md-6 mb-2">
                                 <label for="validationCustom004">Notes</label>
                                 <div class="input-group">
                                   <textarea class="form-control" placeholder="Notes"></textarea>

                                 </div>
                              </div>
                             
                           </div>
                           
                              <div class="form-row">
                              <div class="col-md-6 mb-2">
                                 <label for="validationCustom004">Quarantine From</label>
                                 <div class="input-group">
                                    <input type="date" class="form-control" id="validationCustom004" required=""/>

                                 </div>
                              </div>
                               <div class="col-md-6 mb-2">
                                 <label for="validationCustom004">Quarantine To</label>
                                 <div class="input-group">
                                    <input type="date" class="form-control" id="validationCustom004" required=""/>

                                 </div>
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
  );
};

export default Infection;
