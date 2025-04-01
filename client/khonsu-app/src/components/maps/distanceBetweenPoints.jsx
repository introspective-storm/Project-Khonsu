// Will calculate using the haversine formula, for both kilometers and miles
function haversine_distanceMiles(mk1, mk2) {
    var R = 3958.8; // Radius of the Earth in miles
    var rlat1 = mk1.position.lat() * (Math.PI/180); // Convert degrees to radians
    var rlat2 = mk2.position.lat() * (Math.PI/180); // Convert degrees to radians
    var difflat = rlat2-rlat1; // Radian difference (latitudes)
    var difflon = (mk2.position.lng()-mk1.position.lng()) * (Math.PI/180); // Radian difference (longitudes)

    var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
    return d;
};

  function haversine_distanceKilometers(mk1, mk2) {
    var R = 6371.0710; // Radius of the Earth in miles
    var rlat1 = mk1.coordinates[1] * (Math.PI/180); // Convert degrees to radians
    var rlat2 = mk2.coordinates[1] * (Math.PI/180); // Convert degrees to radians
    var difflat = rlat2-rlat1; // Radian difference (latitudes)
    var difflon = (mk2.coordinates[0]-mk1.coordinates[0]) * (Math.PI/180); // Radian difference (longitudes)

    var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
    return d;
}

// const test1={ type: 'Point', coordinates: [-122.4194, 37.7749] };
// const test2={ type: 'Point', coordinates: [-122.4094, 37.7849] };

// haversine_distanceKilometers(test1, test2);

export {haversine_distanceMiles, haversine_distanceKilometers};