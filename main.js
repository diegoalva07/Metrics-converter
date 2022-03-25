

function length(entry){
    
    entry = `${entry} Meters = ${((entry)*3.28).toFixed()} Foot / ${((entry)*3.28).toFixed()} Foot = ${entry} Meters  `
    const meterFeet = document.getElementById("length").innerText = entry;
    
}

function valume(entry){
    
    entry = `${entry} Liters = ${((entry)/3.78).toFixed()} Gallons / ${((entry)/3.78).toFixed()} gallons = ${entry} Liters  `
    const meterFeet = document.getElementById("volume").innerText = entry;
    
}

function mass(entry){
    
    entry = `${entry} Kilos = ${((entry)*2.2).toFixed()} Pounds / ${((entry)*2.2).toFixed()} Pounds = ${entry} Kilos  `
    const meterFeet = document.getElementById("mass").innerText = entry;
    
}

function convertNumber(event){
   
    event.preventDefault(); 
    const entry = Number(document.querySelector("#input-btn").value);
    if (!entry) return;
    document.querySelector("form").reset()
    console.log(entry);
    length(entry);
    valume(entry);
    mass(entry);
   
}

const inputEvent = document.querySelector("form").addEventListener("submit", convertNumber);
