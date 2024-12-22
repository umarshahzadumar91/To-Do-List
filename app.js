const task_input = document.querySelector('#task_input');
const btn = document.querySelector('.add_btn');
const task_list = document.querySelector('#task_list');

btn.addEventListener('click', () => {
    if (task_input.value !== "") {
        const inputText = task_input.value;
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="task_text">${inputText}</span>
            <button class="edit_btn">Edit</button>
            <button class="delete_btn">Delete</button>
        `;
        task_list.appendChild(listItem);
        task_input.value = "";
    }
});

task_list.addEventListener('click', (event) => {
    if (event.target.classList.contains("delete_btn")) {
        const listItem = event.target.parentElement;
        task_list.removeChild(listItem);
    } else if (event.target.classList.contains("edit_btn")) {
        const listItem = event.target.parentElement;
        const taskText = listItem.querySelector('.task_text');
        const newText = prompt("Edit your task:", taskText.textContent);
        if (newText !== null && newText.trim() !== "") {
            taskText.textContent = newText.trim();
        }
    }
});
