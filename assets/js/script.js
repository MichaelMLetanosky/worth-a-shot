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
function displayDrinks(data) {
    const drink = data;
    const drinkDiv = document.querySelector('#drinkDisplay');
    const drinkName = drink.strDrink;
    const heading = document.createElement("h1");
    heading.innerHTML = drinkName;
    drinkDiv.appendChild(heading);

    const drinkImg = document.createElement("img");
    drinkImg.src = drink.strDrinkThumb;
    drinkDiv.appendChild(drinkImg);
    

}

document.getElementById("locationSrch").addEventListener("click", findBars);
document.getElementById("ingredientSrch").addEventListener("click", findDrinks);


