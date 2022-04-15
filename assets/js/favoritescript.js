//Checks for save favorites and builds them if there are
function buildFavorites() {

    //check if there are favorites
    let favDrinkData = JSON.parse(localStorage.getItem("myDrinks"));
    let favBarData = JSON.parse(localStorage.getItem("myBars"));
    console.log(favDrinkData);
    console.log(favBarData);

    //Checks if there are saved favorites prior to building
    if (!favDrinkData && !favBarData) {
        return;
    };

    // Changes text on page, adds the main text box
    document.querySelector("#favMessage").innerHTML = "Here are a few of your favorite things...";
    document.querySelector("main").style.display = "block";

    // Builds Drink Cards only if there are saved drinks
    if (favDrinkData) {
        buildDrinkCards();
    };

    // Builds Bar Cards only if there are saved bars
    if (favBarData) {
        buildBarCards();
    };
}

//Generate Drink Cards
function buildDrinkCards () {
    console.log("build drinks");
};

//Generate Bar Cards
function buildBarCards () {
    console.log("build bars");
    
};

//Initial Call
buildFavorites ();