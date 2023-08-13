const taskForm = document.getElementById("task-form");
const newTaskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", addTask);

function addTask(event) {
    event.preventDefault();

    const taskText = newTaskInput.value.trim();
    if (taskText === "") return;

    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskItem.innerHTML = `
        ${taskText}
        <button class="delete-btn">Excluir</button>
    `;

    taskList.appendChild(taskItem);
    newTaskInput.value = "";
    newTaskInput.focus();

    const deleteButton = taskItem.querySelector(".delete-btn");
    deleteButton.addEventListener("click", () => {
        taskList.removeChild(taskItem);
    });
}