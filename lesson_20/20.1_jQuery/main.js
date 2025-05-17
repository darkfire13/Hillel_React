$(function() {
    const $form = $('.js--form');
    const $input = $('.js--form__input');
    const $todosWrapper = $('.js--todos-wrapper');

    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    renderTodos();

    // Добавление задачи
    $form.on('submit', function(e) {
        e.preventDefault();

        const todoText = $input.val().trim();
        if (todoText === '') return;

        if (todos.some(todo => todo.text === todoText)) {
            alert('Такая задача уже существует!');
            return;
        }

        const newTodo = {
            id: Date.now(),
            text: todoText,
            completed: false
        };

        todos.push(newTodo);
        saveTodos();
        renderTodos();
        $input.val('');
    });

    // Удаление и чекбокс
    $todosWrapper.on('click', function(e) {
        const $target = $(e.target);
        const $todoItem = $target.closest('.todo-item');
        const todoId = parseInt($todoItem.data('id'));

        // Удаление задачи
        if ($target.hasClass('todo-item__delete')) {
            todos = todos.filter(todo => todo.id !== todoId);
            saveTodos();
            renderTodos();
        }

        // Переключение статуса задачи
        if ($target.is(':checkbox')) {
            const todo = todos.find(todo => todo.id === todoId);
            todo.completed = $target.prop('checked');
            saveTodos();
            $todoItem.toggleClass('todo-item--checked', $target.prop('checked'));
        }
    });

    function renderTodos() {
        $todosWrapper.empty();

        todos.forEach(todo => {
            const checked = todo.completed ? 'checked' : '';
            const checkedClass = todo.completed ? 'todo-item--checked' : '';
            const $li = $(`
                <li class="todo-item ${checkedClass}" data-id="${todo.id}">
                    <input type="checkbox" ${checked}>
                    <span class="todo-item__description">${todo.text}</span>
                    <button class="todo-item__delete">Видалити</button>
                </li>
            `);
            $todosWrapper.append($li);
        });
    }

    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }
});
