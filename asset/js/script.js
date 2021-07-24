var APIkey = "12bf9ec4aa20634e8f6d280260ad6331";

$("#searchBtn").on("click", function () {
  $(".form-control").text();
  var saveCity = $(".form-control").val();
  console.log(saveCity);
  //  var lat ;
  //  var lon ;
  var localWeatherURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    saveCity +
    "&appid=" +
    APIkey +
    "&units=imperial&exclude=minutely,hourly,alerts";
  fetch(localWeatherURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      $("#localCity").text(data.name);
      $("#localDate").text(data.dt);
      $("#localIcon").html(
        "<img src='http://openweathermap.org/img/wn/" +
          data.weather[0].icon +
          ".png'>"
      );
      $("#localTemp").text(data.main.temp);
      $("#localWind").text(data.wind.speed);
      $("#localHumid").text(data.main.humidity);
    });

  //set the varibles for lat lon
  var lat = "data.coord.lat";
  var lon = "data.coord.lon";

  var weatherURL =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" + 43.618881 + "&lon=" + -116.215019 +
    "&units=imperial&exclude=minutely,hourly,alerts&appid=" + APIkey;
  $("#searchBtn").on("click", function () {
    fetch(weatherURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        for (var i = 0; i < 6; i++) {
          $("#fiveDate" + i).text(data.daily[i].dt);
          $("#fiveIcon" + i).html(
            "<img src='http://openweathermap.org/img/wn/" +
              data.daily[i].weather[0].icon +
              ".png'>"
          );
          $("#fiveTempMin" + i).text(data.daily[i].temp.min);
          $("#fiveTempMax" + i).text(data.daily[i].temp.max);
          $("#fiveWind" + i).text(data.daily[i].wind_speed);
          $("#fiveHumid" + i).text(data.daily[i].humidity);
          $("#localUvi").text(data.current.uvi);
        }
      });
  });
});

//  need to store in local storage the last 5 options they serached for

//  $("#searchBtn").on("click", function () {
//      localStorage.setItem("#Searchbtn")
//  });
