const inputBox = document.getElementById('input-box');
const listBox = document.getElementById('list-container');
listBox.innerHTML = localStorage.getItem('data');

const addTask = (task) => {
  if (inputBox.value === '') alert('You must whrite something!');
  else {
    const newTask = document.createElement('li');
    newTask.innerText = task ?? inputBox.value;

    const spanX = document.createElement('span');
    spanX.innerHTML = '\u00d7';
    newTask.appendChild(spanX);

    listBox.appendChild(newTask);
    inputBox.value = '';

    saveData;
  }
};

listBox.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    saveData();
  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    saveData();
  }
});

const saveData = () => {
  localStorage.setItem('data', listBox.innerHTML);
};
