// Global Variables, including the google API key and the locally stored favs
const googleApiKey = "AIzaSyCbc5fH-NekhIhEMdTAUjxzRZHusawIAOA";
let favDrinkData = JSON.parse(localStorage.getItem("myDrinks"));
let favBarData = JSON.parse(localStorage.getItem("myBars"));

console.log(favDrinkData);
console.log(favBarData);

//Checks for save favorites and builds them if there are
function buildFavorites() {

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

};

//Generate Bar Cards
function buildBarCards () {

    // Displays Title of Section
    document.querySelector("#favBarTitle").style.display = "block";
    
    for (i=0; i < favBarData.length; i++) {
        // let favBarCard = document.createElement("div")
        let favBarCard = document.createElement("div");
        favBarCard.classList.add("favBars");
        document.querySelector("#favBarCont").appendChild(favBarCard);

        //Set Photo using a google referese number
        let favBarPhoto = favBarData[i].Photo;
        let favBarPhotoCont = document.createElement("img");
        favBarPhotoCont.src = `https://maps.googleapis.com/maps/api/place/photo?maxheight=500&maxwidth=600&photo_reference=${favBarPhoto}&key=${googleApiKey}`;
        favBarCard.appendChild(favBarPhotoCont);
        
        // Set Bar Name
        let favBarNameCont = document.createElement("a")
        favBarNameCont.innerHTML = favBarData[i].Name;
        favBarNameCont.setAttribute ("href", favBarData[i].url);
        favBarCard.appendChild(favBarNameCont);

        // Set Bar Address
        let favBarAddressCont = document.createElement("p");
        favBarAddressCont.innerHTML = favBarData[i].Address;
        favBarCard.appendChild(favBarAddressCont);

        // Set Bar Phone
        let favBarPhoneCont = document.createElement("p");
        favBarPhoneCont.innerHTML = `Phone: ${favBarData[i].Phone}`;
        favBarCard.appendChild(favBarPhoneCont);

        // Set Bar Rating
        let favBarRatingCont = document.createElement("p");
        favBarRatingCont.innerHTML = `Rating: ${favBarData[i].Rating}`;
        favBarCard.appendChild(favBarRatingCont);
    };
};

//Initial Call
buildFavorites ();