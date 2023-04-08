$(document).ready(function(){

    const weerUrl = https://api.openweathermap.org/data/2.5/weather?lat=51.99&lon=5.90&appid=435b60745b60be05a7a8f2ad1ac90bd1&units=metric&lang=nl

    $.ajax({
        url: weerUrl,
        success: function(weather) {
            console.log(weather);
        }
    })
})