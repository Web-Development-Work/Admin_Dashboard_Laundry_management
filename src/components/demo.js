import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbarone from './User/Navbarone';

const demo = () => {
  return(
<main className="body-content">
    <Sidebar/>
    <div className="ms-content-wrapper">
        <div className="row">
            <Navbarone/>
            
        </div>
    </div>
</main>
  );
};

export default demo;
