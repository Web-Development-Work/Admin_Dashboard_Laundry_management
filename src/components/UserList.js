import React from 'react'
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';


const UserList = () => {
    return (
        <main className="body-content">
            <Sidebar/>
            <div class="ms-content-wrapper">
            <div class="row">
                <div class="col-md-12">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb pl-0">
                            <li class="breadcrumb-item">
                                <a href="#"><i class="material-icons">home</i> Home</a>
                            </li>
                            <li class="breadcrumb-item active">Service Users List</li>
                        </ol>
                    </nav>
                </div>
                <div class="section_box1">
                        <div class="section_box1_content2">
                            <div class="row">

                                <div class="col-sm-4">
    <div class="input-group">
      <span class="input-group-addon"><select class="form-control">
          <option>Search by</option>
          <option>Location/Floor</option>
          <option>Room No</option>
      </select></span>
                                        <input type="text" class="form-control" id="txtsrch" placeholder="Search By Name"/>
                                    </div>
                                </div>
                                <div class="col-sm-1">
                                    <div class="form-group">
                                        <button type="button" class="btn btn-success search_btn" onclick="SearchPatients()" id="sbtn1">Search </button>
                                      
                                    </div>
                                </div>
                                <div class="col-sm-7">
                                    <div class="tab_menus">
                                        <ul>
                                            <li><a href="javascript:void(0)" onclick="PrePatient(2)" id="tab2">Pre - Admissions Search</a></li>
                                            
                                            <li><Link to="/adduser" onclick="NewPatient()" id="tab5">Create New</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row" Style="margin-top:30px;">
                     <div class="col-lg-3 col-md-3 col-sm-6">
                     <Link to="/userdetails">      
          <div class="ms-card">
           
            <div class="ms-card-body">
              <div class="media fs-14">
                <div class="mr-2 align-self-center">
                  <img src="../../assets/img/patient-1.jpg" alt="people"/>
                </div>
                <div class="media-body">
               
                  <p class=" my-1 text-disabled"><strong>DOB:</strong> 22-12-1999 (32 Years)</p>
                   <p class=" my-1 text-disabled"><strong>Name:</strong> Michael Sullivan</p>
                    <p class=" my-1 text-disabled"><strong>ID:</strong> A306578555</p>
                     <p class=" my-1 text-disabled"><strong>Location:</strong> 102 B, Vijay Nagar</p>
                </div>
              </div>
            </div>

          </div>
                      </Link> 
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
             <Link to="/userdetails">    
          <div class="ms-card">
            <div class="ms-card-body">
              <div class="media fs-14">
                <div class="mr-2 align-self-center">
                  <img src="../../assets/img/patient-2.jpg" alt="people"/>
                </div>
                <div class="media-body">
                  
                 
                  <p class=" my-1 text-disabled"><strong>DOB:</strong> 12-12-1999 (40 Years)</p>
                   <p class=" my-1 text-disabled"><strong>Name:</strong> Linda Barrett</p>
                    <p class=" my-1 text-disabled"><strong>ID:</strong> D478657555</p>
                     <p class=" my-1 text-disabled"><strong>Location:</strong> 106 C, Patel Nagar</p>
                </div>
              </div>
            </div>
          </div>
          </Link>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
             <Link to="/userdetails">    
          <div class="ms-card">
            <div class="ms-card-body">
              <div class="media fs-14">
                <div class="mr-2 align-self-center">
                  <img src="../../assets/img/patient-3.jpg" alt="people"/>
                </div>
                <div class="media-body">
                 
                  
                   <p class=" my-1 text-disabled"><strong>DOB:</strong> 10-10-2001 (38 Years)</p>
                   <p class=" my-1 text-disabled"><strong>Name:</strong> Ronald Jacobs</p>
                    <p class=" my-1 text-disabled"><strong>ID:</strong> C998659555</p>
                     <p class=" my-1 text-disabled"><strong>Location:</strong>  205 D, Raj Nagar</p>
                </div>
              </div>
            </div>
          </div>
          </Link>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
             <Link to="/userdetails">    
          <div class="ms-card">
            <div class="ms-card-body">
              <div class="media fs-14">
                <div class="mr-2 align-self-center">
                  <img src="../../assets/img/patient-4.jpg" alt="people"/>
                </div>
                <div class="media-body">
               
                  
                   <p class=" my-1 text-disabled"><strong>DOB:</strong> 27-03-1996 (45 Years)</p>
                   <p class=" my-1 text-disabled"><strong>Name:</strong> Mark Hunter</p>
                    <p class=" my-1 text-disabled"><strong>ID:</strong> Q008659555</p>
                     <p class=" my-1 text-disabled"><strong>Location:</strong> 416 D, Malwa Nagar</p>
                </div>
              </div>
            </div>
          </div>
          </Link>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
             <Link to="/userdetails">    
          <div class="ms-card">
            <div class="ms-card-body">
              <div class="media fs-14">
                <div class="mr-2 align-self-center">
                  <img src="../../assets/img/patient-5.jpg" alt="people"/>
                </div>
                <div class="media-body">
                
                 
                   <p class=" my-1 text-disabled"><strong>DOB:</strong> 23-03-1997 (44 Years)</p>
                   <p class=" my-1 text-disabled"><strong>Name:</strong> Cristina Groves</p>
                    <p class=" my-1 text-disabled"><strong>ID:</strong> P508659555</p>
                     <p class=" my-1 text-disabled"><strong>Location:</strong> 416 D, Malwa Nagar</p>
                </div>
              </div>
            </div>
          </div>
          </Link>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
             <Link to="/userdetails">    
          <div class="ms-card">
            <div class="ms-card-body">
              <div class="media fs-14">
                <div class="mr-2 align-self-center">
                  <img src="../../assets/img/patient-6.jpg" alt="people"/>
                </div>
                <div class="media-body">
                  
                 
                  <p class=" my-1 text-disabled"><strong>DOB:</strong> 05-04-2002 (37 Years)</p>
                   <p class=" my-1 text-disabled"><strong>Name:</strong> Justin Parker</p>
                    <p class=" my-1 text-disabled"><strong>ID:</strong> K908659005</p>
                     <p class=" my-1 text-disabled"><strong>Location:</strong> 109 G, Galaxy Wave</p>
                </div>
              </div>
            </div>
          </div>
          </Link>
        </div>
        </div>

                    
                </div>
            </div>
            
        </main>
    )
}

export default UserList
