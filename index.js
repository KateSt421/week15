const cities = ["Бостон", "Малага", "Париж", "Дели", "Дубай"];
let degrees = [];

//Получаем температуры для каждого города
for (let i = 0; i < cities.length; i++) {
  let cityDegree = parseFloat(
    prompt(`Введите температуру для города ${cities[i]}`)
  );
  degrees.push({ city: cities[i], degr: cityDegree });
}

// Находим максимальную и минимальную температуру
let maxDegree = Math.max(...degrees.map((d) => d.degr));
let minDegree = Math.min(...degrees.map((d) => d.degr));
// Находим соответствующие города к мин и макс температуре
let maxCity = degrees.find((d) => d.degr === maxDegree).city;
let minCity = degrees.find((d) => d.degr === minDegree).city;

// Выводим информацию о городах и их температурах
const citiesContainer = document.getElementById("cities-container");

degrees.forEach((enter) => {
  const listItem = document.createElement("li");
  listItem.className = "li";
  listItem.textContent = `${enter.city}: ${enter.degr} °C`;
  citiesContainer.appendChild(listItem);
});

// Отображаем максимальную и минимальную температуру
document.getElementById(
  "maxDegr"
).textContent = `Максимальная температура: ${maxDegree} °C в городе ${maxCity}`;
document.getElementById(
  "minDegr"
).textContent = `Минимальная температура: ${minDegree} °C в городе ${minCity}`;
