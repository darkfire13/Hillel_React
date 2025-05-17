$(function() {
    const $form = $('.js--form');
    const $input = $('.js--form__input');
    const $todosWrapper = $('.js--todos-wrapper');

    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    renderTodos();

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

        // Показ модального окна при клике на текст задачи
        if ($target.hasClass('todo-item__description')) {
            const todo = todos.find(todo => todo.id === todoId);
            if (!todo) return;

            $('#modalTodoText').text(todo.text);

            // Инициализация и показ модального окна Bootstrap 5
            const todoModal = new bootstrap.Modal(document.getElementById('todoModal'));
            todoModal.show();
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
                    <span class="todo-item__description" style="cursor:pointer;">${todo.text}</span>
                    <button class="todo-item__delete btn btn-danger btn-sm ms-2">Видалити</button>
                </li>
            `);
            $todosWrapper.append($li);
        });
    }

    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }
});
