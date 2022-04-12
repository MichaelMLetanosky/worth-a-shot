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
        // Retrieve specific properties from object array
        data.drinks[0].strDrink;
        data.drinks[0].strDrinkThumb;
        data.drinks[0].strIngredient1;
        data.drinks[0].strIngredient2;
        data.drinks[0].strIngredient3;
        data.drinks[0].strIngredient4;
        console.log(data.drinks[0].strDrink);
        console.log(data.drinks[0].strDrinkThumb);
        console.log(data.drinks[0].strIngredient1);
        console.log(data.drinks[0].strIngredient2);
        console.log(data.drinks[0].strIngredient3);
        console.log(data.drinks[0].strIngredient4);

        
            function displayDrinks(data) {
                const drink = data.drinks[0];
                const drinkDiv = document.querySelector('#drinkDisplay');
                const drinkName = drink.strDrink;
                const heading = document.createElement("h1");
                heading.innerHTML = drinkName;
                drinkDiv.appendChild(heading);

                const drinkImg = document.createElement("img");
                drinkImg.src = drink.strDrinkThumb;
                drinkDiv.appendChild(drinkImg);
                

            }
        //create element

        //append to display area
    }
    getDrinks ();

};


document.getElementById("locationSrch").addEventListener("click", findBars);
document.getElementById("ingredientSrch").addEventListener("click", findDrinks);


