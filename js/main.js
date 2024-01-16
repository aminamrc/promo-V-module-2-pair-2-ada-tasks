'use strict';

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false,
    },
  ];
  
const inputAgrega= document.querySelector ('.js-text-task-add');
const btnAgrega= document.querySelector ('.js-btn-add'); 
const inputBuscar =document.querySelector ('.js-text-task-filter');
const btnBuscar = document.querySelector ('.js-btn-filter');
const listaTarea = document.querySelector ('.js-task-list');



//Primero pintamos las tareas en la lista que habíamos definido en el HTML usando JS. 
function renderTareas (array){
  let html = '';
for (let i = 0; i < array.length; i++) {
  //Otra forma de hacerlo: 
  //let ckassCss = tasks[i].completed ? 'tachado' : null;
  //listaTarea.innerHTML += `<li class= "${classCss}"> ${tasks[i].name}`</li>`
  
    if(array[i].completed /*=== true*/){
      html += `<li class = "tachado"> <input type="checkbox" id="${i}" checked> ${array[i].name}</li>`;

    }else {
      html += `<li> <input type="checkbox" class="js-check" id="${i}"> ${array[i].name}</li>`;
    }
  }
  listaTarea.innerHTML = html;
}

renderTareas(tasks);


const allCheckBox = document.querySelectorAll('.js-check');

function handleCheck (event) {
  const id = event.target.id;
  console.log(id);
  tasks[id].completed = !tasks[id].completed;
  console.log(tasks);

}

for (const check of allCheckBox) {
  check.addEventListener("change", handleCheck);

}

/*
1. Pintar elementos en HTML
2. Escuchar eventos
3. Cambiar datos basados en el evento
4. Volver a pintar
5.Volver a escuchar
*/


// function handleclick (event) {
//     event.preventDefault ();
//     const valuetask=inputAgrega.value;
//     listaTarea.innerHTML+= `<li class="js-li"><input type="checkbox"> ${valuetask}</li>`;

//     const elements = document.querySelector('.js-li');
//   }


// function handleTachado (event) {
//   const valuetask = event.target;
//   valuetask.classList.add('tachado');
  
//   console.log(valuetask);
// }

// listaTarea.addEventListener ('click', handleTachado);



function handleFilter (event) {
  event.preventDefault;
  const valueInput = inputAgrega.value;
  const arrayFilter = tasks.filter((task)=> task.name.includes(valueInput));
  console.log(arrayFilter);
  renderTareas(arrayFilter);
}

btnBuscar.addEventListener("click", handleFilter);