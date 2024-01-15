'use strict';

const inputAgrega= document.querySelector ('.js-text-task-add');
const btnAgrega= document.querySelector ('.js-btn-add'); 
const inputBuscar =document.querySelector ('.js-text-task-filter');
const btnBuscar = document.querySelector ('.js-btn-filter');
const listaTarea =document.querySelector ('.js-task-list');

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false,
    },
  ];


//  function renderTareas (tarea){
//        let html = '';
//         if(tarea.completed === true){
//           html = `<li class = "tachado"> <input type="checkbox"> ${tarea.name}</li>`;
    
//         }else {
//           html = `<li> <input type="checkbox"> ${tarea.name}</li>`;
//         }
//         console.log(html)
//         listaTarea.innerHTML = 
        
//     }
//     renderTareas()
  
// function checktask(tarea) {
//   if (tasks.tarea.completed === true) {
//     tarea.classlist.add('tachado');


//   }
// }

function renderTareas (array){
  let html = '';
for (let i = 0; i < array.length; i++){
  
    if(array[i].completed === true){
      html += `<li class = "tachado"> <input type="checkbox" checked> ${array[i].name}</li>`;

    }else {
      html += `<li> <input type="checkbox"> ${array[i].name}</li>`;
    }
  }
  listaTarea.innerHTML = html;
}

renderTareas(tasks);


/********** */


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


