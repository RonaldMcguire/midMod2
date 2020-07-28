import React from 'react';

import './App.css';

function Image() {
  return (
<div class="row row-cols-1 row-cols-sm-2">
  <div class="col mb-4">
    <div class="card">
    <img src ={require('./photos/redmoth.jpg')} alt = ""  />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col sm-4">
    <div class="card">
    <img src ={require('./photos/theater.jpg')} alt = ""  />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col sm-4">
    <div class="card">
    <img src ={require('./photos/open.jpg')} alt = ""  />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col sm-4">
    <div class="card">
    <img src ={require('./photos/clock.jpg')} alt = ""  />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>

        
  );
}


export default Image;
