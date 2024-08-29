document.getElementById("getWeather").addEventListener('click', function(){
       const apiKey = 'e36faeeeefa02b6327651d8b1b4445e5'; 
       const city = document.getElementById('cityInput').value;
       const  apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
       
       
       fetch(apiUrl)
              .then(response => response.json())
              .then(data => {
               document.getElementById('location').textContent = data.name;
               document.getElementById('temperature').textContent = data.main.temp;
               document.getElementById('description').textContent = data.weather[0].description;
              }).catch(error => {
               console.error("Error fetching the weather data", error);
              });




})
   
    
    
    
    