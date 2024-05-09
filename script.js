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

  

 // Get user's location using Geolocation API
 navigator.geolocation.getCurrentPosition(position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Fetch weather data based on user's location
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=7a8cf79f1cb245fc4735b860e74fe450&units=metric`)
        .then(response => response.json())
        .then(data => {
            // Extract relevant weather information
            const location = data.name;
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            // Populate the weather div with the information
            document.getElementById('weather').innerHTML = `Location: ${location}, Temperature: ${temperature} °C, Description: ${description}`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}, error => {
    console.error('Error getting user location:', error);
});















// fetch('https://api.openweathermap.org/data/2.5/weather?q=Bangalore&appid=7a8cf79f1cb245fc4735b860e74fe450&units=metric')
// .then(response => response.json())
// .then(data => {

//     const location = data.name;
//     const temperature = data.main.temp;
//     const description = data.weather[0].description;

//     document.getElementById('weather').innerHTML = `Location: ${location} , Description: ${description} , Temperature: ${temperature}°C, `;
// })
// .catch(error => {
//     console.error('Error fetching weather data:', error);
// });



  
//   navigator.geolocation.getCurrentPosition(function(position) {
//     var lat = 12.971599;
//     var lon = 77.594566;
//     var apiKey = '7a8cf79f1cb245fc4735b860e74fe450'; 
//     var apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

	

//     fetch(apiUrl)
//       .then(response => response.json())
//       .then(data => {
//         var weatherDescription = data.weather[0].description;
//         var temperature = data.main.temp;
//         var weatherInfo = `Weather: ${weatherDescription}, Temperature: ${temperature}°C `;
//         document.getElementById('weather').innerHTML = weatherInfo;
//       })
//       .catch(error => {
//         console.error('Error fetching weather data:', error);
//         document.getElementById('weather').innerHTML = 'Unable to fetch weather data';
//       });
//   }, function(error) {
//     console.error('Error getting geolocation:', error);
//     document.getElementById('weather').innerHTML = 'Unable to determine location';
//   });





  function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    var bmi = weight / (height * height);

    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Your BMI is: ' + bmi.toFixed(4);
}





// Stopwatch
var stopwatchInterval;
var stopwatchTime = 0;
var stopwatchRunning = false;

function startStopwatch() {
    if (!stopwatchRunning) {
        stopwatchInterval = setInterval(updateStopwatch, 1000);
        stopwatchRunning = true;
    }
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
    stopwatchTime = 0;
    document.getElementById('stopwatchDisplay').textContent = '00:00:00';
}

function updateStopwatch() {
    stopwatchTime++;
    var hours = Math.floor(stopwatchTime / 3600);
    var minutes = Math.floor((stopwatchTime % 3600) / 60);
    var seconds = stopwatchTime % 60;

    var display = 
        (hours < 10 ? '0' : '') + hours + ':' +
        (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds;

    document.getElementById('stopwatchDisplay').textContent = display;
}

// Timer
var timerInterval;
var timerTime = 0;
var timerRunning = false;

function startTimer() {
    if (!timerRunning) {
        timerTime = parseInt(document.getElementById('timerInput').value);
        if (timerTime <= 0) {
            alert('Please enter a valid time.');
            return;
        }
        timerInterval = setInterval(updateTimer, 1000);
        timerRunning = true;
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
    timerTime = 0;
    document.getElementById('timerInput').value = '60';
    document.getElementById('timerDisplay').textContent = '01:00';
}

function updateTimer() {
    timerTime--;
    if (timerTime <= 0) {
        clearInterval(timerInterval);
        timerRunning = false;
        alert('Timer has ended!');
    }

    var minutes = Math.floor(timerTime / 60);
    var seconds = timerTime % 60;

    var display = 
        (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds;

    document.getElementById('timerDisplay').textContent = display;
}
