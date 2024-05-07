// Calling showTime function at every second
setInterval(showTime, 1000);

// Defining showTime funcion
function showTime() {
	// Getting current time and date
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	am_pm = "AM";

	// Setting time for 12 Hrs format
	if (hour >= 12) {
		if (hour > 12) hour -= 12;
		am_pm = "PM";
	} else if (hour == 0) {
		hr = 12;
		am_pm = "AM";
	}

	hour =
		hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime =
		hour +
		":" +
		min +
		":" +
		sec +
		am_pm;

	// Displaying the time
	document.getElementById(
		"clock"
	).innerHTML = currentTime;
}

showTime();



document.addEventListener('DOMContentLoaded', function() {
	var currentDate = new Date();
	var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	var formattedDate = currentDate.toLocaleDateString('en-US', options);
	document.getElementById('date').innerHTML = formattedDate;
  });

  




  // Get current weather
  navigator.geolocation.getCurrentPosition(function(position) {
    var lat = 12.971599;
    var lon = 77.594566;
    var apiKey = '7a8cf79f1cb245fc4735b860e74fe450'; // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

	

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        var weatherDescription = data.weather[0].description;
        var temperature = data.main.temp;
        var weatherInfo = `Weather: ${weatherDescription}, Temperature: ${temperature}°C `;
        document.getElementById('weather').innerHTML = weatherInfo;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather').innerHTML = 'Unable to fetch weather data';
      });
  }, function(error) {
    console.error('Error getting geolocation:', error);
    document.getElementById('weather').innerHTML = 'Unable to determine location';
  });
