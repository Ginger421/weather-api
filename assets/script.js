var latLonApiKey = "e8f9e38ac40025837107689f43a21895";
var city = document.getElementById("input");
var locationUrl = `http://api.positionstack.com/v1/forward?access_key=${latLonApiKey}&query=denver`
var lat;
var long; 


//api for open weather
var key = "c79d0695721893be2bf8884e003f3d5e"
var weatherUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={long}&exclude={part}&appid={key}"
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
    var {longitude} = data.data[0]
    var {latitude} = data.data[0]
    lat = {latitude};
    long = {longitude};
    console.log(long);
    //this pulls lat and long out of object
    //var {longitude, latitude} = data.data[0]
    //console.log(longitude, latitude);
})
}


// function getApi() {
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