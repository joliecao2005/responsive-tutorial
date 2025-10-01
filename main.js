const modeButton = document.getElementById("modeButton");

// this will keep track of dark vs light mode
let isLightMode = true;

// function to toggle between dark mode and light mode
// takes in bool : if true set to dark if false set to light
function switchModes(toDark) {
  if (toDark) {
    modeButton.textContent = "Light Mode";
  } else {
    modeButton.textContent = "Dark Mode";
  }
}

modeButton.addEventListener("click", () => {
  switchModes(isLightMode);
});

// test to see if user prefers dark mode
// if so update the isLightMode variable, and our button text
let userModePreference = window.matchMedia("(prefers-color-scheme:dark)");
console.log(userModePreference.matches);
// if this statement is true, user says they want dark mode
if (userModePreference.matches) {
  isLightMode = false;
  switchModes(isLightMode);
}
