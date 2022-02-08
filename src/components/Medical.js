import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbarone from './User/Navbarone';


export const Medical = () => {
  return(
    <main className="body-content">
           <Sidebar/>
            <div className="ms-content-wrapper">
            <div className="row">

                <Navbarone />

                <div class="col-md-12">
               <nav aria-label="breadcrumb">
            <ol class="breadcrumb pl-0">
              <li class="breadcrumb-item">
                <a href="#"><i class="material-icons">home</i> Home</a>
              </li>
              <li class="breadcrumb-item active">Medical</li>
            </ol>
          </nav>
                </div>

                <div class=" col-md-12 navs">
                <ul class="nav nav-tabs tabs-bordered nav-justified" role="tablist" aria-orientation="vertical">
                           <li role="presentation"><a href="#summary" aria-controls="summary" class="active show" role="tab" data-toggle="tab" aria-selected="true"> Summary </a></li>
                           <li role="presentation"><a href="#conditions" aria-controls="conditions" role="tab" data-toggle="tab" class="" aria-selected="false"> Medical Conditions </a></li>
                           <li role="presentation"><a href="#allergies" aria-controls="allergies" role="tab" data-toggle="tab" class="" aria-selected="false"> Allergies </a></li>
                           <li role="presentation"><a href="#vaccination" aria-controls="vaccination" role="tab" data-toggle="tab" class="" aria-selected="false"> Vaccination </a></li>
                           {/* <!--<li role="presentation"><a href="#labresults" aria-controls="labresults" role="tab" data-toggle="tab" class="" aria-selected="false"> Lab Results </a></li>--> */}
                           <li role="presentation"><a href="#gpreview" aria-controls="gpreview" role="tab" data-toggle="tab" class="" aria-selected="false"> Gp Review </a></li>
                           <li role="presentation"><a href="#currentmedication" aria-controls="currentmedication" role="tab" data-toggle="tab" class="" aria-selected="false"> Current Medication </a></li>
                        </ul>
                </div>



                <div class="col-md-12">
            <div class="tab-content">
            <div role="tabpanel" class="tab-pane fade in active show" id="summary">
            <div class="row">
               <div class="col-md-4">
                    <div class="ms-panel ms-panel-fh">
                     <div class="ms-panel-header">
                        <h6>Medical Condition</h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                      
                         <p> <i class="fa fa-minus-square" Style="font-size: 18px;color: #1f4970;"></i> Diverticular Disease</p>
                         <p> <i class="fa fa-minus-square" Style="font-size: 18px;color: #1f4970;"></i> Hypertention</p>    
                           
                          
                          
                        </div>
                     </div>
               </div>
                <div class="col-md-4">
                    <div class="ms-panel ms-panel-fh">
                     <div class="ms-panel-header">
                        <h6>Allergies</h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                      
                        
                        <p> <i class="fa fa-minus-square" Style="font-size: 18px;color: #1f4970;"></i> Klacid</p>
                         <p> <i class="fa fa-minus-square" Style="font-size: 18px;color: #1f4970;"></i> Pencilin</p> 
                           
                          
                          
                        </div>
                     </div>
               </div>
                <div class="col-md-4">
                    <div class="ms-panel ms-panel-fh">
                     <div class="ms-panel-header">
                        <h6>Vaccination</h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                      
                        
                       
                          <p> <i class="fa fa-minus-square" Style="font-size: 18px;color: #1f4970;"></i> Test1</p>
                         <p> <i class="fa fa-minus-square" Style="font-size: 18px;color: #1f4970;"></i> Test2</p>
                           
                          
                          
                        </div>
                     </div>
               </div>
               {/* <!-- <div class="col-md-4">-->
               <!--     <div class="ms-panel ms-panel-fh">-->
               <!--      <div class="ms-panel-header">-->
               <!--         <h6>Lab Results</h6>-->
               <!--      </div>-->
               <!--      <div class="ms-panel-body clearfix">-->
                      
                        
                       
                          
               <!--               <p> <i class="fa fa-minus-square" Style="font-size: 18px;color: #1f4970;"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>-->
               <!--               <p> <i class="fa fa-minus-square" Style="font-size: 18px;color: #1f4970;"></i> Cras egestas nisi vel tempor dignissim. </p>-->
                           
                          
                          
               <!--         </div>-->
               <!--      </div>-->
               <!--</div>--> */}
                <div class="col-md-4">
                    <div class="ms-panel ms-panel-fh">
                     <div class="ms-panel-header">
                        <h6>GP Reviews</h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                      
                        
                       
                            <p> <i class="fa fa-minus-square" Style="font-size: 18px;color: #1f4970;"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                              <p> <i class="fa fa-minus-square" Style="font-size: 18px;color: #1f4970;"></i> Cras egestas nisi vel tempor dignissim. </p>
                            
                           
                          
                          
                        </div>
                     </div>
               </div>
                <div class="col-md-4">
                    <div class="ms-panel ms-panel-fh">
                     <div class="ms-panel-header">
                        <h6>Current Medication</h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                      
                        
                       
                          
                              <p><i class="fa fa-minus-square" Style="font-size: 18px;color: #1f4970;"></i> AMLODIPINE 5MG TABLET BLUEFISH - AMLODE 5MG TABS AML </p>
                              <p><i class="fa fa-minus-square" Style="font-size: 18px;color: #1f4970;"></i> FUROSEMIDE 20MG TABS </p>
                              <p><i class="fa fa-minus-square" Style="font-size: 18px;color: #1f4970;"></i> MEMANTINE ACCORD 10MG FC TABS</p>
                              <p><i class="fa fa-minus-square" Style="font-size: 18px;color: #1f4970;"></i> OMEPAZOLE ACTAVIS 40MG GAST RES CAPS</p>
                           
                          
                          
                        </div>
                     </div>
               </div>
               
           </div>
              
          </div>
            <div role="tabpanel" class="tab-pane fade" id="conditions">
                 <div class="row">
               <div class="col-md-7">
                    <div class="ms-panel ms-panel-fh">
                     <div class="ms-panel-header">
                        <h6>Medical Condition</h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                      
                        
                           <table class="table table-bordered">
                               <thead>
                                   <tr><th>Condition Name</th>
                                   <th>Status</th>
                                   <th>Date</th>
                                   <th>View &amp; Edit</th>
                               </tr></thead>
                               <tbody>
                                   <tr>
                                       <td>Diverticular Disease</td>
                                       <td>Historic</td>
                                       <td>10/12/2021</td>
                                       <td><a href="#"><i class="fa fa-edit" Style="font-size:20px;"></i></a></td>
                                   </tr>
                                   <tr>
                                       <td>Hypertention</td>
                                       <td>Ongoing</td>
                                       <td>12/12/2021</td>
                                       <td><a href="#"><i class="fa fa-edit" Style="font-size:20px;"></i></a></td>
                                   </tr>
                               </tbody>
                           </table>
                          
                          
                        </div>
                     </div>
               </div> 
                <div class="col-md-5">
                    <div class="ms-panel ms-panel-fh">
                     
                     <div class="ms-panel-body clearfix">
                      
                        <form>
                            <div class="form-group">
                                <label>Condition Name</label>
                                <input type="text" name="conditionname" class="form-control"/>
                            </div>
                             <div class="form-group">
                                <label>Status</label>
                                <select class="form-control">
                                    <option>Select Status</option>
                                    <option>Historic</option>
                                    <option>Ongoing</option>
                                </select>
                            </div>
                             <div class="form-group">
                                <label>Reported</label>
                                <input type="date" name="date" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label>Type</label>
                                <select class="form-control">
                                    <option>Select Type</option>
                                    <option>Chronic</option>
                                    <option>Acute</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Medication Name</label>
                                <input type="text" name="medicationname" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label>Notes</label>
                                <textarea class="form-control" placeholder="Notes"></textarea>
                            </div>
                            <div class="form-group">
                                 <input type="submit" name="newcondition" value="New Condition" class="btn btn-primary"/>
                                <input type="submit" name="submit" value="Save" class="btn btn-primary"/>
                            </div>
                        </form>
                           
                          
                          
                        </div>
                     </div>
               </div> 
               </div>
            </div>
            
            
               <div role="tabpanel" class="tab-pane fade" id="allergies">
                                   <div class="row">
               <div class="col-md-7">
                    <div class="ms-panel ms-panel-fh">
                     <div class="ms-panel-header">
                        <h6>Allergies</h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                      
                        
                           <table class="table table-bordered">
                               <thead>
                                   <tr><th>Allergy Condition </th>
                                   <th>Triggers</th>
                                   <th>Symptoms</th>
                                   <th>View &amp; Edit</th>
                               </tr></thead>
                               <tbody>
                                   <tr>
                                       <td>Klacid</td>
                                       <td>wheat, barley </td>
                                       <td>diarrhoea</td>
                                       <td><a href="#"><i class="fa fa-edit" Style="font-size:20px;"></i></a></td>
                                   </tr>
                                   <tr>
                                       <td>Pencilin</td>
                                       <td>penciline tablet</td>
                                       <td>hive, rash and itching</td>
                                       <td><a href="#"><i class="fa fa-edit" Style="font-size:20px;"></i></a></td>
                                   </tr>
                               </tbody>
                           </table>
                          
                          
                        </div>
                     </div>
               </div> 
                <div class="col-md-5">
                    <div class="ms-panel ms-panel-fh">
                     
                     <div class="ms-panel-body clearfix">
                      
                        <form>
                            <div class="form-group">
                                <label>Allergy Name</label>
                                <input type="text" name="allergyname" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label>Triggers</label>
                                <input type="text" name="triggers" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label>Symptoms</label>
                                <input type="text" name="symptoms" class="form-control"/>
                            </div>
                             <div class="form-group">
                                <label>Status</label>
                                <select class="form-control">
                                    <option>Select Status</option>
                                    <option>Historic</option>
                                    <option>Ongoing</option>
                                </select>
                            </div>
                             
                            <div class="form-group">
                                <label>Notes</label>
                                <textarea class="form-control" placeholder="Notes"></textarea>
                            </div>
                            <div class="form-group">
                                 <input type="submit" name="newcondition" value="New Allergy" class="btn btn-primary"/>
                                <input type="submit" name="submit" value="Save" class="btn btn-primary"/>
                            </div>
                        </form>
                           
                          
                          
                        </div>
                     </div>
               </div> 
               </div>
                 </div> 
             <div role="tabpanel" class="tab-pane fade" id="vaccination">
                                   <div class="row">
               <div class="col-md-7">
                    <div class="ms-panel ms-panel-fh">
                     <div class="ms-panel-header">
                        <h6>Vaccination</h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                      
                        
                           <table class="table table-bordered">
                               <thead>
                                   <tr><th>Vaccination </th>
                                   <th>Date</th>
                                   <th>Valid Until</th>
                                   <th>View &amp; Edit</th>
                               </tr></thead>
                               <tbody>
                                   <tr>
                                       <td>Test1</td>
                                       <td>10/12/2021 </td>
                                       <td>8/01/2022</td>
                                       <td><a href="#"><i class="fa fa-edit" Style="font-size:20px;"></i></a></td>
                                   </tr>
                                   <tr>
                                       <td>Test2</td>
                                       <td>12/12/2021 </td>
                                       <td>10/01/2022</td>
                                       <td><a href="#"><i class="fa fa-edit" Style="font-size:20px;"></i></a></td>
                                   </tr>
                               </tbody>
                           </table>
                          
                          
                        </div>
                     </div>
               </div> 
                <div class="col-md-5">
                    <div class="ms-panel ms-panel-fh">
                     
                     <div class="ms-panel-body clearfix">
                      
                        <form>
                            <div class="form-group">
                                <label>Vaccination Name</label>
                              <select class="form-control">
                                    <option>Select Vaccination</option>
                                    <option>Test1</option>
                                    <option>Test2</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Date</label>
                                <input type="date" name="date" class="form-control"/>
                            </div>
                             <div class="form-group">
                                <label>Valid Until</label>
                                <input type="date" name="validuntil" class="form-control"/>
                            </div>
                            
                            <div class="form-group">
                                <label>Notes</label>
                                <textarea class="form-control" placeholder="Notes"></textarea>
                            </div>
                            <div class="form-group">
                                 <input type="submit" name="newcondition" value="New Vaccination" class="btn btn-primary"/>
                                <input type="submit" name="submit" value="Save" class="btn btn-primary"/>
                            </div>
                        </form>
                           
                          
                          
                        </div>
                     </div>
               </div> 
               </div>
            </div> 
           <div role="tabpanel" class="tab-pane fade" id="labresults">
                                   <div class="row">
               <div class="col-md-7">
                    <div class="ms-panel ms-panel-fh">
                     <div class="ms-panel-header">
                        <h6>Lab Results</h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                      
                        
                           <table class="table table-bordered">
                               <thead>
                                   <tr><th>Date &amp; Time </th>
                                   <th>Test Name</th>
                                   <th>Type</th>
                                    <th>GP Reported</th>
                                   <th>View &amp; Edit</th>
                               </tr></thead>
                               <tbody>
                                   <tr>
                                       <td>10/01/2022, 10:30AM</td>
                                       <td>Thyroid </td>
                                       <td>Blood</td>
                                       <td>Yes</td>
                                       <td><a href="#"><i class="fa fa-edit" Style="font-size:20px;"></i></a></td>
                                   </tr>
                                   <tr>
                                       <td>10/01/2022, 10:30AM</td>
                                       <td>Cholestrol </td>
                                       <td>Blood</td>
                                       <td>Yes</td>
                                       <td><a href="#"><i class="fa fa-edit" Style="font-size:20px;"></i></a></td>
                                   </tr>
                               </tbody>
                           </table>
                          
                          
                        </div>
                     </div>
               </div> 
                <div class="col-md-5">
                    <div class="ms-panel ms-panel-fh">
                     
                     <div class="ms-panel-body clearfix">
                      
                        <form>
                            <div class="form-group">
                                <label>Type</label><br/>
                             <label class="checkbox-inline">
      <input type="checkbox" value=""/> Blood
    </label>
    <label class="checkbox-inline">
      <input type="checkbox" value=""/> Swab
    </label>
    <label class="checkbox-inline">
      <input type="checkbox" value=""/> Urine
    </label>
                            </div>
                            <div class="form-group">
                                <label>Taken Date</label>
                                <input type="date" name="takendate" class="form-control"/>
                            </div>
                             <div class="form-group">
                                <label>Taken Time</label>
                                <input type="time" name="takentime" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label>GP Reported</label><br/>
                             <label class="checkbox-inline">
      <input type="checkbox" value=""/> Yes
    </label>
    <label class="checkbox-inline">
      <input type="checkbox" value=""/> No
    </label>
  
                            </div>
                             <div class="form-group">
                                <label>Test Name</label>
                              <select class="form-control">
                                    <option>Select Labtest</option>
                                    <option>BMP</option>
                                    <option>Cholestrol</option>
                                    <option>Thyroid</option>
                                    <option>FBSL</option>
                                    <option>GCT</option>
                                    <option>MSU microscopy</option>
                                    
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Notes</label>
                                <textarea class="form-control" placeholder="Notes"></textarea>
                            </div>
                            <div class="form-group">
                                 <input type="submit" name="newcondition" value="New" class="btn btn-primary"/>
                                <input type="submit" name="submit" value="Save" class="btn btn-primary"/>
                            </div>
                        </form>
                           
                          
                          
                        </div>
                     </div>
               </div> 
               </div>
                 </div> 
            <div role="tabpanel" class="tab-pane fade" id="gpreview">
                                   <div class="row">
               <div class="col-md-7">
                    <div class="ms-panel ms-panel-fh">
                     <div class="ms-panel-header">
                        <h6>GP Reviews</h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                      
                        
                           <table class="table table-bordered">
                               <thead>
                                   <tr><th>Date &amp; Time </th>
                                   <th>Gp Name</th>
                                   <th>Main Complaint</th>
                                    <th>Next Review</th>
                                   <th>View &amp; Edit</th>
                               </tr></thead>
                               <tbody>
                                   <tr>
                                       <td>10/01/2022</td>
                                       <td>Loremipsum </td>
                                       <td>demo1</td>
                                       <td>lorenm pdd ipguder</td>
                                       <td><a href="#"><i class="fa fa-edit" Style="font-size:20px;"></i></a></td>
                                   </tr>
                                   <tr>
                                       <td>08/01/2022</td>
                                       <td>Loremipsum </td>
                                       <td>demo1</td>
                                       <td>lorenm pdd ipguder</td>
                                       <td><a href="#"><i class="fa fa-edit" Style="font-size:20px;"></i></a></td>
                                   </tr>
                               </tbody>
                           </table>
                          
                          
                        </div>
                     </div>
               </div> 
                <div class="col-md-5">
                    <div class="ms-panel ms-panel-fh">
                     
                     <div class="ms-panel-body clearfix">
                      
                        <form>
                            <div class="form-group">
                                <label>Main Complaint</label>
                              <input type="text" name="maincomplaint" class="form-control"/>
                            </div>

                           
                             
                            <div class="form-group">
                                <label>Description</label>
                                <textarea class="form-control" placeholder="Description"></textarea>
                            </div>
                            <div class="form-group">
                                <label>Subjective</label>
                                <textarea class="form-control" placeholder="Subjective"></textarea>
                            </div>
                             <div class="form-group">
                                <label>Objective</label>
                                <textarea class="form-control" placeholder="Objective"></textarea>
                            </div>
                            <div class="form-group">
                                <label>Assessment</label>
                                <textarea class="form-control" placeholder="Assessment"></textarea>
                            </div>
                            <div class="form-group">
                                <label>Care Plan-Prescription</label>
                                <textarea class="form-control" placeholder="Care Plan-Prescription"></textarea>
                            </div>
                            <div class="form-group">
                                <label>Notes</label>
                                <textarea class="form-control" placeholder="Notes"></textarea>
                            </div>
                            <div class="form-group">
                             <label>GP/Consultant Name</label>
                              <input type="text" name="cname" class="form-control"/>
                            </div>
                            <div class="form-group">
                             <label>Reg. No</label>
                              <input type="text" name="cname" class="form-control"/>
                            </div>
                            <div class="form-group">
                             <label>Next Review Date</label>
                              <input type="date" name="reviewdate" class="form-control"/>
                            </div>
                            <div class="form-group">
                                 <input type="submit" name="newcondition" value="New Review" class="btn btn-primary"/>
                                <input type="submit" name="submit" value="Save" class="btn btn-primary"/>
                            </div>
                        </form>
                           
                          
                          
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
