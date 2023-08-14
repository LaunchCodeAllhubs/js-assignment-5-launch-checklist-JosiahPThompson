// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   const missionTarget = document.getElementById("missionTarget");
   missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
   `
};

function validateInput(input) {
   if (input === "") {
    return "Empty";
   } else if (isNaN(input)) {
    return "Not a Number";
   } else {
    return "Is a Number";
   }
};

function formSubmission(document, pilot, copilot, fuelLevel, cargoMass) {
   const pilotStatus = document.getElementById("pilotStatus");
   const copilotStatus = document.getElementById("copilotStatus");
   const fuelStatus = document.getElementById("fuelStatus");
   const cargoStatusElement = document.getElementById("cargoStatus");
   const launchStatus = document.getElementById("launchStatus");

  
   pilotStatus.innerHTML = `Pilot ${pilot.value} is ${validateInput(pilot) === "Empty" ? "Not Ready" : "Ready"} for launch`;
   copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ${validateInput(copilot) === "Empty" ? "Not Ready" : "Ready"} for launch`;

   const fuelLevelNum = Number(fuelLevel);
   if (isNaN(fuelLevelNum) || fuelLevelNum < 10000) {
    faultyItems.style.visibility = "visible";
    fuelStatus.innerHTML = "Fuel level too low for launch";
    launchStatus.innerHTML = "Shuttle not ready for launch";
    launchStatus.style.color = "red";
   } else {
    fuelStatus.innerHTML = "Fuel level high enough for launch";
   }

   const cargoMassNum = Number(cargoMass);
   if (isNaN(cargoMassNum) || cargoMassNum > 10000) {
    faultyItems.style.visibility = "visibile";
    cargoStatusElement.innerHTML = "Cargo mass too high for launch";
    launchStatus.innerHTML = "Shuttle not ready for launch";
    launchStatus.style.color = "#C7254E";
   } else {
    cargoStatusElement.innerHTML = "Cargo mass low enough for launch";
   }

if (validateInput(pilot) !== "Empty" && validateInput(copilot) !== "Empty" && !isNaN(fuelLevelNum) && !isNaN(cargoMassNum)) {
    faultyItems.style.visibility = "hidden";
    launchStatus.innerHTML = "Shuttle is ready for launch";
    launchStatus.style.color = "#419F6A";
}

};

async function myFetch() {
    const response = await fetch('https://handlers.education.launchcode.org/static/planets.json');
    const planetsData = await response.json();
    return planetsData;

};

function pickPlanet(planets) {
    const randomNum = Math.floor(Math.random() * planets.length);
    return planets[randomNum];
};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
