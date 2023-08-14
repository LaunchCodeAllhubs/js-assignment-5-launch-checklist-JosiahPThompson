// Write your JavaScript code here!

const { pickPlanet, addDestinationInfo, formSubmission, myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       let selectedPlanet = pickPlanet(listedPlanets);
   addDestinationInfo(
    document,
    selectedPlanet.name,
    selectedPlanet.diameter,
    selectedPlanet.star,
    selectedPlanet.distance,
    selectedPlanet.moons,
    selectedPlanet.imageUrl
   );
   });
   
   const form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
    event.preventDefault();

    const pilotName = document.querySelector("input[name='pilotName']").value;
    const copilotName = document.querySelector("input[name='copilotName']").value;
    const fuelLevel = document.querySelector("input[name='fuelLevel']").value;
    const cargoMass = document.querySelector("input[name='cargoMass']").value;

    formSubmission(document, pilotName, copilotName, fuelLevel, cargoMass);
   });
});