console.log("age-check js is hooked up")
// Get the modal
//declaring dom elements
var modal = document.getElementById("modal");
var yesBtn = document.querySelector(".yesBtn");
var noBtn = document.querySelector(".noBtn");

// When the user clicks on the button, open the modal
window.onload = function() {
  document.getElementById("modal").style.display = "block";
};


//function for yes button
function yesFunction(event){
  document.getElementById("modal").style.display = "none";
  console.log("yesFunction");
};

//function for no button
function noFunction(event){
  console.log("noFunction");
};
//call function for yesbtn
yesBtn.addEventListener ("click", yesFunction);

noBtn.addEventListener ("click", noFunction);


