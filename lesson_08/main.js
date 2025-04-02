// Создать ladder (лестница) – объект, позволяющий подниматься вверх и спускаться:

let ladder = {
  step: 0,
  up: function () { // підніматиме вас на одну сходинку
    this.step++;
    return this; // повертаємо об'єкт, щоб можна було продовжити ланцюжок
  },
  down: function () { // опускатиме вас на одну сходинку
    this.step--;
    return this;
  },
  showStep: function () { // показує поточну сходинку
    console.log(this.step);
    return this;
  },
  reset() { // обнуляем сходинки
    this.step = 0;
    return this;
  }
};

ladder.up().up().down().showStep(); //  1
ladder.reset().up().up().down().up().showStep(); // 2
ladder.up().up().down().up().reset().showStep(); // 0
