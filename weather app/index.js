const userTab = document.querySelector("[data-userWeather]")
const searchTab = document.querySelector("[data-searchWeather]")
const userContainer = document.querySelector(".weather-container")

const grantAccessContainer = document.querySelector(".frant-location-container");
const SearchFrom = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

let currentTab = userTab;
const API_KEY="e75734fe82927442abe3d61be954dbf6";
currentTab.classList.add("current-tab");

function switchTab(clickedTab){
    if(clickedTab != currentTab){
        currentTab.classList.remove("current-tab");
        currentTab=clickedTab;
        currentTab.classList.add("current-tab");
    }
}

userTab.addEventListener("click", () => {
    switchTab(userTab);
});

userTab.addEventListener("click", () => {
    switchTab(searchTab);
});

