document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.js--form');
    const input = document.querySelector('.js--form__input');
    const todosWrapper = document.querySelector('.js--todos-wrapper');
    
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    
    // Задачи существуют?
    renderTodos();
    
    // добавить задачу
    form.addEventListener('submit', function(e) {
        e.preventDefault();
               
        const todoText = input.value.trim();
        if(todoText === '') return;

        if(todos.some(todo => todo.text === todoText)) {
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
        input.value = '';
    });
    
    // удаление и чекбокс
    todosWrapper.addEventListener('click', function(e) {
        const target = e.target;
        const todoItem = target.closest('.todo-item');
        const todoId = parseInt(todoItem.dataset.id);
        
        // Удаление задачи
        if(target.classList.contains('todo-item__delete')) {
            todos = todos.filter(todo => todo.id !== todoId);
            saveTodos();
            renderTodos();
        }
        
        // Переключение статуса задачи
        if(target.type === 'checkbox') {
            const todo = todos.find(todo => todo.id === todoId);
            todo.completed = target.checked;
            saveTodos();
            todoItem.classList.toggle('todo-item--checked', target.checked);
        }
    });
    

    function renderTodos() {
        todosWrapper.innerHTML = '';
        
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.className = `todo-item ${todo.completed ? 'todo-item--checked' : ''}`;
            li.dataset.id = todo.id;
            
            li.innerHTML = `
                <input type="checkbox" ${todo.completed ? 'checked' : ''}>
                <span class="todo-item__description">${todo.text}</span>
                <button class="todo-item__delete">Видалити</button>
            `;
            
            todosWrapper.appendChild(li);
        });
    }
    
    // Сохранение в localStorage
    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }
});
