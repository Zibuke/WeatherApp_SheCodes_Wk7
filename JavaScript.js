//It receives the API response object (from Axios).It logs the actual data inside the response to the browser’s console. 
// That’s usually the weather data in your case.
function refreshWeather(response)
 {
    //console.log(response.data.temperature.current);

    let temperatureElement=document.querySelector ("#temperature");
    let temperature=response.data.temperature.current;
    temperatureElement.innerHTML= Math.round(temperature)

    console.log(response.data.condition.description);
    let descriptionElement=document.querySelector("#description");
    descriptionElement.innerHTML=response.data.condition.description;

    let humidityElement=document.querySelector("#humidity");
    humidityElement.innerHTML=`${response.data.temperature.humidity}%`;
    

    let windspeedElement=document.querySelector("#wind-speed");
    windspeedElement.innerHTML=`${response.data.wind.speed}Km/h`;
    

    let date = new Date(response.data.time * 1000);
    let timeElement=document.querySelector("#time");
    timeElement.innerHTML = formatDate(date);



function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

    
}



function searchCity(city)
{
    // Make API call and update the interface
let apiKey= "21ff4725686c44t39e36acoa026f04bf";
let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
//console.log(apiUrl);

axios.get(apiUrl).then(refreshWeather)

}





function handleSearchSubmit(event) 
{
    event.preventDefault();
    let searchInput = document.querySelector ("#search-form-input");
    
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
    

    searchCity(searchInput.value)
}
  
  let searchFormElement = document.querySelector("#search-form");
  searchFormElement.addEventListener("submit", handleSearchSubmit);