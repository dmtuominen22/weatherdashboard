var APIkey = "12bf9ec4aa20634e8f6d280260ad6331";
var localWeatherURL =
"https://api.openweathermap.org/data/2.5/onecall?lat=" + 43.618881 + "&lon=" + -116.215019 + "&units=imperial&exclude=minutely,hourly,alerts&appid=" + APIkey;

$("#searchBtn").on("click", function () {
  fetch(localWeatherURL)
    .then((response) => response.json())
    .then((data) => {
      $("#localCity").text(data.timezone);
      $("#localDate").text(data.current.dt*1000);

      $("#localTemp").text(data.current.temp);
      $("#localWind").text(data.current.wind_speed);
      $("#localHumid").text(data.current.humidity);
      $("#localUvi").text(data.current.uvi);
 
      for(var i = 0; i < 6; i++) {
        $("#fiveDate" + i).text(data.daily[i].dt);
        $("#fiveIcon" + i).html("<img src='http://openweathermap.org/img/wn/" + data.daily[i].weather[0].icon + ".png'>");
        $("#fiveTempMin" + i).text(data.daily[i].temp.min);
        $("#fiveTempMax" + i).text(data.daily[i].temp.max);
        $("#fiveWind" + i).text(data.daily[i].wind_speed);
        $("#fiveHumid" + i).text(data.daily[i].humidity);
      }

    });
  });



//  need to store in local storage the last 5 options they serached for

// $("#searchBtn").on("click", function () {
//     var citySearch = $("#").val();
//     localStorage.setItem("Searchbtn");