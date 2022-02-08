import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbarone from './User/Navbarone';

const Contacts = () => {
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
              <li class="breadcrumb-item active">Contacts</li>
            </ol>
          </nav>
            </div>

            

            <div class="col-md-12">
          
            <div class="row">
               <div class="col-md-4">
                    <div class="ms-panel ms-panel-fh">
                     <div class="ms-panel-header">
                        <h6>Significant Other 2</h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                      
                      <p><strong>Ronak Jaffri</strong></p>
                      <p>1 Lighwood lane</p>
                      <p>Eckington</p>
                      <p>Chesterfield</p>
                      <p>01223644646</p>
                      <p>test1@mail.com</p>
                          
                          
                        </div>
                     </div>
               </div>
                <div class="col-md-4">
                    <div class="ms-panel ms-panel-fh">
                     <div class="ms-panel-header">
                        <h6>Significant Other 1</h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                      
                                              <p><strong>Edward Mackangy</strong></p>
                      <p>1 Lighwood lane</p>
                      <p>Eckington</p>
                      <p>Chesterfield</p>
                      <p>01223644646</p>
                       <p>test2@mail.com</p>
                           
                          
                          
                        </div>
                     </div>
               </div>
                <div class="col-md-4">
                    <div class="ms-panel ms-panel-fh">
                     <div class="ms-panel-header">
                        <h6>Next of Kin Details</h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                      
                       <p><strong>Villiams Mathan</strong></p>
                      <p>1 Lighwood lane</p>
                      <p>Eckington</p>
                      <p>Chesterfield</p>
                      <p>01223644646</p>
                       <p>test3@mail.com</p>
                           
                          
                          
                        </div>
                     </div>
               </div>
                <div class="col-md-4">
                    <div class="ms-panel ms-panel-fh">
                     <div class="ms-panel-header">
                        <h6>Medical Contacts</h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                      
                        
                      <p><strong>Monica Balluch</strong></p>
                      <p>1 Lighwood lane</p>
                      <p>Eckington</p>
                      <p>Chesterfield</p>
                      <p>01223644646</p>
                      <p>sharon@mail.com</p>
                           
                          
                          
                        </div>
                     </div>
               </div>
                <div class="col-md-4">
                    <div class="ms-panel ms-panel-fh">
                     <div class="ms-panel-header">
                        <h6>Public Health Nurse</h6>
                     </div>
                     <div class="ms-panel-body clearfix">
                      <p><strong>Johshin Adams</strong></p>
                      <p>1 Lighwood lane</p>
                      <p>Eckington</p>
                      <p>Chesterfield</p>
                      <p>01223644646</p>
                      <p>sharon@mail.com</p>
                        
                          
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

export default Contacts;
