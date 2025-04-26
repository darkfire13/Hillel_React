document.addEventListener('DOMContentLoaded', function() { // дождаться загрузки DOM, без подгрузки картинок
    const form = document.getElementById('contactForm');

    function clearErrors() {
        document.querySelectorAll('.error').forEach(el => el.textContent = '');
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        clearErrors(); // очищаем старые ошибки перед новой проверкой

        let isValid = true;

        // Name: обязательное поле
        const name = form.name.value.trim(); // удаление пробелы и других символы из начала и конца
        if (name === '') {
            document.getElementById('nameError').textContent = 'Name is required.';
            isValid = false;
        }

        // Message: не менее 5 символов
        const message = form.message.value.trim();
        if (message.length < 5) {
            document.getElementById('messageError').textContent = 'Message must be at least 5 characters.';
            isValid = false;
        }

        // Phone: обязательно, начинается с +380 и еще 9 цифр
        const phone = form.phone.value.trim();
        const phonePattern = /^\+380\d{9}$/;
        if (!phonePattern.test(phone)) {
            document.getElementById('phoneError').textContent = 'Phone must start with +380 and contain 9 digits after.';
            isValid = false;
        }

        // Email: обязательно, должен содержать @ и точку
        const email = form.email.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById('emailError').textContent = 'Enter a valid email address.';
            isValid = false;
        }

        // Если все валидно, выводим данные в консоль
        if (isValid) {
            console.log({
                name: name,
                message: message,
                phone: phone,
                email: email
            });
            // код отправки формы на сервер
            alert('Message sent successfully!');
            // form.reset(); // сбрасываем данные в форме по умолчанию
        }
    });
});
