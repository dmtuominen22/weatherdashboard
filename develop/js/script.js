var APIkey = "12bf9ec4aa20634e8f6d280260ad6331";
var uvWeatherURL =
  "https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}" + APIkey;
 var localWeatherURL =
   "https://api.openweathermap.org/data/2.5/forecast?lat=" +
   36.7783 +  "&lon=" +  119.4179 +  "&units=imperial&appid=" +  APIkey;


//   var localWeatherURL =
//   "https://api.openweathermap.org/data/2.5/forecast?lat=" +
//   lat +  "&lon=" +  lon +  "&units=imperial&appid=" +  APIkey;



$("#searchBtn").on("click", function () {
  fetch(localWeatherURL)
    .then((response) => response.json())
    .then((data) => {
      // $("#local-city").text(data.list[0].city.name)
      $("#localDate").text(data.list[0].dt_txt);
      $("#localTemp").text(data.list[0].main.temp);
      $("#localWind").text(data.list[0].wind.speed);
      $("#localHumid").text(data.list[0].main.humidity);
      console.log(data);
    });
});

//need to UV Index for that city
// $("#search-btn").on("click", function () {
//     fetch(uvWeatherURL)
//       .then((response) => response.json())
//       .then((data) => {
//         $("#localUv").text(data.list[0].main.UV)
//         console.log(localUV);
//     });
// });


// need to get search button to work when they click on it will bring up current conditions for that city and show the 5 day forcast
$("#searchBtn").on("click", function () {
  fetch(localWeatherURL)
    .then((response) => response.json())
    .then((data) => {
      $("#fiveDate1").text(data.list[6].dt_txt);

    //  $("#fiveIcon1").text(data.list[6].weather.0.icon);
      $("#fiveTemp1").text(data.list[6].main.temp);
      $("#fiveWind1").text(data.list[6].wind.speed);
      $("#fiveHumid1").text(data.list[6].main.humidity);
      $("#fiveDate2").text(data.list[13].dt_txt);
    //   $("#fiveIcon2").text(list[14].weather.[0].icon);
      $("#fiveTemp2").text(data.list[14].main.temp);
      $("#fiveWind2").text(data.list[14].wind.speed);
      $("#fiveHumid2").text(data.list[14].main.humidity);
      $("#fiveDate3").text(data.list[22].dt_txt);
    //   $("#fiveIcon3").text(list[22].weather.[0].icon);
      $("#fiveTemp3").text(data.list[22].main.temp);
      $("#fiveWind3").text(data.list[22].wind.speed);
      $("#fiveHumid3").text(data.list[22].main.humidity);
      $("#fiveDate4").text(data.list[30].dt_txt);
    //   $("#fiveIcon4").text(list[30].weather.[0].icon);
      $("#fiveTemp4").text(data.list[30].main.temp);
      $("#fiveWind4").text(data.list[30].wind.speed);
      $("#fiveHumid4").text(data.list[30].main.humidity);
      $("#fiveDate5").text(data.list[38].dt_txt);
    //   $("#fiveIcon5").text(list[38].weather.[0].icon);
      $("#fiveTemp5").text(data.list[38].main.temp);
      $("#fiveWind5").text(data.list[38].wind.speed);
      $("#fiveHumid5").text(data.list[38].main.humidity);
    });
});

//  need to store in local storage the last 5 options they serached for

// $("#searchBtn").on("click", function () {
//     var citySearch = $("#").val();
//     localStorage.setItem("Searchbtn");
//   });