import React from 'react';

import './App.css';

function Bookmark() {
return (
    <div className="Image" id = "size">
        <div class="row row-cols-2" >
            <div class="col mb-4">
                <div class="card" >
                <img src ={require('./photos/car.jpg')} alt = ""  />
                <div class="card-body">
                    <h5 class="card-title">Car</h5>
                </div>
                </div>
            </div>
        
        
            <div class="col mb-4">
                <div class="card" >
                <img src ={require('./photos/redmoth.jpg')} alt = ""  />
                <div class="card-body">
                    <h5 class="card-title">Moth</h5>
                </div>
                </div>
            </div>
        </div>
        </div>
    
);
}

export default Bookmark;