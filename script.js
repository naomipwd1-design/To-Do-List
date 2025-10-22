document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('todo-form');
  const input = document.getElementById('todo-input');
  const categorySelect = document.getElementById('category-select');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskText = input.value.trim();
    const category = categorySelect.value;

    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✖';
    deleteBtn.addEventListener('click', () => li.remove());

    li.addEventListener('click', () => li.classList.toggle('completed'));

    li.appendChild(deleteBtn);

    const categoryList = document.querySelector(`#${category} .todo-list`);
    categoryList.appendChild(li);

    input.value = '';
  });
});
