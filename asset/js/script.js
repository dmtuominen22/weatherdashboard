var APIkey = "12bf9ec4aa20634e8f6d280260ad6331";
var searchedCities = [];
// var formatDate= 1399919400000;
// var today = moment.js(formatDate, "MM/DD/YYYY")

function searchCity(saveId) {
    var saveCity;
   
    // check what kind of button is being pressed, the search button or the saved searches list
    saveId=$(this).attr("id");
    if (saveId==="searchBtn") {
        saveCity = $("#saveCity").val();
    }
    else {
        saveCity = $("#" + saveId).html();
    }
   
    if(saveCity != "") {
      $("#saveCity").val("");
        var latitude, longitude;

        // if the search button was pressed, add the city to the save search list
        if (saveId==="searchBtn") {
            searchedCities.push(saveCity);
            localStorage.setItem("cities", JSON.stringify(searchedCities));

            //retrive and display
            var listOfCities = "";
            var storedCities = JSON.parse(localStorage.getItem("cities"));
            for (var i=0; i< storedCities.length; i++ ){
                listOfCities+= "<li id='cityList"+ i +"'>" + storedCities[i] + "</li>";
            }
            document.getElementById("results").innerHTML = listOfCities;
            // once the LIs get made, add event listener
            $("#results li").on("click", searchCity);
        }

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
            var localDate = new Date(data.dt * 1000);
            $("#localDate").text("(" + (localDate.getMonth() + 1) + "/" + localDate.getDate() + "/" + localDate.getFullYear() + ")");
            $("#localIcon").html("<img src='http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png'>");
            $("#localTemp").text(data.main.temp);
            $("#localWind").text(data.wind.speed);
            $("#localHumid").text(data.main.humidity);

            var weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude.toString()}&lon=${longitude.toString()}&units=imperial&exclude=minutely,hourly,alerts&appid=${APIkey}`;

            fetch(weatherURL)
                .then((response) => response.json())
                .then((data) => {
                for (var i = 1; i < 6; i++) {
                    $("#fiveDate" + i).text(data.daily[i].dt);
                    var fiveDate = new Date(data.daily[i].dt * 1000);
                    $("#fiveDate" + i ).text( (fiveDate.getMonth() + 1) + "/" + fiveDate.getDate() + "/" + fiveDate.getFullYear() );
                    $("#fiveIcon" + i).html("<img src='http://openweathermap.org/img/wn/" + data.daily[i].weather[0].icon + ".png'>");
                    $("#fiveTempMin" + i).text(data.daily[i].temp.min);
                    $("#fiveTempMax" + i).text(data.daily[i].temp.max);
                    $("#fiveWind" + i).text(data.daily[i].wind_speed);
                    $("#fiveHumid" + i).text(data.daily[i].humidity);
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
}

$(document).ready(function(){
    $("#searchBtn").on("click", searchCity);
});