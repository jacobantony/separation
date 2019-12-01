# Separation.js


![separation](https://i.imgur.com/rXfouBL.png)

Calculate the distance between 2 coordinates or check whether 2 coordinates are within a given range. Supports distance and range in miles, meters, and kilometers.

Based on the [Haversine formula][Haversine].

## Features
- Find the distance between 2 coordinates
- Check whether 2 coordinates are within a given range

## Installation
`const separation = require('separation');`

## Usage
This is how you can use it in your code.
    
	const separation = require('./index');
    /*coordinates must be objects with these keys: 
	(lat or latitude) and (lon, lng or longitude) */
    let c1 = { lat:13.7565, lng:13.76765 },
    	c2 = { latitude: 12.2321, lon: 12.2345 }
    
    //find the distance between 2 coordinates    
    let distance = separation.distance(c1, c2, "km"); //gets result in km (default)
    let distance_in_miles = separation.distance(c1, c2, "mi"); //gets result in miles
    let distance_in_meters = separation.distance(c1, c2, "m"); //gets result in meters
    
    //check if 2 coordinates are within a range. 
    //returns the distance if they are within the given range, otherwise returns false
    let nearby = separation.isNearby(c1, c2, 5, "km");
    

[Haversine]: http://https://en.wikipedia.org/wiki/Haversine_formula "haversine wiki"