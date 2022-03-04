// declare index for cards id 
let index = 0;

// grabing searchCity 
const searchCity = document.getElementById('searchCity');

// grabing searchBtn
const searchBtn = document.getElementById('searchBtn');

// declare an empty array
const cityName = [];

// add click event to searchBtn 
searchBtn.addEventListener('click', () => {
    // call setData function
    setData();
    // setting searchCity value equals to ""
    searchCity.value = "";
});

// asynchronous function for fetch data 
async function fetchData(query) {
    // await request's will fire at last
    // to collect promise with the value by using query variable
    const request = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d3cd4481a1db4ef3b3f161032220103&q=${query},india&days=7`);

    // to collect promise json with the parsed value
    const response = await request.json();

    // return response 
    return response;
}

// function to show error
function showError(error, type) {
    
    // grabing noNameError
    const noNameError = document.getElementById('noNameError');

    // grabing sameNameError
    const sameNameError = document.getElementById('sameNameError');
    
    // declare block 
    const block = 'block';

    // if error is true then this will fire 
    if (error) {
        // if type equals to noName then this will fire
        if (type === 'noName') {
            // add block class to noNameError
            noNameError.classList.add(block);
            // set 5 seconds timeout after timeout removeError function will call with noNameError argument
            setTimeout(() => removeError(noNameError), 5000);
        } else {
            // add block class to sameNameError
            sameNameError.classList.add(block);
            // set 5 seconds timeout after timeout removeError function will call with sameNameError argument
            setTimeout(() => removeError(sameNameError), 5000);
        };
    }else {
        // remove block class form noNameError
        noNameError.classList.remove(block);

        // remove block class form sameNameError
        sameNameError.classList.remove(block);
    };
};

// function to remove error according to set timout
function removeError(error){
    // remove block class from error parameter
    error.classList.remove('block');
};

// function for append data in wheatherCard div
function setData() {
    // collect searchCity value
    const searchCityValue = searchCity.value;

    // declare a regex with one or more than one word
    const regex = /\w+/;

    // if searchCityValue pass regex test
    if (regex.test(searchCityValue)) {
        // if cityName array includes searchCityValue
        if (cityName.includes(searchCityValue)) {
            // then call showError function to show same name error
            showError(true, 'showName');
        } else {
            // call showError function to remove error
            showError(false, 'noError');
            // collect promise data from fetchData function
            const data = fetchData(searchCityValue);
            // using data promise to create and append card html template in wheatherCard 
            data.then((data) => {
                // push searchCityValue into cityName array
                cityName.push(searchCityValue);
                // if there were more than 5 date, mintemp, maxtemp then this should be iterate by using a for loop
                // declare template to contain our card
                const template = `
                    <div class="card border1px-white b-radius width-75 m-auto p-2 color-white my-2 center" id="card-${index}">
                        <div class="topContainer flex justify-between" id="topContainer-${index}">
                            <div class="temperatureContainer mx-2" id="temperatureContainer-${index}">
                                <span class="temperature" id="temperature-${index}">
                                ${data.current.temp_c}
                                <sup>o</sup>
                                C
                                </span>
                            </div> 

                        <div class="wheatherHeadingContainer mx-2" id="wheatherHeadingContainer-${index}">
                            <h2 class="wheatherHeading" id="wheatherHeading-${index}">${data.location.name}, ${data.location.country}</h2>
                        </div>
                        </div>

                        <div class="middleContainer flex justify-between" id="middleContainer-${index}">
                            <div class="staticsContainer" id="staticsContainer"-${index}>
                                <p class="windContainer" id="windContainer-${index}">
                                    Wind: ${data.current.wind_mph} mph
                                </p>
                    
                                <p class="humidityContainer" id="humidityContainer-${index}">
                                    Humidity: ${data.current.humidity}%
                                </p>
                            </div>

                            <div class="dateContainer" id="dateContainer-${index}">
                                <p class="dayTimeContainer" id="dayTimeContainer-${index}">
                                    ${data.current.last_updated}
                                </p>

                                <p class="wheatherCondition" id="wheatherCondition-${index}">
                                    ${data.current.condition.text}
                                </p>
                            </div>
                        </div>

                        <div class="bottomContainer" id="bottomContainer-${index}">
                            <table class="minMaxContainer width-100" id="minMaxContainer-${index}">
                                <thead class="minMaxHead" id="minMaxHead-${index}">
                                    <tr class="dateHeader">
                                        <th class="dates" id="dates-${index}-1"></th>
                                        <th class="dates" id="dates-${index}-2">${data.forecast.forecastday[0].date}</th>
                                        <th class="dates" id="dates-${index}-3">${data.forecast.forecastday[1].date}</th>
                                        <th class="dates" id="dates-${index}-4">${data.forecast.forecastday[2].date}</th>
                                    </tr>
                                </thead>

                                <tbody class="minMaxBody" id="minMaxBody-${index}">
                                    <tr class="minContainer center" id="minContainer-${index}">
                                        <td class="min" id="min-${index}-1">Min</td>
                                        <td class="min" id="min-${index}-2">${data.forecast.forecastday[0].day.mintemp_c}</td>
                                        <td class="min" id="min-${index}-3">${data.forecast.forecastday[1].day.mintemp_c}</td>
                                        <td class="min" id="min-${index}-4">${data.forecast.forecastday[2].day.mintemp_c}</td>
                                    </tr>
                    
                                    <tr class="maxContainer center" id="maxContainer-${index}">
                                        <td class="max" id="max-${index}-1">Max</td>
                                        <td class="max" id="max-${index}-2">${data.forecast.forecastday[0].day.maxtemp_c}</td>
                                        <td class="max" id="max-${index}-3">${data.forecast.forecastday[1].day.maxtemp_c}</td>
                                        <td class="max" id="max-${index}-4">${data.forecast.forecastday[2].day.maxtemp_c}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>`;
                    // increamenting index by 1
                    index++;
                // grabing wheatherCard 
                const wheatherCard = document.getElementById('wheatherCard');
                // append template to wheatherCard inner html
                wheatherCard.innerHTML += template;
            });
        };
    } else {
        // call showError function to show no name error
        showError(true, 'noName');
    };
};