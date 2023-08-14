const latLonApiKey = "e8f9e38ac40025837107689f43a21895"

//declare undefined variables for city lat and longitude
let city;
let lat;
let lon; 

//api key for open weather
var key = "0d970495824f6a590f17626e78418e95"
//grab button from html
var button = document.getElementById("button");

//event listener to call function that gets lat and long
button.addEventListener("click", function(){


    getLL()
});

//this function gets the lat and long from openWeather's api and then throws those into a second function 
function getLL() {
    city = document.getElementById("input").value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
  .then( function(data){
      //var data = await response.json()
      console.log(data)
    return data.json()
      //create var to get the lat and long
      //will meed to put these into global vars
      //var {longitude, latitude} = data.data[0]
      //  lat = response.coord.lat;
      //  lon = response.coord.lon;
      //this pulls lat and long out of object
      //var {longitude, latitude} = data.data[0]
      //console.log(longitude, latitude);
      
      
  
  })
  .then (function (data) {
    console.log(data)
    lat = data.coord.lat;
    lon = data.coord.lon;
    getApi(lat, lon);
  })
     
  }
  
  