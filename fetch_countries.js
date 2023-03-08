//step 2
// console.log("HI!")


// step 4
// const getCountryByName = (countryName) => {
//     fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//     .then(response => response.json())
//     .then(data => console.log(data))

// }

//console.log(getCountryByName('Peru'));


//MVP
const getCountryByName = (countryName) => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const countryInfo = document.getElementById('country-info');

        const countryNameEle = document.createElement('h2');
        countryNameEle.innerHTML = data[0].name.common;

        const populationEle = document.createElement('p');
        populationEle.innerHTML = `Population of the country is: ${data[0].population}`;
        countryInfo.append(countryNameEle,populationEle);
    })

}


const getAllCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const countryList = document.getElementById('countries');
        data.forEach(country =>{
            //create a new div element for each country
            const newDiv = document.createElement('div');
            newDiv.classList.add('country');

            //create a new h2 to present the country name
            const countryNameHeading = document.createElement('h2');
            countryNameHeading.textContent = country.name.common;
            newDiv.appendChild(countryNameHeading);

            //create a new p for population
            const populationP = document.createElement('p');
            populationP.textContent = `Population of the country is: ${country.population}`;
            newDiv.appendChild(populationP);

            countryList.appendChild(newDiv);

        });
    });
};


console.log(getCountryByName('Peru'));
console.log(getAllCountries());
