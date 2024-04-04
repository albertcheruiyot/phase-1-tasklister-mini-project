document.addEventListener("DOMContentLoaded", (Event) => {
  // your code here
  doWork();
});


function doWork(){
  const taskForm = document.getElementById('create-task-form');
  const taskInput = document.getElementById('new-task-description');
  const taskList = document.getElementById('tasks');

  taskForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText !== '') {
      const taskItem = document.createElement('li');
      taskItem.textContent = taskText;

      taskList.appendChild(taskItem);

      taskInput.value = '';
    }
  });
}