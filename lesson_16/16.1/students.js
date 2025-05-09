function Student(firstName, lastName, birthYear, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = grades || []; // массив оценок
    this.attendance = new Array(25).fill(null); // массив посещаемости на 25 занятий, изначально пустой (null)

    // Получить возраста студента
    this.getAge = function() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    };

    // Вычисления среднего балла/ сренее арифметическое
    this.getAverageGrade = function() {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((acc, val) => acc + val, 0); // суммируем все оценки
        return sum / this.grades.length;
    };

    // Метод для отметки посещения (true)
    this.present = function() {
        const index = this.attendance.indexOf(null); // ищем есть ли null в массиве
        if (index === -1) {
            console.warn("Відвідуваність вже заповнена на 25 занять");
            return;
        }
        this.attendance[index] = true;
    };

    // Метод для отметки отсутствия (false)
    this.absent = function() {
        const index = this.attendance.indexOf(null);
        if (index === -1) {
            console.warn("Відвідуваність вже заповнена на 25 занять");
            return;
        }
        this.attendance[index] = false;
    };

    // Метод для вычисления среднего посещения (доля посещённых занятий)
    this.getAverageAttendance = function() {
        const attended = this.attendance.filter(x => x === true).length;
        const counted = this.attendance.filter(x => x !== null).length;
        if (counted === 0) return 0;
        return attended / counted;
    };

    // Метод summary по условию
    this.summary = function() {
        const avgGrade = this.getAverageGrade();
        const avgAttendance = this.getAverageAttendance();

        if (avgGrade > 90 && avgAttendance > 0.9) {
            return "Молодець!";
        } else if (avgGrade < 90 && avgAttendance < 0.9) {
            return "Редиска!";
        } else {
            return "Добре, але можна краще";
        }
    };
}

// Tests

// Создаём студентов
const student1 = new Student("Іван", "Петров", 2000, [95, 92, 88, 100]);
const student2 = new Student("Олена", "Коваль", 1999, [100, 99, 90, 95]);
const student3 = new Student("Микола", "Шевченко", 2001, [70, 60, 75, 65]);

// Отмечаем посещения и пропуски
student1.present();
student1.present();
student1.absent();
student1.present();

student2.present();
student2.present();
student2.present();
student2.present();

student3.absent();
student3.absent();
student3.absent();
student3.absent();

// Выводим данные
console.log(student1.firstName, student1.lastName);
console.log("Вік:", student1.getAge());
console.log("Середній бал:", student1.getAverageGrade());
console.log("Середня відвідуваність:", student1.getAverageAttendance());
console.log("Підсумок:", student1.summary());

console.log("---");

console.log(student2.firstName, student2.lastName);
console.log("Вік:", student2.getAge());
console.log("Середній бал:", student2.getAverageGrade());
console.log("Середня відвідуваність:", student2.getAverageAttendance());
console.log("Підсумок:", student2.summary());

console.log("---");

console.log(student3.firstName, student3.lastName);
console.log("Вік:", student3.getAge());
console.log("Середній бал:", student3.getAverageGrade());
console.log("Середня відвідуваність:", student3.getAverageAttendance());
console.log("Підсумок:", student3.summary());
