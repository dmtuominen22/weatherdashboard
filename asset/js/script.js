var APIkey = "12bf9ec4aa20634e8f6d280260ad6331";
var searchedCities= [];

$("#searchBtn").on("click", function () {
  $(".form-control").text();

  var latitude, longitude;

  var saveCity = $("#saveCity").val();
   searchedCities.push(saveCity);
   localStorage.setItem("cities", JSON.stringify(searchedCities));


  var localWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${saveCity}&appid=${APIkey}&units=imperial&exclude=minutely,hourly,alerts`;

  fetch(localWeatherURL)
    .then((response) => response.json())
    .then((data) => {
      //set the varibles for lat lon
      latitude = data.coord.lat;
      longitude = data.coord.lon;
      console.log(data);
      console.log(latitude, longitude);

      $("#localCity").text(data.name);
      $("#localDate").text(data.dt);
      $("#localIcon").html(
        "<img src='http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png'>"
      );
      $("#localTemp").text(data.main.temp);
      $("#localWind").text(data.wind.speed);
      $("#localHumid").text(data.main.humidity);

      var weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude.toString()}&lon=${longitude.toString()}&units=imperial&exclude=minutely,hourly,alerts&appid=${APIkey}`;

      fetch(weatherURL)
        .then((response) => response.json())
        .then((data) => {
          for (var i = 0; i < 6; i++) {
            $("#fiveDate" + i).text(data.daily[i].dt);
            $("#fiveIcon" + i).html(
              "<img src='http://openweathermap.org/img/wn/" +  data.daily[i].weather[0].icon +  ".png'>"
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




 

