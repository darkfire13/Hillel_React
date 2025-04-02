// Дізнатись суму всіх зарплат користувачів:
// Об'єкт може містити невідому кількість департаментів та співробітників

let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: { 
        web:[{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}] }
  };

//   Алгоритм:
// Если значение массив: берем с него зарплаты.
// Если значение – объект: вызываем функцию снова.

function sumSalaries(department) {
    // Проверяем: если department — это массив (список сотрудников)
    if (Array.isArray(department)) {
      // Суммируем все зарплаты сотрудников с помощью reduce
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
      return department.reduce((sum, employee) => sum + employee.salary, 0);
    } else {
      // Если это объект (например, департамент с подразделениями)
      let sum = 0; // sum обнуляется в каждом вызове рекурсии, но это не "ломает" остальные вызовы, потому что они независимы.
  
      // Перебираем все значения в объекте (подразделения или отделы)
      for (let subDep of Object.values(department)) {
        // Рекурсивно вызываем функцию для каждого подразделения
        sum += sumSalaries(subDep);
      }
      return sum;
    }
  }

  // console.log('sumSalaries(company) =', sumSalaries(company));
  console.log(`Сумма зарплат сотрудников = ${sumSalaries(company)}`);

//   sumSalaries(company)
// ├── sumSalaries(company.sales) => 1600
// └── sumSalaries(company.development)
//     ├── sumSalaries(web) => 3800
//     └── sumSalaries(internals) => 1300
