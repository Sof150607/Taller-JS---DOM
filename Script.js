const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");


function createTaskElement(taskText) {
    
    // Crear el li
    const li = document.createElement("li");
    li.className = "task-item";
    li.textContent = taskText;

    // botoncito
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "X";

    // eliminar la tarea
    deleteBtn.addEventListener("click", () => {
        li.remove();
        saveTasks(); 
    });

    // ponerle el botón al li
    li.appendChild(deleteBtn);

    // Agregar el li a la listam principal
    taskList.appendChild(li);

    // Guardar localStorage llamando a esta funcion (modificacion del paso 4)
    saveTasks();

}
 


addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        createTaskElement(taskText); //se crea la tarea
        taskInput.value = "";//limpia el campo de texto
    }
});



function saveTasks() {

    const tasks = document.querySelectorAll(".task-item"); //todas ms tareass que tengan clase task-item

    let taskArray = [];
    tasks.forEach(task => {
        const taskText = task.textContent;
        //aca se agrega el texto al array
        taskArray.push(taskText);
    });

    localStorage.setItem("tasks", JSON.stringify(taskArray)); //lo guardo en localstorage:3
   
}




function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        const taskArray = JSON.parse(savedTasks);
        taskArray.forEach(taskText => {
            createTaskElement(taskText);
        });
    }
}


loadTasks();


