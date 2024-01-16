"use strict";

const inputAgrega = document.querySelector(".js-text-task-add");
const btnAgrega = document.querySelector(".js-btn-add");
const inputBuscar = document.querySelector(".js-text-task-filter");
const btnBuscar = document.querySelector(".js-btn-filter");
const listaTarea = document.querySelector(".js-task-list");

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false,
    },
  ];

  


function renderTareas (array){
for (let i = 0;i <array.length; i++){
  
    listaTarea.innerHTML+=`<li> <input type="checkbox"> ${array[i].name}</li>`;
  }
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


