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
<<<<<<< HEAD
=======

        // API call to receive drink data by name ie. margaraita, rum, gin etc. 
        const api_url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${ingredientName}`
        async function getDrinks() {
        const response = await fetch(api_url);
        const data = await response.json();
        console.log(data);
        data.drinks[0].strDrink;
        console.log(data.drinks[0].strDrink);
        //For Loop to cycle 
        
        //create element

        //append to display area
    }
    getDrinks ();

>>>>>>> 03ed5f401582257ea1202ce508832ad27b541bb7
};


document.getElementById("locationSrch").addEventListener("click", findBars);
<<<<<<< HEAD
document.getElementById("ingredientSrch").addEventListener("click", findDrinks);
=======
document.getElementById("ingredientSrch").addEventListener("click", findDrinks);
>>>>>>> 03ed5f401582257ea1202ce508832ad27b541bb7
