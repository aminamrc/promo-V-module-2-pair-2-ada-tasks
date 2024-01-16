"use strict";

const inputAgrega = document.querySelector(".js-text-task-add");
const btnAgrega = document.querySelector(".js-btn-add");
const inputBuscar = document.querySelector(".js-text-task-filter");
const btnBuscar = document.querySelector(".js-btn-filter");
const listaTarea = document.querySelector(".js-task-list");
const GITHUB_USER = '<tu_usuario_de_github_aqui>';
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;

let tasks = [
  { name: "Recoger setas en el campo", completed: true },
  { name: "Comprar pilas", completed: true },
  { name: "Poner una lavadora de blancos", completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
];
// boton buscar, aqui le doy como parametro a rendertaks eñ array de filter

function handlerFilter (event){
  event.preventDefault();
  const valueInput =  inputBuscar.value;
  const arrayFilter =tasks.filter((task)=>task.name.includes(valueInput));
  console.log(arrayFilter);
  renderTasks(arrayFilter);
}


btnBuscar.addEventListener('click',handlerFilter);

//  funcion que escucha los eventos con un bucle for; y la const que se coge con querySelectorAll. luego debo ejecutarla dentro del otro bucle.

  const listenCheck =()=>{
  const allCheckbox = document.querySelectorAll('.js-check');
  for (const check of allCheckbox ){
    check.addEventListener('change',handlecheck);
  }
}

//funcion que pinta las tareas en html y les agrega y quita la clase,se deja html vacio, para que vaya cambiando, en cada evento. aqui ejecuto listenCheck.le paso como parametro el array de tasks

const renderTasks =(tasks)=>{
  listaTarea.innerHTML ='';
for (let i = 0; i < tasks.length; i++) {
  if (tasks[i].completed) {
    listaTarea.innerHTML += `<li class ="tachado"><input type="checkbox" class= "js-check" id="${i}" checked>${tasks[i].name}</li>`;
  } else {
    listaTarea.innerHTML +=`<li><input type="checkbox" class= "js-check"id="${i}">${tasks[i].name}</li>`;
  } 
}
listenCheck();
};

// funcion manejadora de evento change, y que identifica con el target en que id del array ocurre el evento y(cambia lo del array) aqui ejecuto rendertasks y tambien fuera.y cuando la llamo fuera le paso como parametro el array de tasks.

function handlecheck (event){
  const id = event.target.id;
  console.log(id);
  tasks[id].completed =!tasks[id].completed;
  console.log(tasks);
  renderTasks(tasks);
}

renderTasks(tasks);



//
// tasks = [];
// fetch('https://dev.adalab.es/api/todo')
//   .then((response) => response.json())
//   .then((data) => {

//     listaTarea.innerHTML = data.results.name;
//     console.log(tasks);
//   });
// renderTasks(tasks);


//Completa el código;
 //Guarda la respuesta obtenida enla variable para el listado de tareas: `tasks`



/*en javascriptla mayoria de los procesos son
 -pintar elemento en html
 -escuchas eventos
 -una vez escuchas,cambias los datos, basado en el evento
 -como han cambiado los datos tengo que volver a pinta
 -y si vuelvo a pintar, debo volver a escuchar(estos datos como hacemos funciones, seejecutan en funciones)*/

  //  esta era la otra forma de poner, los condicionales con el operador ternariio: 
  //let classCss = tasks[i].completed ? 'tachado': null;// si tasKs [i] en la propiedad completed, si esto es verdadero(osea si es true) entonces en la variable classCSS entonces ponle el valorde tachado, si no, pues nada.
  // listaTarea.innerHTML += `<li class ="${classCss}"><input type="checkbox" checked>${tasks[i].name}</li>`// al li le pongo la variable classCSS.

