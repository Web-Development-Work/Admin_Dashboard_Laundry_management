import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbarone from './User/Navbarone';


const Summary = () => {
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
              <li class="breadcrumb-item active">Summary</li>
            </ol>
          </nav>
          </div>

          <div class="col-md-12">
          
          <div class="row">
             <div class="col-md-4">
                  <div class="ms-panel ms-panel-fh">
                   <div class="ms-panel-header">
                      <h6>Basic Information</h6>
                   </div>
                   <div class="ms-panel-body clearfix">
                    
                    <p><strong>Ms Annie'O Dohery</strong></p>
                    <p>40 Lighwood lane</p>
                    <p>Eckington</p>
                    <p>Chesterfield</p>
                   
                        
                        
                      </div>
                   </div>
             </div>
              <div class="col-md-4">
                  <div class="ms-panel ms-panel-fh">
                   <div class="ms-panel-header">
                      <h6>Next Of Kin</h6>
                   </div>
                   <div class="ms-panel-body clearfix">
                    
                                            <p><strong>Julie Berbely</strong></p>
                    <p>Faversham</p>
                    <p>Bevern View</p>
                    <p>Moor End Road</p>
                    <p>01422353314</p>
                   
                         
                        
                        
                      </div>
                   </div>
             </div>
              <div class="col-md-4">
                  <div class="ms-panel ms-panel-fh">
                   <div class="ms-panel-header">
                      <h6>Medical Contacts</h6>
                   </div>
                   <div class="ms-panel-body clearfix">
                    
                    <p>GP Name: Monica Balluch</p>
                   
                    <p>Contact Number: 01223644646</p>
                    <p>Public Health Nurse:sharon</p>
                         
                    <p>Contact Number: 5454564654</p>    
                        
                      </div>
                   </div>
             </div>
              <div class="col-md-4">
                  <div class="ms-panel ms-panel-fh">
                   <div class="ms-panel-header">
                      <h6>Admission Details</h6>
                   </div>
                   <div class="ms-panel-body clearfix">
                    
                      
                    <p>Date of Admission: 18/02/2021</p>
                    <p>Nurse in Charge: Colin'O</p>
                    <p>Care worker: Eddile'O</p>
                    <p>Payment Type: Private</p>
                    <p>Medical Card Expiry: 10/12/2022</p>
                  
                         
                        
                        
                      </div>
                   </div>
             </div>
              <div class="col-md-4">
                  <div class="ms-panel ms-panel-fh">
                   <div class="ms-panel-header">
                      <h6>Public Health Nurse</h6>
                   </div>
                   <div class="ms-panel-body clearfix">
                    <p>Vital TAken Date: 18/02/2021 10:20:00</p>
                    <p>SO2: 2</p>
                    <p>Temp: 37</p>
                   
                      
                        
                      </div>
                   </div>
             </div>
             
              <div class="col-md-4">
                  <div class="ms-panel ms-panel-fh">
                   <div class="ms-panel-header">
                      <h6>About Me</h6>
                   </div>
                   <div class="ms-panel-body clearfix">
                    
                   
                      
                        
                      </div>
                   </div>
             </div>
             
             <div class="col-md-4">
                  <div class="ms-panel ms-panel-fh">
                   <div class="ms-panel-header">
                      <h6>Care Plan</h6>
                   </div>
                   <div class="ms-panel-body clearfix">
                    
                   
                      
                        
                      </div>
                   </div>
             </div>
             <div class="col-md-4">
                  <div class="ms-panel ms-panel-fh">
                   <div class="ms-panel-header">
                      <h6>Assessment</h6>
                   </div>
                   <div class="ms-panel-body clearfix">
                    
                   
                      
                        
                      </div>
                   </div>
             </div>
             
             <div class="col-md-4">
                  <div class="ms-panel ms-panel-fh">
                   <div class="ms-panel-header">
                      <h6>Wounds</h6>
                   </div>
                   <div class="ms-panel-body clearfix">
                    
                   
                      
                        
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

export default Summary;
