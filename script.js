const api = {
  Key: "7a2c0c8ca6f285d85a21f43ecc92f829",
  base: "api.openweathermap.org/data/2.5/",
};

const searchbox = document.getElementById("search-bar");

// event, function to call when the event happens
searchbox.addEventListener(`keypress`, function (event) {
  if (event.key == "Enter") {
    // 1. get the city value the user added
    const city = document.getElementById("search-bar").value;

    // 2. get the temperature at that city

    // 3. show the temperature
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api.Key}&units=metric`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "data")
        const temp = document.getElementById("temp");
        temp.innerHTML = Math.round(data.main.temp) + " °C"
        const weather = document.getElementById("weather");
        weather.innerHTML = data.weather[0].main
        const location = document.getElementById("location");
        location.innerHTML = data.name + ", " + data.sys.country
        const dateContainer = document.getElementById("date");
        dateContainer.innerHTML = dateBuilder(new Date());
        const app = document.getElementById("app");
        if (data.main.temp > 23) {
          app.classList.add("warm")
        } else {
          app.classList.remove("warm")
        }
      })
  }
});


function dateBuilder(d) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
