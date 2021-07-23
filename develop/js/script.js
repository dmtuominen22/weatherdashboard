var APIkey = "12bf9ec4aa20634e8f6d280260ad6331";
// var uvWeatherURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + APIkey;
var localWeatherURL =
  "https://api.openweathermap.org/data/2.5/forecast?lat=" +
  36.7783 +
  "&lon=" +
  119.4179 +
  "&units=imperial&appid=" +
  APIkey;

$("#search-btn").on("click", function () {
  fetch(localWeatherURL)
    .then((response) => response.json())
    .then((data) => {
        $("#local-temp").text(data.list[0].main.temp)
        $("#local-wind").text(data.list[0].wind.speed)
        $("#local-humid").text(data.list[0].main.humidity)
        $("#local-uv").text(data.list[0].main.UV)
      console.log(data);
    });
});

//need to get current city and date when they search then

//need to get temp,wind speed, humidity and UV Index for that city

// need to get search button to work when they click on it will bring up current conditions for that city and show the 5 day forcast

//  need to store in local storage the last 5 options they serached for
