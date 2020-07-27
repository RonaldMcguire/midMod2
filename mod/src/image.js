import React from 'react';

import './App.css';

function Image() {
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
            
        <div class="col mb-4">
            <div class="card" >
                <img src ={require('./photos/theater.jpg')} alt = ""  />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    </div>
                </div>
            </div>
        

        <div class="col mb-4">
            <div class="card" >
                <img src ={require('./photos/open.jpg')} alt = ""  />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    </div>
                </div>
            </div>

        <div class="col mb-4">
            <div class="card" >
                <img src ={require('./photos/clock.jpg')} alt = ""  />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    </div>
                </div>
            </div>
        </div>
        </div>
    

        
  );
}

export default Image;
