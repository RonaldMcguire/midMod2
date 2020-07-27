import React from 'react';

import './App.css';

function Fstprofile() {
return (
    <div className="Image" id = "size">
        <div class="row row-cols-1" >
            <div class="col mb-4">
                <div class="card" >
                <img src ={require('./photos/redmoth.jpg')} alt = ""  />

                </div>
            </div>
        </div>
    </div>
);
}

export default Fstprofile;