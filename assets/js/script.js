//Global Variables

const googleApiKey = "AIzaSyCbc5fH-NekhIhEMdTAUjxzRZHusawIAOA"

//Script

function findBars(event) {
    event.preventDefault ();
    console.log("clicked location search");

    let cityName = document.getElementById("place").value;
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



        // API call to receive drink data by name ie. margaraita, rum, gin etc. 
        const api_url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${ingredientName}`
        async function getDrinks() {
        const response = await fetch(api_url);
        const data = await response.json();
        console.log(data);
        
        
        // Inhibits the same drink showing up multiple times
        document.querySelector("#drinkDisplay").innerHTML = ""
        // Pagination idea for multiple page selection if we have time
        // 20 / 6 = 3
        // 20 % 6 = 2
        // Grabs six random drinks from drinks array to then be ready to display
        var drinksArr = data.drinks
        for(i=0; i<6; i++) {
            var randomIndex = Math.floor(Math.random() * data.drinks.length)
            displayDrinks(drinksArr[randomIndex]);
            drinksArr.splice(randomIndex, 1)
        }
        
    }
    getDrinks ();

};

// Appends all selected data to the page 
function displayDrinks(data) {                                 // Passing data from get drinks function to displayDrinks function
    const drink = data; 
    const drinkDiv = document.querySelector('#drinkDisplay');  // Hooking into drinkDisplay container
    const drinkName = drink.strDrink;                          // Grabbing the drink name property from object
    const heading = document.createElement("h1");              // Creating an element to display drink name
    heading.innerHTML = drinkName;                             // Stating the drink name will be in the heading 
    drinkDiv.appendChild(heading);                             // Adding the text onto the page

    const drinkImg = document.createElement("img");            // Creating an element to add the drink image
    drinkImg.src = drink.strDrinkThumb;                        // Hooking into the data to grab the drinkImage property
    drinkDiv.appendChild(drinkImg);                            // Adding the image to the page

    const drinkIngredients = document.createElement("ul");     // creates an unordered list element to add drink ingredients
    drinkDiv.appendChild(drinkIngredients);

    // Ingredients aren't stored in an array in the API SO we must  create an object and only add ingredients that don't have a null value 
    const getIngredients = Object.keys(drink)
    .filter(function(ingredient){
        return ingredient.indexOf("strIngredient") == 0;
    })
    .reduce(function(ingredients, ingredient){
        if (drink[ingredient] != null ){
            ingredients[ingredient] = drink[ingredient];
        }
        return ingredients;
    }, {});

    for (let key in getIngredients) {
        let value = getIngredients[key];
        listItem = document.createElement("li");
        listItem.innerHTML = value;
        drinkIngredients.appendChild(listItem);
    }
}

document.getElementById("locationSrch").addEventListener("click", findBars);
document.getElementById("ingredientSrch").addEventListener("click", findDrinks);