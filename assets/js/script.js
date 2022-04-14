//Global Variables

const googleApiKey = "AIzaSyCbc5fH-NekhIhEMdTAUjxzRZHusawIAOA";

//Script
//Uses input from city search and gets latitude and logitude for the showBars function
function findBars(event) {
    event.preventDefault ();

    //Checks that a city name was entered
    let cityName = document.getElementById("place").value;
    if (!cityName) {
        alert("Please enter the name of a city");
        return;
    };

    //Geolocates using googleAPI to find latitude and logitude
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
            //Gets latitude and logitude from the data and passes to the shows Bars function
            let locationLat = data.results[0].geometry.location.lat;
            let locationLng = data.results[0].geometry.location.lng;
            showBars (locationLat, locationLng);
        })   
};

//Uses latitude and longitude to get nearby bars from google places and creates business cards for bars
function showBars(x, y) {
    //Clear current display area 
    var e = document.querySelector(".barCardCont");
    var child = e.lastElementChild; 
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    };

    //Fetch data from Google Near By Places
    fetch (`https://floating-headland-95050.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${x}%2c${y}&radius=8500&type=bar&opennow=true&key=${googleApiKey}`)
        .then(response => {
            //Check that response came back good
            if (!response.ok) {
                alert("Could not find location, please try again");
                return;
            };

            return response.json();
        })
        .then(data => {
            //Makes cards for up to 6 business or as many business are returned
            for (let i = 0; i < 6 && i < data.results.length; i++) {
                //Makes the card to contain the information
                let barCard = document.createElement("div");
                barCard.classList.add("barCard");
                document.querySelector(".barCardCont").appendChild(barCard);
                
                //Set bar photo
                let photoRef = data.results[i].photos[0].photo_reference
                let barPicCont = document.createElement("img");
                barPicCont.src = `https://maps.googleapis.com/maps/api/place/photo?maxheight=500&maxwidth=500&photo_reference=${photoRef}&key=${googleApiKey}`;
                document.querySelectorAll(".barCard")[i].appendChild(barPicCont);
                //Set the name
                let barName = data.results[i].name;
                let barNameCont = document.createElement("a");
                barNameCont.innerHTML = barName;
                document.querySelectorAll(".barCard")[i].appendChild(barNameCont);
                //Set the address
                let barAddress = data.results[i].vicinity;
                let barAddressCont = document.createElement("p");
                barAddressCont.innerHTML = barAddress;
                document.querySelectorAll(".barCard")[i].appendChild(barAddressCont);
                //Gets additional details for location then uses Places Detail search for even more info
                let placeID = data.results[i].place_id;
                fetch (`https://floating-headland-95050.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?&place_id=${placeID}&key=${googleApiKey}`)
                    .then(response => {
                        //Check that response came back good
                        if (!response.ok) {
                            return;
                        };

                        return response.json();
                    })
                    .then(data => {
                        //Set the phone number
                        let barPhone = data.result.formatted_phone_number;
                        //Checks that a phone number is listed before setting it
                        if (barPhone) {
                            let barPhoneCont = document.createElement("p");
                            barPhoneCont.innerHTML = `Phone: ${barPhone}`;
                            document.querySelectorAll(".barCard")[i].appendChild(barPhoneCont);
                        };
                        //Set the rating
                        let barRating = data.result.rating;
                        let barRatingCont = document.createElement("p");
                        barRatingCont.innerHTML = `Rating: ${barRating}`;
                        document.querySelectorAll(".barCard")[i].appendChild(barRatingCont);
                        //Set url to make the place name link to it on google maps
                        let barURL = data.result.url;
                        document.querySelectorAll(".barCard")[i].querySelector("a").setAttribute ("href", barURL);
                        //Add a save button to the card
                        let barSave = document.createElement("button");
                        barSave.innerHTML = `➕`;
                        //Sets name and URL in data of HTML to assist save functionality
                        let barObjSet = [{
                            Name: barName,
                            url: barURL,
                            Photo: photoRef,
                            Address: barAddress,
                            Phone: barPhone,
                            Rating: barRating
                        }];
                        barSave.dataset.barInfo = JSON.stringify(barObjSet);
                        document.querySelectorAll(".barCard")[i].appendChild(barSave);
                        barSave.addEventListener("click", saveBars);
            })
            };
        })
};


//Saves the bar to local Storage
function saveBars(event) {
    let barObj = event.target.dataset.barInfo;
    if (localStorage.getItem(`myBars`)){
        let savedBars = JSON.parse(localStorage.getItem(`myBars`));
        let newBar = JSON.parse(barObj);
        updatedBars = savedBars.concat(newBar);
        localStorage.setItem(`myBars`, JSON.stringify(updatedBars));
    } else {
        localStorage.setItem(`myBars`, barObj);
    };
};

//Function for searching for drinks based of any ingredient
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
        const api_url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredientName}`
        async function getDrinks() {
        const response = await fetch(api_url);
        const data = await response.json();
        console.log(data);
        
        
        // Inhibits the same drink showing up multiple times
        document.querySelector(".drinkCardCont").innerHTML = ""
        // Pagination idea for multiple page selection if we have time
        // 20 / 6 = 3
        // 20 % 6 = 2
        // Grabs six random drinks from drinks array to then be ready to display
        var drinksArr = data.drinks
        for(i=0; i<6; i++) {
            if (drinksArr < 6) {
                return [i]
            }  
            var randomIndex = Math.floor(Math.random() * data.drinks.length)
            displayDrinks(drinksArr[randomIndex]);
            drinksArr.splice(randomIndex, 1)
        }
        
    }
    getDrinks ();

};



// Appends all selected data to the page 
function displayDrinks(drinkData) {                                 // Passing data from get drinks function to displayDrinks function
    let drink = drinkData; 
    let drinkDiv = document.createElement("div");
    drinkDiv.classList.add("drinkCard");
    document.querySelector(".drinkCardCont").appendChild(drinkDiv);
    // const drinkDiv = document.querySelector('.drinkCard');  // Hooking into drinkDisplay container
    
    const drinkImg = document.createElement("img");            // Creating an element to add the drink image
    drinkImg.src = drink.strDrinkThumb;                        // Hooking into the data to grab the drinkImage property
    drinkDiv.appendChild(drinkImg);  

    const drinkName = drink.strDrink;                          // Grabbing the drink name property from object
    const heading = document.createElement("h2");              // Creating an element to display drink name
    heading.innerHTML = drinkName;                             // Stating the drink name will be in the heading 
    drinkDiv.appendChild(heading);

    //Add a save button to the card
    let drinkSave = document.createElement("button");
    drinkSave.innerHTML = `➕`;
    //Sets name and URL in data of HTML to assist save functionality
    let drinkObjSet = [{
        Photo: drink.strDrinkThumb,
        Name: drinkName
    }];
    drinkSave.dataset.drinkInfo = JSON.stringify(drinkObjSet);
    drinkDiv.appendChild(drinkSave);
    drinkSave.addEventListener("click", saveDrinks);

    // Gets ingredient api
    const ingredientAPI = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`
    async function getIngred() {
        const response = await fetch (ingredientAPI);
        const data = await response.json();
        const cocktail = data.drinks[0];
        
        // Adds ul element
        const cocktailIngredients = document.createElement ("ul");
        
        drinkDiv.appendChild(cocktailIngredients);
// pulls ingredients from created object and displays to cards
        const getIngredients = Object.keys(cocktail)
            .filter(function (ingredient) {
            return ingredient.indexOf("strIngredient") == 0;
            })
            .reduce(function (ingredients, ingredient) {
            if (cocktail[ingredient] != null) {
                ingredients[ingredient] = cocktail[ingredient];
            }
            return ingredients;
            }, {});

        for (let key in getIngredients) {
            let value = getIngredients[key];
            listItem = document.createElement("li");
            listItem.innerHTML = value;
            cocktailIngredients.appendChild(listItem);
        }
    } 
        getIngred ();
}

function saveDrinks (event) {
    let drinkObj = event.target.dataset.drinkInfo;
    if (localStorage.getItem(`myDrinks`)){
        let savedDrinks = JSON.parse(localStorage.getItem(`myDrinks`));
        let newDrinks = JSON.parse(drinkObj);
        updatedDrinks = savedDrinks.concat(newDrinks);
        localStorage.setItem(`myDrinks`, JSON.stringify(updatedDrinks));
    } else {
        localStorage.setItem(`myDrinks`, drinkObj);
    };
}
  
document.getElementById("locationSrch").addEventListener("click", findBars);
document.getElementById("ingredientSrch").addEventListener("click", findDrinks);