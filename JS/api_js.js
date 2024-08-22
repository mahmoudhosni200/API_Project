let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country_inp");
let result = document.getElementById("result"); // Ensure you have an element with id "result" to display the results

// Function to handle the search
function performSearch() {
    let countryName = countryInp.value;
    let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalUrl);
    fetch(finalUrl)
        .then((response) => response.json())
        .then((data) => {
            result.innerHTML = `
            <img src="${data[0].flags.svg}" class="flag-img">
            <h2>${data[0].name.common}</h2>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Capital:</h4>
                    <span>${data[0].capital[0]}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Continent:</h4>
                    <span>${data[0].continents[0]}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Population:</h4>
                    <span>${data[0].population}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Currency:</h4>
                    <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Common Languages:</h4>
                    <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
                </div>
            </div>
            `;
        })
        .catch(() => {
            if (countryName.length === 0) {
                alert("The Input Field Cannot Be Empty!!");
            } else {
                alert("Please enter a valid country name.");
            }
        });
}

// Add event listener for the button click
searchBtn.addEventListener("click", performSearch);

// Add event listener for Enter key press
countryInp.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        performSearch();
    }
});
