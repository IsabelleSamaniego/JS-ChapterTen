"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Project 10-03

    Boulder Cycling Directions
    Author:     Isabelle Samaniego
    Date:       November 27, 2022

    Filename: project10-03.js
*/


function showMap() {
   
   // Page objects
   let bikeMap = document.getElementById("bikeMap");
   let bikeDirections = document.getElementById("bikeDirections");
   let startingPoint = document.getElementById("startingPoint");
   let endingPoint = document.getElementById("endingPoint");   

   // 5. 
   let bikeFind = new google.maps.DirectionsService();
   // 6.
   let bikeDraw = new google.maps.DirectionsRenderer(); 

   // 7.
   let Boulder = {lat: 40.01753, lng: -105.26496};

   // 8.
   let myMap = new google.maps.Map(bikeMap, {
        zoom: 12,
        center: Boulder,
        // fullscreenControl: false,
    });

    // 9.
    startingPoint.addEventListener("change", drawRoute);
    endingPoint.addEventListener("change", drawRoute);

    // 10.
    function drawRoute(){
        // 10.a.
        let bikeRoute = {
            origin: startingPoint.value,
            destination: endingPoint.value,
            travelMode: "BICYCLING"
        };

        // 10.b.
        bikeFind.route(bikeRoute, function(result, status) {
            if (status == "OK") {
                bikeDraw.setDirections(result);
                bikeDraw.setMap(myMap);
                bikeDraw.setPanel(bikeDirections);
            } else {
                bikeDirections.textContent = "Directions Unavailable: " + status;
            }
        });
    }


} 


