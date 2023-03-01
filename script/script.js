// Seleção de elementos
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const editForm = document.querySelector('#edit-form');
const editInput = document.querySelector('#edit-input');
const cancelEditBtn = document.querySelector('#cancelBtn');

// Funções
const saveTodo = (text) => {

  const todo = document.createElement('div'); //para criar uma DIV
  todo.classList.add('todo'); //para criar uma classe para essa div 

  const todoTitle = document.createElement('h3') //para criar um elemento com o titulo 
  todoTitle.innerText = text //para essa variável criar o texto no titulo
  todo.appendChild(todoTitle)

  const doneBtn = document.createElement('button');
  doneBtn.classList.add('finish-todo')
  doneBtn.innerHTML = ' <i class="fa-solid fa-check"></i>' //botão está pronto
  todo.appendChild(doneBtn)

  const editBtn = document.createElement('button');
  editBtn.classList.add('edit-todo')
  editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>' //botão está pronto
  todo.appendChild(editBtn)

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-todo')
  deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>' //botão está pronto
  todo.appendChild(deleteBtn)


  todoList.appendChild(todo);

  todoInput.value = "";
  todoInput.focus();
}

const toggleForm = () => {
  editForm.classList.toggle("hide");
  todoForm.classList.toggle("hide");
  todoList.classList.toggle("hide");
}

// Eventos
todoForm.addEventListener('submit', (e) => { //função anonima
  e.preventDefault(); //para quando apertar o submit não recarregar a página e não enviar para o backend

  const inputValue = todoInput.value

  if (inputValue) { //
    saveTodo(inputValue) //criando uma função
  }
})

document.addEventListener("click", (e) => {
  const targetEl = e.target;
  const parentEl = targetEl.closest("div");

  if(targetEl.classList.contains("finish-todo")){
    parentEl.classList.toggle("done");

  }

  if(targetEl.classList.contains("remove-todo")){
   
    parentEl.remove();
  }
  
  if(targetEl.classList.contains("edit-todo")){
    

  }
})

cancelEditBtn.addEventListener("click", (e) =>{
  e.preventDefault();

  toggleForm();
})