$(document).ready(function(){

    const weerUrl = https://api.openweathermap.org/data/2.5/weather?lat=51.99&lon=5.90&appid=8566d604cd9402b65394b034e52aa2af&units=metric&lang=nl

    $.ajax({
        url: weerUrl,
        success: function(weather) {
            console.log(weather);
        }
    })
})