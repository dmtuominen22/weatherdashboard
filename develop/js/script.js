var APIkey = "12bf9ec4aa20634e8f6d280260ad6331";
var uvWeatherURL =
  "https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}" + APIkey;
 var localWeatherURL =
   "https://api.openweathermap.org/data/2.5/forecast?lat=" +
   36.7783 +  "&lon=" +  119.4179 +  "&units=imperial&appid=" +  APIkey;


//   var localWeatherURL =
//   "https://api.openweathermap.org/data/2.5/forecast?lat=" +
//   lat +  "&lon=" +  lon +  "&units=imperial&appid=" +  APIkey;



$("#search-btn").on("click", function () {
  fetch(localWeatherURL)
    .then((response) => response.json())
    .then((data) => {
      // $("#local-city").text(data.list[0].city.name)
      $("#local-date").text(data.list[0].dt_txt);
      $("#local-temp").text(data.list[0].main.temp);
      $("#local-wind").text(data.list[0].wind.speed);
      $("#local-humid").text(data.list[0].main.humidity);
      console.log(data);
    });
});

//need to UV Index for that city
// $("#search-btn").on("click", function () {
//     fetch(uvWeatherURL)
//       .then((response) => response.json())
//       .then((data) => {
//         $("#local-uv").text(data.list[0].main.UV)
//         console.log(localUV);
//     });
// });


// need to get search button to work when they click on it will bring up current conditions for that city and show the 5 day forcast
$("#search-btn").on("click", function () {
  fetch(localWeatherURL)
    .then((response) => response.json())
    .then((data) => {
      $("#five-date1").text(data.list[6].dt_txt);
      $()
    //  $("#five-icon1").text(data.list[6].weather.0.icon);
      $("#five-temp1").text(data.list[6].main.temp);
      $("#five-wind1").text(data.list[6].wind.speed);
      $("#five-humid1").text(data.list[6].main.humidity);
      $("#five-date2").text(data.list[13].dt_txt);
    //   $("#five-icon2").text(list[14].weather.[0].icon);
      $("#five-temp2").text(data.list[14].main.temp);
      $("#five-wind2").text(data.list[14].wind.speed);
      $("#five-humid2").text(data.list[14].main.humidity);
      $("#five-date3").text(data.list[22].dt_txt);
    //   $("#five-icon3").text(list[22].weather.[0].icon);
      $("#five-temp3").text(data.list[22].main.temp);
      $("#five-wind3").text(data.list[22].wind.speed);
      $("#five-humid3").text(data.list[22].main.humidity);
      $("#five-date4").text(data.list[30].dt_txt);
    //   $("#five-icon4").text(list[30].weather.[0].icon);
      $("#five-temp4").text(data.list[30].main.temp);
      $("#five-wind4").text(data.list[30].wind.speed);
      $("#five-humid4").text(data.list[30].main.humidity);
      $("#five-date5").text(data.list[38].dt_txt);
    //   $("#five-icon5").text(list[38].weather.[0].icon);
      $("#five-temp5").text(data.list[38].main.temp);
      $("#five-wind5").text(data.list[38].wind.speed);
      $("#five-humid5").text(data.list[38].main.humidity);
    });
});

//  need to store in local storage the last 5 options they serached for

// $("#searchBtn").on("click", function () {
//     var citySearch = $("#").val();
//     localStorage.setItem("Searchbtn");
//   });