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

	hour = hour < 10 ? "0" + hour : hour;
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
	var formattedDate = currentDate.toLocaleDateString('en-IN', options);
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



//BMI Calculator
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


// Alarm
function setAlarm() {
    let alarmTime = document.getElementById('alarmTime').value;

    // Get current time in milliseconds
    let now = new Date().getTime();

    // Parse alarm time and calculate difference in milliseconds
    let alarmDateTime = new Date(`1970-01-01T${alarmTime}`).getTime();
    
    let timeUntilAlarm = alarmDateTime - now;

    if (timeUntilAlarm > 0) {
        // Set alarm to trigger at specified time
        setTimeout(() => {
            document.getElementById('alarmMessage').innerText = 'Alarm!';
        }, timeUntilAlarm);
    } else {
        alert('Please select a future time for the alarm.');
    }
}

 // Generate random background color
 const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
 document.body.style.backgroundColor = randomColor;