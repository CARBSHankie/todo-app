console.log("JavaScript is working!");

function addTask() {
    let input = document.getElementById('todoInput');
    let newTask = input.value;
    if (newTask !== '') {
        let listItem = document.createElement('li');
        listItem.textContent = newTask;
        document.getElementById('todoList').appendChild(listItem);
        input.value = ''; // Clear the input
    }
}

function fetchTasks() {
    fetch('https://todo-app-backend--wangroger93.repl.co/tasks')
        .then(response => response.json())
        .then(tasks => {
            // Process and display the tasks
        })
        .catch(error => console.error('Error:', error));
}
