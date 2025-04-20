const taskList = document.getElementById('task-list');
const addTaskBtn = document.getElementById('add-task');
const newTaskInput = document.getElementById('new-task');

function createTaskItem(text) { // функция создания элементов (задач)
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    // classList.add() не совсем подходит потому что мы заранее знаем все классы, но можно и через classList.add
    li.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Удалить';
    deleteBtn.className = 'btn btn-danger btn-sm delete-btn';
    li.appendChild(deleteBtn);

    return li;
}

// Задачи по умолчанию
const defaultTasks = [
    'Купить моноблок',
    'Позвонить клиенту',
    'Подготовить отчёт'
];

// Добавляем задачи по умолчанию в список
defaultTasks.forEach(task => {
    taskList.appendChild(createTaskItem(task));
});

// удаления задачи
taskList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) { // Проверяем, что нажатие произошло именно на кнопку "Удалить", а не элементу списка
        const li = event.target.closest('li'); // Находим ближайший родительский элемент li
        if (li) { // Проверяем, что li существует
            li.remove();
        }
    }
});

// Добавление новой задачи по клику на кнопку
addTaskBtn.addEventListener('click', function() {
    const taskText = newTaskInput.value.trim();
    if (taskText !== '') {
        taskList.appendChild(createTaskItem(taskText));
        newTaskInput.value = '';
        newTaskInput.focus();
    }
});


