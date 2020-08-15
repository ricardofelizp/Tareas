'use strict'

// crear Objeto Tareas
let arregloTareas = Array();
let creadorTareas = function(titulo, descripcion){
    let objetoTareas = {
        titulo:titulo, 
        descripcion:descripcion, 
        estado: false
    }

    arregloTareas.push(objetoTareas);

    return objetoTareas;
}

// guardar en LocalStorage
let guardarDB = function(){
    if(JSON.parse(localStorage.getItem('tareas'))){
        JSON.parse(localStorage.getItem('tareas')).forEach((elemento, indice, arreglo)=>{
            arregloTareas.push(elemento);
        });
    }

    localStorage.setItem('tareas', JSON.stringify(arregloTareas));
}

// mostrar todas las tareas
let seccionListar = document.querySelector('.seccionListar');
let mostrarTodasTareas = function(){
    arregloTareas = JSON.parse(localStorage.getItem('tareas'));
    if(arregloTareas === null){
        arregloTareas = [];
    }else{
        seccionListar.innerHTML = '';
        for(let i of arregloTareas){
            if(i.estado == true){
                seccionListar.innerHTML += 
            `
            <div class="alert alert-dark d-flex justify-content-between" role="alert">
                ${i.titulo}
                <i style="color: #df405a;" class="far fa-check-circle"></i>
            </div>
    
            `;
            }else{
                seccionListar.innerHTML += 
            `
            <div class="alert alert-dark d-flex justify-content-between" role="alert">
                ${i.titulo}
                <i class="far fa-check-circle"></i>
            </div>
    
            `;
            }

        }
    }

}

// mostrar completas
let mostrarCompletas = function(){
    arregloTareas = JSON.parse(localStorage.getItem('tareas'));
    if(arregloTareas === null){
        arregloTareas = [];
    }else{
        seccionListar.innerHTML = '';
        for(let i of arregloTareas){
            if(i.estado == true){
                seccionListar.innerHTML += 
            `
            <div class="alert alert-dark d-flex justify-content-between" role="alert">
                ${i.titulo}
                <i style="color: #0DA919;" class="far fa-check-circle"></i>
            </div>
    
            `;

        }
            }
    }
}

// mostrar incompletas
let mostrarIncompletas = function(){
    arregloTareas = JSON.parse(localStorage.getItem('tareas'));
    if(arregloTareas === null){
        arregloTareas = [];
    }else{
        seccionListar.innerHTML = '';
        for(let i of arregloTareas){
            if(i.estado == false){
                seccionListar.innerHTML += 
            `
            <div class="alert alert-dark d-flex justify-content-between" role="alert">
                ${i.titulo}
                <i style="color: #D80E32;" class="far fa-check-circle"></i>
            </div>
    
            `;

        }
            }
    }

}

// cambiar estado de la tarea 

let cambiarEstadoTarea = function(activar){
    let indice = arregloTareas.findIndex(function(arregloTareas){
        return arregloTareas.titulo == activar;
    });

    if(arregloTareas[indice].estado == true){
        arregloTareas[indice].estado = false;
    }else{
        arregloTareas[indice].estado = true;
    }

    localStorage.setItem('tareas', JSON.stringify(arregloTareas));

}


export{creadorTareas, guardarDB, mostrarTodasTareas, mostrarCompletas, mostrarIncompletas, cambiarEstadoTarea}