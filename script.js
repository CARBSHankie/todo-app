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
