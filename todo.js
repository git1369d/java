const toDoForm = document.getElementById("todo-form");
const toDoInput =document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

function deleteTodo(event){
    const li=event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li=document.createElement("li");
    const span=document.createElement("span");
    span.innerText=newTodo;
    const button = document.createElement("button");
    button.innerText="X";
    button.addEventListener("click",deleteTodo);
    li.appendChild(span);
    li.appendChild(button); // append는 순서대로 맨 뒤에
    todoList.appendChild(li);
}

function handleToDoSummit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSummit);
