import React from 'react';

import './App.css';

function second() {
return (
    <div className="Image" id = "size">
        <div class="row row-cols-1" >
            <div class="col mb-4">
                <div class="card" >
                <img src ={require('./photos/car.jpg')} alt = ""  />
                <div class="card-body">
                    <h5 class="card-title">Car</h5>
                </div>
                </div>
            </div>
        </div>
    </div>
);
}

export default second;