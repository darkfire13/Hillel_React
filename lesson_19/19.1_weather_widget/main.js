const cities = [
  { name: "Харків", q: "Kharkiv,UA" },
  { name: "Київ", q: "Kyiv,UA" },
  { name: "Одеса", q: "Odesa,UA" }
];
const apiKey = "71b91e163a677e6ea8062a6a94db5ac7";
const lang = "ua";
const units = "metric";
const cacheKey = "weatherDataCache";
const cacheTTL = 10 * 60 * 1000; // 10 минут в мс

function windDirection(deg) {
  const dirs = ["Пн", "Пн-Сх", "Сх", "Пд-Сх", "Пд", "Пд-Зх", "Зх", "Пн-Зх"];
  return dirs[Math.round(deg / 45) % 8];
}

function renderWeather(data, cityName) {
  const pressureMmHg = Math.round(data.main.pressure * 0.750062);
  return `
    <div class="city">${cityName}</div>
    <div class="temp">${Math.round(data.main.temp)}°C</div>
    <div class="desc">${data.weather[0].description[0].toUpperCase() + data.weather[0].description.slice(1)}</div>
    <div class="details">
      <span title="Вологість">💧 ${data.main.humidity}%</span>
      <span title="Тиск">🌡️ ${pressureMmHg} мм рт. ст.</span>
      <span title="Вітер">💨 ${windDirection(data.wind.deg)} ${Math.round(data.wind.speed)} м/с</span>
    </div>
  `;
}

async function fetchWeather() {
  const results = [];
  for (const city of cities) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city.q)}&appid=${apiKey}&units=${units}&lang=${lang}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("API error");
    const data = await res.json();
    results.push({ cityName: city.name, data });
  }
  return results;
}

async function loadWeather(forceUpdate = false) {
  const widget = document.getElementById("weather-widget");
  widget.innerHTML = "Завантаження погоди...";
  
  try {
    let cached = localStorage.getItem(cacheKey);
    let cacheObj = cached ? JSON.parse(cached) : null;
    const now = Date.now();

    if (!forceUpdate && cacheObj && (now - cacheObj.timestamp < cacheTTL)) {
      // Используем кеш
      const html = cacheObj.data.map(item => renderWeather(item.data, item.cityName)).join('<hr>');
      widget.innerHTML = html;
    } else {
      // Запрашиваем свежие данные
      const freshData = await fetchWeather();
      localStorage.setItem(cacheKey, JSON.stringify({ timestamp: now, data: freshData }));
      const html = freshData.map(item => renderWeather(item.data, item.cityName)).join('<hr>');
      widget.innerHTML = html;
    }
  } catch (e) {
    widget.innerHTML = "Помилка завантаження погоди";
    console.error(e);
  }
}

// Кнопка обновления — всегда делает запрос и обновляет кеш
document.getElementById("refresh-weather-btn").addEventListener("click", () => {
  loadWeather(true);
});

// Загрузка при старте (с кешем)
loadWeather();