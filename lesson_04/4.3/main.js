// Запрашиваем данные у пользователя
const birthYear = prompt("Введіть ваш рік народження:", "2000");
const city = prompt("В якому місті ви живете?", "Київ");
const sport = prompt("Ваш улюблений вид спорту?", "Футбол");

// Проверяем, нажал ли пользователь "Отмена"
if (!birthYear) {
    alert("Шкода, що Ви не захотіли ввести свій рік народження.");
} else if (!city) {
    alert("Шкода, що Ви не захотіли ввести своє місто.");
} else if (!sport) {
    alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.");
} else {
    // Вычисляем возраст
    const currentYear = 2024; // должна быть функция для получения текущего года
    const age = currentYear - birthYear;
    
    // Определяем столицу
    let cityMessage;
    switch (city) {
        case "Київ":
            cityMessage = "Ти живеш у столиці України!";
            break;
        case "Вашингтон":
            cityMessage = "Ти живеш у столиці США!";
            break;
        case "Лондон":
            cityMessage = "Ти живеш у столиці Великої Британії!";
            break;
        default:
            cityMessage = `Ти живеш у місті ${city}.`;
    }
    
    // Определяем чемпиона по виду спорту
    let sportMessage;
    const champions = {
        "Футбол": "Ліонель Мессі",
        "Бокс": "Майк Тайсон",
        "Теніс": "Роджер Федерер"
    };
    
    if (champions[sport]) {
        sportMessage = `Круто! Хочеш стати як ${champions[sport]}?`;
    } else {
        sportMessage = `Цікавий вибір спорту - ${sport}!`;
    }
    
    // Выводим итоговое сообщение
    alert(`Ваш вік: ${age}\n${cityMessage}\n${sportMessage}`);
}
