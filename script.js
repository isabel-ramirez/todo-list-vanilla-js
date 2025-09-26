'use strict'

// Add new tasks
const taskInput = document.querySelector('#new-task');
const activeList = document.querySelector('#active > ul');
const completedList = document.querySelector('#completed > ul');
const btn = document.querySelector('#btn-new-task');

btn.addEventListener('click', function () {
  console.log('hello?..');
  const task = document.createElement('li');
  const taskText = document.createElement('span');
  const checkbox = document.createElement('input');

  checkbox.setAttribute('type', 'checkbox');

  taskText.textContent = taskInput.value;
  taskInput.value = '';

  task.appendChild(checkbox);
  task.appendChild(taskText);
  activeList.appendChild(task);

  checkbox.addEventListener('click', function () {
    completedList.appendChild(task);

    task.firstChild.setAttribute('disabled', true);
  })
})
