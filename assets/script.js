const latLonApiKey = "e8f9e38ac40025837107689f43a21895"
//"e8f9e38ac40025837307689f43a23895";
let city = document.getElementById("input");
var lat;
var lon; 

//api for open weather
var key = "0d970495824f6a590f17626e78418e95"
var button = document.getElementById("button");

//var to add current weather to 
var currentWeather = document.getElementById("ul-current");
//date and weather icon go here
var dateIcon = document.getElementById("date-icon")

//create an onordered list with li where current weather will be displayed
var ulElement = document.createElement("ul")
var liTemp = document.createElement("li")
var liHumid = document.createElement("li")
var liWind = document.createElement("li")
var liUvi = document.createElement("li")

//set ul display to none
ulElement.style.listStyle = "none"

//append the li to ul
ulElement.appendChild(liTemp)
ulElement.appendChild(liHumid)
ulElement.appendChild(liWind)
ulElement.appendChild(liUvi)

//end ul for current

//get each p in each card for the five day forecast by id
var card1 = document.getElementById("ul1")
var card2 = document.getElementById("ul2")
var card3 = document.getElementById("ul3")
var card4 = document.getElementById("ul4")
var card5 = document.getElementById("ul5")

//create ul with future weather five day
//day 1
var day1 = document.createElement("ul")
var liTemp1 = document.createElement("li")
var liHumid1 = document.createElement("li")
var liWind1 = document.createElement("li")

day1.appendChild(liTemp1)
day1.appendChild(liHumid1)
day1.appendChild(liWind1)

//day 2
var day2 = document.createElement("ul")
var liTemp2 = document.createElement("li")
var liHumid2 = document.createElement("li")
var liWind2 = document.createElement("li")

day2.appendChild(liTemp2)
day2.appendChild(liHumid2)
day2.appendChild(liWind2)

//day3
var day3 = document.createElement("ul")
var liTemp3 = document.createElement("li")
var liHumid3 = document.createElement("li")
var liWind3 = document.createElement("li")

day3.appendChild(liTemp3)
day3.appendChild(liHumid3)
day3.appendChild(liWind3)

//day4
var day4 = document.createElement("ul")
var liTemp4 = document.createElement("li")
var liHumid4 = document.createElement("li")
var liWind4 = document.createElement("li")

day4.appendChild(liTemp4)
day4.appendChild(liHumid4)
day4.appendChild(liWind4)

//day5
var day5 = document.createElement("ul")
var liTemp5 = document.createElement("li")
var liHumid5 = document.createElement("li")
var liWind5  = document.createElement("li")

day5.appendChild(liTemp5)
day5.appendChild(liHumid5)
day5.appendChild(liWind5)

//date and time display
function dateTime() {
dateIcon.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
}
dateTime()

//click call function to get lat and lon
button.addEventListener("click", function(){
      getLL()
});

//get the lat and long of city before using open weather
function getLL(params) {
fetch(`http://api.positionstack.com/v1/forward?access_key=${latLonApiKey}&query=${city}`)
.then(async function(response){
    var data = await response.json()
    console.log(data)
    //create var to get the lat and long
    //will meed to put these into global vars
    var {longitude, latitude} = data.data[0]
    // lat = {latitude};
    // lon = {longitude};
    //this pulls lat and long out of object
    //var {longitude, latitude} = data.data[0]
    //console.log(longitude, latitude);
    
    getApi(latitude, longitude);

})
   
}


async function getApi(lat, lon) {
    let myObject = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`)   
    let weatherData = await myObject.json()
    console.log(weatherData)    
    // console.log(weatherData.current)
    // console.log(weatherData.current.temp)
    // console.log(weatherData.current.humidity)
    // console.log(weatherData.current.wind_speed)
    // console.log(weatherData.current.uvi)
    //console.log(weatherData.current.weather[0].icon)
    var icon = weatherData.current.weather[0].icon
    document.getElementById("icon").src= `http://openweathermap.org/img/wn/${icon}@2x.png` 

    //console.log(`http://openweathermap.org/img/wn/${icon}@2x.png`)

    //create variable to represent the data returned from fetch
    var temp = weatherData.current.temp
    var humidity = weatherData.current.humidity
    var windSpeed = weatherData.current.wind_speed
    var uvi = weatherData.current.uvi

    liTemp.textContent = ` temperature: ${temp}`;
    liHumid.textContent = `humidity: ${humidity}`;
    liWind.textContent = `wind speed: ${windSpeed}`;
    liUvi.textContent = `UV index: ${uvi}`;

    currentWeather.appendChild(ulElement)

    //get data for 5 day forecast
    console.log(weatherData.daily[0].temp.max)
    console.log(weatherData.daily[0].humidity)
    console.log(weatherData.daily[0].wind_speed)
    console.log(weatherData.daily[0].weather[0].icon)
    //get data for day2
    var high1 = weatherData.daily[0].temp.max
    var hum1 = weatherData.daily[0].humidity
    var wind1 = weatherData.daily[0].wind_speed

    //add data to card
    var iconDay1 = weatherData.daily[0].weather[0].icon
    document.getElementById("icon1").src= `http://openweathermap.org/img/wn/${iconDay1}@2x.png` 

    liTemp1.textContent =`High: ${high1}`
    liHumid1.textContent = `Humidity: ${hum1}`
    liWind1.textContent = `Wind speed: ${wind1}`

    card1.appendChild(day1)

    //get data for day 2
    var high2 = weatherData.daily[1].temp.max
    var hum2 = weatherData.daily[1].humidity
    var wind2 = weatherData.daily[1].wind_speed

    //add data to card
    var iconDay2 = weatherData.daily[1].weather[0].icon
    document.getElementById("icon2").src= `http://openweathermap.org/img/wn/${iconDay2}@2x.png` 

    liTemp2.textContent =`High: ${high2}`
    liHumid2.textContent = `Humidity: ${hum2}`
    liWind2.textContent = `Wind speed: ${wind2}`

    card2.appendChild(day2)

    //get data for day3
    var high3 = weatherData.daily[2].temp.max
    var hum3 = weatherData.daily[2].humidity
    var wind3 = weatherData.daily[2].wind_speed

    //add data to cards
    var iconDay3 = weatherData.daily[2].weather[0].icon
    document.getElementById("icon3").src= `http://openweathermap.org/img/wn/${iconDay3}@2x.png` 

    liTemp3.textContent =`High: ${high3}`
    liHumid3.textContent = `Humidity: ${hum3}`
    liWind3.textContent = `Wind speed: ${wind3}`

    card3.appendChild(day3)

    //get data for day4
    var high4 = weatherData.daily[3].temp.max
    var hum4 = weatherData.daily[3].humidity
    var wind4 = weatherData.daily[3].wind_speed

    //add data to card
    var iconDay4 = weatherData.daily[3].weather[0].icon
    document.getElementById("icon4").src= `http://openweathermap.org/img/wn/${iconDay4}@2x.png` 

    liTemp4.textContent =`High: ${high4}`
    liHumid4.textContent = `Humidity: ${hum4}`
    liWind4.textContent = `Wind speed: ${wind4}`

    card4.appendChild(day4)

     //get data for day5
     var high5 = weatherData.daily[4].temp.max
     var hum5 = weatherData.daily[4].humidity
     var wind5 = weatherData.daily[4].wind_speed
 
     //add data to card
     var iconDay5 = weatherData.daily[4].weather[0].icon
     document.getElementById("icon5").src= `http://openweathermap.org/img/wn/${iconDay5}@2x.png` 

     liTemp5.textContent =`High: ${high5}`
     liHumid5.textContent = `Humidity: ${hum5}`
     liWind5.textContent = `Wind speed: ${wind5}`
 
     card5.appendChild(day5)

     //end 5 day forecase    

  }
//end getApi


//localStorage.setItem(key, value);

  // let myObject = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`)   
  // let weatherData = await myObject.json()

  //// //weather conditions, the temperature, the humidity, the wind speed, and the UV index
//   weather icon
//   temp 
//   hum  
//   wind 
//   uv 


// current.uvi
// current.humidity
// current.temp
// current.wind_speed

//icon
//For code 500 - light rain icon = "30d". See below a full list of codes
//URL is http://openweathermap.org/img/wn/30d@2x.png

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, 
// an icon representation of weather conditions, the temperature, 
// the humidity, the wind speed, and the UV index

// WHEN I view the UV index
// THEN I am presented with a color that indicates 
// whether the conditions are favorable, moderate, or severe

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, 
// an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

// const key = "303e46a2bd7379e0d5485d29ebf4c32f"
// //var weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}`

// button.addEventListener("click", function(){
//       getLL()
// });

// //get the lat and long of city before using open weather
// function getLL(params) {
// fetch(locationUrl)
// .then(async function(response){
//     var data = await response.json()
//     //create var to get the lat and long
//     //will meed to put these into global vars
//     var {longitude} = data.data[0]
//     var {latitude} = data.data[0]
//     // lat = {latitude};
//     // lon = {longitude};
//     console.log(lon);
//     console.log(lat);

//     var weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}`


