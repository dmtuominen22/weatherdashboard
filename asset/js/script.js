var APIkey = "12bf9ec4aa20634e8f6d280260ad6331";
var searchedCities= [];
  // var formatDate= 1399919400000;
  // var today = moment.js(formatDate, "MM/DD/YYYY")


$(document).ready (function(){
  function searchCity(saveId){
    var saveCity;
    if (saveId==="saveCity"){
      saveCity=$("#" + saveId).val();
    }
    else {
      saveCity=$("#" + saveId).html();
    }
    alert(saveCity)
      var latitude, longitude;
    
      // var saveCity = $("#saveCity").val();
       searchedCities.push(saveCity);
       localStorage.setItem("cities", JSON.stringify(searchedCities));
       
        //retrive and display
        var listOfCities = "";
        var storedCities = JSON.parse(localStorage.getItem("cities"));
        for (var i=0; i< storedCities.length; i++ ){
          listOfCities+= "<li id='cityList"+ i +"'>" + storedCities[i] + "</li>";
       }
       document.getElementById("results").innerHTML = listOfCities;
    
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
          // $scope.SearchDate = moment(new Date()).format("MM/DD/YYYY")
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
              for (var i = 0; i < 5; i++) {
                $("#fiveDate" + (i + 1)).text(data.daily[i].dt);
                $("#fiveIcon" + (i +  1)).html(
                  "<img src='http://openweathermap.org/img/wn/" +  data.daily[i].weather[0].icon +  ".png'>"
                );
                $("#fiveTempMin" + (i +1)).text(data.daily[i].temp.min);
                $("#fiveTempMax" + (i +1)).text(data.daily[i].temp.max);
                $("#fiveWind" + (i +1)).text(data.daily[i].wind_speed);
                $("#fiveHumid" + (i+1)).text(data.daily[i].humidity);
                 }
    
           $("#localUvi").text(data.current.uvi);
    
         //create a loop over the uvi value to color code them
     var uvi = data.current.uvi;
    
     if (uvi <3) {
        // low, 2.99... and lower
       $("#localUvi").addClass("low");
       $("#localUvi").removeClass("med");
       $("#localUvi").removeClass("high");
       $("#localUvi").removeClass("veryHigh");
       $("#localUvi").removeClass("exHigh");
     } else if (uvi <6) {
        // med, 5.99... down to 3
       $("#localUvi").removeClass("low");
       $("#localUvi").addClass("med");
       $("#localUvi").removeClass("high");
       $("#localUvi").removeClass("veryHigh");
       $("#localUvi").removeClass("exHigh");
     } else if (uvi <8) {
       // high, 7.99... down to 6
       $("#localUvi").removeClass("low");
       $("#localUvi").removeClass("med");
       $("#localUvi").addClass("high");
       $("#localUvi").removeClass("veryHigh");
       $("#localUvi").removeClass("exHigh");
     } else if (uvi <11) {
        // very high, 10.99... down to 8
       $("#localUvi").removeClass("low");
       $("#localUvi").removeClass("med");
       $("#localUvi").removeClass("high");
       $("#localUvi").addClass("veryHigh");
       $("#localUvi").removeClass("exHigh");
     } else {
        // extremely high, any other number down to 11
       $("#localUvi").removeClass("low");
       $("#localUvi").removeClass("med");
       $("#localUvi").removeClass("high");
       $("#localUvi").removeClass("veryHigh");
       $("#localUvi").addClass("exHigh");
    
      } 
    });
    });
    
    }
    
  $("#searchBtn").on("click",searchCity("saveCity"));


// $("#results li").on("click",searchCity($(this).attr("id")));

});



  






 

