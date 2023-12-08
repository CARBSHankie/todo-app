console.log("JavaScript is working!");

// Fetch tasks from backend and display them
function fetchTasks() {
    fetch('https://todo-app-backend--wangroger93.repl.co/tasks')
        .then(response => response.json())
        .then(tasks => {
            const tasksList = document.getElementById('todoList');
            tasksList.innerHTML = ''; // Clear existing tasks

            tasks.forEach(task => {
                let listItem = document.createElement('li');
                listItem.textContent = task.text; // Assuming each task has 'text' property
                tasksList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error:', error));
}

// Add a new task and send it to the backend
function addTask() {
    let input = document.getElementById('todoInput');
    let newTaskText = input.value;
    if (newTaskText !== '') {
        fetch('https://todo-app-backend-wangroger93.replit.app', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: newTaskText })
        })
        .then(response => response.json())
        .then(newTask => {
            let listItem = document.createElement('li');
            listItem.textContent = newTask.text;
            document.getElementById('todoList').appendChild(listItem);
            input.value = ''; // Clear the input
        })
        .catch(error => console.error('Error:', error));
    }
}


// Call fetchTasks on page load to display existing tasks
window.onload = function() {
    fetchTasks();
};
