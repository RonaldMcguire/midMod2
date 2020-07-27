import React from 'react';

import './App.css';

function Fstprofile() {
return (
    <div className="Image" id = "size">
        <div class="row row-cols-1" >
            <div class="col mb-4">
                <div class="card" >
                <img src ={require('./photos/redmoth.jpg')} alt = ""  />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                </div>
                </div>
            </div>
        </div>
    </div>
);
}

export default Fstprofile;