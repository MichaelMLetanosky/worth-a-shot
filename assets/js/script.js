//Global Variables

const googleApiKey = "AIzaSyCbc5fH-NekhIhEMdTAUjxzRZHusawIAOA"

//Script

function findBars(event) {
    event.preventDefault();
    console.log("clicked location search");

    let cityName = document.getElementById("location").value.trim();
    console.log(cityName);
    if (!cityName) {
        alert("Please enter the name of a city");
        return;
    };

    fetch (`https://maps.googleapis.com/maps/api/geocode/json?address=${cityName}&key=${googleApiKey}`)
        .then(response => {
            //Check that response came back good
            if (!response.ok) {
                alert("Could not find location, please try again");
                return;
            };

            return response.json();
        })
        .then(data => {
            console.log(data) 
            let locationLat = data.results[0].geometry.location.lat
            let locationLng = data.results[0].geometry.location.lng
            console.log (locationLat)
            console.log (locationLng)
            showBars (locationLat, locationLng)
        })   
};

function showBars(x, y) {
    fetch (`https://floating-headland-95050.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${x}%2c${y}&radius=8500&type=bar&key=${googleApiKey}`)
        .then(response => {
            //Check that response came back good
            if (!response.ok) {
                alert("Could not find location, please try again");
                return;
            };

            return response.json();
        })
        .then(data => {
            console.log(data.results) 
        })
}

function findDrinks(event) {
    event.preventDefault();
    console.log("clicked ingredient search");

    let ingredientName = document.getElementById("ingredient").value.trim();
    console.log(ingredientName);
    if (!ingredientName) {
        alert("Please enter an ingredient");
        return;
    };
};


document.getElementById("locationSrch").addEventListener("click", findBars);
document.getElementById("ingredientSrch").addEventListener("click", findDrinks);