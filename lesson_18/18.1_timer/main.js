// Реалізувати таймер відліку:

// Початок таймера визначати із змінної
// Відобразити на сторінці час у форматі 01:25
// Коли закінчився таймер зупинити його


    // Початковий час у секундах (наприклад, 85 секунд = 1 хв 25 сек)
    let timeLeft = 85;

    const timerElement = document.getElementById('timer');

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    function updateTimer() {
        if (timeLeft < 0) {
            clearInterval(timerInterval);
            return;
        }

        timerElement.textContent = formatTime(timeLeft);
        timeLeft--;
    }


    updateTimer(); // Первое отображение таймера
    const timerInterval = setInterval(updateTimer, 1000);