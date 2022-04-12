//Global Variables

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
};

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
