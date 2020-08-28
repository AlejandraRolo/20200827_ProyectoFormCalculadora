/* BOTON */
const btnReset = document.getElementById('reset'); // obtener todas las propiedades del control


/* INPUTS */

// nombre
const inputName = document.getElementById('inputNombre'); // obtener todas las propiedades del control
const mensajeNombre = document.getElementById('nombreMensaje'); // obtener todas las propiedades del control

// nombre
const inputApellido = document.getElementById('inputApellido'); // obtener todas las propiedades del control
const apellidoMensaje = document.getElementById('apellidoMensaje'); // obtener todas las propiedades del control

// nombre
const inputCorreo = document.getElementById('inputCorreo'); // obtener todas las propiedades del control
const correoMensaje = document.getElementById('correoMensaje'); // obtener todas las propiedades del control

// nombre
const inputCelular = document.getElementById('inputCelular'); // obtener todas las propiedades del control
const celularMensaje = document.getElementById('celularMensaje'); // obtener todas las propiedades del control

console.log(inputName);


function validarFormulario(event){
    event.preventDefault();

    if(inputName.value == ""){
        inputName.classList.add('alert');
        mensajeNombre.innerText = 'Llene este campo por favor';
    }

    if(inputApellido.value == ""){
        inputApellido.classList.add('alert');
        apellidoMensaje.innerText = 'Llene este campo por favor';
    }

    if(inputCorreo.value == ""){
        inputCorreo.classList.add('alert');
        correoMensaje.innerText = 'Llene este campo por favor';
    }

    if(inputCelular.value == ""){
        inputCelular.classList.add('alert');
        celularMensaje.innerText = 'Llene este campo por favor';
    }

    if(inputName.value != "" && inputApellido.value != "" && inputCorreo.value != "" && inputCelular.value != ""){
        //  darle un tiempo de espera a que direccione a la siguiente página
        setTimeout(()=>{
            window.location = "./calculadora.html";
            
        },2000); // 2000 significa 2 segundos
    }else{
        swal("Alerta!", "Por favor no olvide completar todos los campos!!", "warning");
    }
}


/* Aqui estamos invocando el evento keydown que es cuando precionamos una tecla */
// vamos a retirar color y mensaje de validación si el usuario  digita un valor en el input

inputName.addEventListener("keydown", ()=>{
    inputName.classList.remove('alert');
    mensajeNombre.innerText = '';
})

inputApellido.addEventListener("keydown", ()=>{
    inputApellido.classList.remove('alert');
    apellidoMensaje.innerText = '';
})

inputCorreo.addEventListener("keydown", ()=>{
    inputCorreo.classList.remove('alert');
    correoMensaje.innerText = '';
})

inputCelular.addEventListener("keydown", ()=>{
    inputCelular.classList.remove('alert');
    celularMensaje.innerText = '';
})


// resetear controles y mensajes

btnReset.addEventListener("click", ()=>{
    inputName.classList.remove('alert');
    mensajeNombre.innerText = '';
    inputApellido.classList.remove('alert');
    apellidoMensaje.innerText = '';
    inputCorreo.classList.remove('alert');
    correoMensaje.innerText = '';
    inputCelular.classList.remove('alert');
    celularMensaje.innerText = '';
})

