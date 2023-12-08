const backendUrl = 'https://todo-app-backend-wangroger93.replit.app';

async function fetchTodos() {
    try {
        const response = await fetch(`${backendUrl}/todos`);
        const todos = await response.json();
        displayTodos(todos);
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
}

function displayTodos(todos) {
    const list = document.getElementById('todo-list');
    list.innerHTML = '';
    todos.forEach(todo => {
        const item = document.createElement('li');
        item.textContent = todo.task;
        list.appendChild(item);
    });
}

async function addTodo() {
    const input = document.getElementById('new-todo');
    const task = input.value.trim();
    if (!task) return;

    try {
        await fetch(`${backendUrl}/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ task }),
        });
        input.value = '';
        fetchTodos();
    } catch (error) {
        console.error('Error adding todo:', error);
    }
}

// Initial fetch of todos
fetchTodos();
