import React, { useState, useEffect } from 'react';

function BusinessList({business}) {
  return (
    <div class="card-container">
      <div class="cards" key={business._id}>
        <h2>{business.name}</h2>
        <p>{business.category}</p>
        </div>
  </div>
  );
}

export default BusinessList;