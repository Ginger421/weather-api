var latLonApiKey = "e8f9e38ac40025837107689f43a21895";
var city = document.getElementById("input");
var locationUrl = `http://api.positionstack.com/v1/forward?access_key=${latLonApiKey}&query=${city}`
var lat;
var lon; 


//api for open weather
var key = "0d970495824f6a590f17626e78418e95"
//var weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}`
//&exclude={part}&app
var button = document.getElementById("button");

button.addEventListener("click", function(){
      getLL()
});

//get the lat and long of city before using open weather
function getLL(params) {
fetch(locationUrl)
.then(async function(response){
    var data = await response.json()
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
    console.log(weatherData.current)
  }


  //// //weather conditions, the temperature, the humidity, the wind speed, and the UV index
//   weather icon
//   temp 
//   hum  
//   wind 
//   uv 


// function getApi(p1, p2) {
// console.log(lon);
// console.log(lat);

//   fetch(weatherUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     for (var i = 0; i < data.length; i++) {
//         console.log(data);
//     }
//   });
// }


















// const latLonApiKey = "e8f9e38ac40025837107689f43a21895";
// var city = document.getElementById("input");
// var locationUrl = `https://api.positionstack.com/v1/forward?access_key=${latLonApiKey}&query=${city}`
// //var lat and lon will be set in getLL function
// //var lat;
// //var lon; 
// // button calls funct to get lat long
// const button = document.getElementById("button"); 


// //data needed  city name, the date, an icon representation of 
// //weather conditions, the temperature, the humidity, the wind speed, and the UV index
// //api for open weather
// //	Hourly forecast: unavailable
// //Daily forecast: unavailable
// //Calls per minute: 60
// //3 hour forecast: 5 days
// //terms for excluding: current, minutely, hourly, daily, alerts
// const key = "303e46a2bd7379e0d5485d29ebf4c12f"
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

//     fetch(weatherUrl)
//     .then(async function(response){
//         var data = await response.json()
//         console.log(data);

//     })
//     //getApi()
//     //this pulls lat and long out of object
//     //var {longitude, latitude} = data.data[0]
//     //console.log(longitude, latitude);



// })
// }

// // function getApi(params) {
// //     fetch(weatherUrl)
// //     .then(async function(response){
// //         var data = await response.json()
// //         console.log(data);

// //     })
// // }
// // function getApi() {
// //   fetch(currentWeath)
// //   .then(async function(response) {
// //     var data = await response.json()
// //     return response.json();
// //   })
// //   .then(function (data) {
// //     for (var i = 0; i < data.length; i++) {
// //         console.log(data);
// //     }
// //   });
// // }