'use strict'
import * as funciones from '/js/funciones.js';

// Variables
let nuevaTarea = document.querySelector('.nuevaTarea');
let botonCancelar = document.querySelector('.cancelar');
let todasTareas = document.querySelector('.todas');
let botonCompletas = document.querySelector('.completas');
let botonIncompletas = document.querySelector('.incompleto');
let seccionListar = document.querySelector('.seccionListar');

// Formulario 
const formulario = document.querySelector('.formulario');
    if(formulario){
        formulario.addEventListener('submit', (e)=>{
            e.preventDefault();
            let titulo = document.querySelector('#titulo').value;
            let descripcion = document.querySelector('#descripcion').value;

            if(titulo.trim() == '' || descripcion.trim() == ''){
                alert('No puedes dejar un campo vacío');
            }else{
                funciones.creadorTareas(titulo, descripcion);
                funciones.guardarDB();

                document.location.href='/index.html';
                // formulario.reset();
            }

        });
    }

    // Redireccionar a Nueva Tarea
    if(nuevaTarea){
        nuevaTarea.addEventListener('click', function(){
            document.location.href='/formulario.html';
        });
    }

    // Redireccionar a Index.html
    if(botonCancelar){
        botonCancelar.addEventListener('click', ()=>{
            document.location.href = '/index.html';
        });
    };

// Boton mostrar todas
    if(todasTareas){
        todasTareas.addEventListener('click', function(){
            funciones.mostrarTodasTareas();
        });
    }
// Boton mostrar completas
    if(botonCompletas){
        botonCompletas.addEventListener('click', ()=>{
            funciones.mostrarCompletas();
        });
    };

// Boton mostrar incompletas
    if(botonIncompletas){
        botonIncompletas.addEventListener('click', function(){
            funciones.mostrarIncompletas();
        });
    };

// Cambiar estado de las tareas
if(seccionListar){
    seccionListar.addEventListener('click', function(e){
        if(e.target.classList.contains('fa-check-circle')){
            if(e.target.style.color == 'rgb(223, 64, 90)'){
                e.target.style.color = '#9c9999';
                e.target.style.transition = "all 700ms ease";
            }else{
                e.target.style.color = '#df405a';
                e.target.style.transition = "all 700ms ease";
            };

           let activarTarea = (e.target.parentElement.innerText); 
            funciones.cambiarEstadoTarea(activarTarea);
    
        };
    });
}
  