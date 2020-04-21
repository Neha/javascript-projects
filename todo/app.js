let todoItems = [];

function addTodo(text){
   const todo = {
       text,
       checked: false,
       id: Date.now()
   }

   todoItems.push(todo);
   const list = document.querySelector('.list');
   list.insertAdjacentHTML('beforeend', `
      <li data-key='${todo.id}'>
          <input id='${todo.id}' class='tick' type='checkbox'/>
          <label for="${todo.id}"></label>
          <span>${todo.text}</span>
          <button class="delete-todo">Remove</button>
      </li>
    ` );
}

function toggleDone(key) {
  const index = todoItems.findIndex((item) => {
    return item.id === Number(key)
  });

  todoItems[index].checked = !todoItems[index].checked;

  const item = document.querySelector(`[data-key='${key}']`);
  if (todoItems[index].checked) {
    item.classList.add('checked');
  } else {
    item.classList.remove('checked');
  }
}

function deleteTodo(key) {
  todoItems = todoItems.filter(item => item.id !== Number(key));
  let item = document.querySelector(`[data-key='${key}']`);
  item.remove();
}
 
const form = document.querySelector('form');
form.addEventListener('submit', (event) =>{
    event.preventDefault();

    const input = document.querySelector('input');
    const text  = input.value.trim();

    if(text !== ''){
       addTodo(text);
       input.value = '';
    }

});

const list = document.querySelector('.list');
list.addEventListener('click', function(event){
  if (event.target.classList.contains('tick')) {
    let itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
    
  }

  if(event.target.classList.contains('delete-todo')){
    let itemKey = event.target.parentElement.dataset.key;
    deleteTodo(itemKey);
    console.log('hge')
  }
});

