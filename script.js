'use strict'

// Add new tasks
const taskInput = document.querySelector('#new-task');
const activeList = document.querySelector('#active > ul');
const btn = document.querySelector('#btn-new-task');

btn.addEventListener('click', function () {
  console.log('hello?..');
  const task = document.createElement('li');
  const taskText = document.createElement('span');

  taskText.textContent = taskInput.value;
  taskInput.value = '';

  task.appendChild(taskText);
  activeList.appendChild(task);
})
