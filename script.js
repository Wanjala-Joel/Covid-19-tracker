const init = function(){
    document.querySelector('.error-msg').style.display = 'none';
}

init();

async function fetchData() {
    const result = await fetch('https://api.covid19api.com/summary');

    const data = await result.json();

    const countries = data.Countries;

    console.log(data)

    let inputValue = document.querySelector('.countryName').value;

    for (let i = 0; i < countries.length; i++) {
        if (inputValue == countries[i].Country) {
            document.querySelector('.data-results').innerHTML = `
            <li>
            <h2 class="country-name">${countries[i].Country}</h2>
            <p class="total-cases">Total Cases: ${countries[i].TotalConfirmed}</p>
            <p class="total-cases">Total Recovery: ${countries[i].TotalRecovered}</p>
            <p class="total-cases">Total Deaths: ${countries[i].TotalDeaths}</p>
            </li>
            `;
        }else if(inputValue === ''){
            document.querySelector('.error-msg').style.display = 'block';
            document.querySelector('.error-msg').textContent = `Error, please enter a valid character.`;
        }else{
            document.querySelector('.error-msg').style.display = 'block';
            document.querySelector('.error-msg').textContent = `Error, start the country name with a capital letter.`;
        }

        console.log(countries[i].Country);

    }


}

// fetchData();

// Add an event listener
document.querySelector('.btn-primary').addEventListener('click', fetchData);