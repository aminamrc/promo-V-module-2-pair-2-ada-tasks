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


  function handleclick (event) {
    event.preventDefault ();
    const valuetask=inputAgrega.value;
    listaTarea.innerHTML+= ` <li> ${valuetask}</li>` ;

  }

  btnAgrega.addEventListener ('click', handleclick);

