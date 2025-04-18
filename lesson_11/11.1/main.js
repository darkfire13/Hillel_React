// Вивести таблицю Піфагора (10×10), таблиця повинна бути створена динамічно
function createPifagorTable(size) {
    const container = document.getElementById('pifagor-table');
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
  
    // Классы bootstrap подключаю
    table.classList.add('table', 'table-info');

    // Создаю Заголовок таблицы
    const headerRow = document.createElement('tr');
    headerRow.appendChild(document.createElement('th')); // пустая ячейка в левом верхнем углу
    for (let i = 1; i <= size; i++) {
      const th = document.createElement('th');
      th.textContent = i;
      headerRow.appendChild(th);
    }
    thead.appendChild(headerRow);
  
    // Строки с произведениями
    for (let row = 1; row <= size; row++) {
      const tr = document.createElement('tr');
  
      const th = document.createElement('th');
      th.textContent = row;
      tr.appendChild(th);
  
      for (let col = 1; col <= size; col++) {
        const td = document.createElement('td');
        td.textContent = row * col;
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
  
    table.appendChild(thead);
    table.appendChild(tbody);
    container.appendChild(table);
  }
  
//   createPifagorTable(10);

const btn = document.getElementById('pifagor-btn');
btn.addEventListener('click', () => {
  createPifagorTable(10);
});

//   document.addEventListener('DOMContentLoaded', () => {
//     createPifagorTable(10);
//   });  