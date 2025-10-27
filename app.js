function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        ${taskInput.value}
        <span class="deleteBtn" onclick="deleteTask(this)">✖</span>
    `;
    taskList.appendChild(li);
    taskInput.value = '';

    li.addEventListener('click', function() {
        this.classList.toggle('completed');
    });
}

function deleteTask(element) {
    element.parentElement.remove();
}

