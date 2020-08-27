/* ASIGNAR UN NÚMERO AL INPUT */

// obtener elemento input
const numerouno = document.getElementById("num1");
const numerodos = document.getElementById("num2");

// obtener grid que contiene los números del 0 al 9
const contentedor_grid = document.getElementById("contentedor_grid");

// obtener número de cada nodo
contentedor_grid.addEventListener("click", (e)=>{
    let nodo = e.target.textContent;
   
    switch(parseInt(nodo)){
        case 0:
            asignarValores(numerouno, numerodos, nodo)
            break;
        case 1:
            asignarValores(numerouno, numerodos, nodo)
            break;
        case 2:
            asignarValores(numerouno, numerodos, nodo)
            break;
        case 3:
            asignarValores(numerouno, numerodos, nodo)
            break;
        case 4:
            asignarValores(numerouno, numerodos, nodo)
            break;
        case 5:
            asignarValores(numerouno, numerodos, nodo)
            break;
        case 6:
            asignarValores(numerouno, numerodos, nodo)
            break;
        case 7:
            asignarValores(numerouno, numerodos, nodo)
            break;
        case 8:
            asignarValores(numerouno, numerodos, nodo)
            break;
        case 9:
            asignarValores(numerouno, numerodos, nodo)
            break;
        default:
            swal("Alerta!", "Opción no disponible.!!", "warning");
            break;
    }
})

// función para asignar valores
function asignarValores(num1, num2, valor){
    if(num1.value == "" || num1.value == 0){
        num1.value = valor;
    }else{
        num2.value = valor;
    }
}


/* REALIZAR LAS OPERACIONES */

// obtener elemento de respuesta
const mensajeRespuesta = document.getElementById("respuesta");


/*  funcion para realizar suma  */

const sumar = document.getElementById("sumar");

sumar.addEventListener("click", ()=>{
    if(numerouno.value != "" && numerodos.value != ""){
        // declarar variable para almacenar la respuesta
        let respuesta = parseInt(numerouno.value) + parseInt(numerodos.value);
        console.log(respuesta)
        mensajeRespuesta.innerHTML = '<i> La Suma da como resultado:  ' + respuesta + '</i>'
    }else{
        swal("Alerta!", " Recuerde seleccionar o digitar los 2 números.!!", "warning");
    }
})


/*  funcion para realizar resta  */

const restar = document.getElementById("restar");

restar.addEventListener("click", ()=>{
    if(numerouno.value != "" && numerodos.value != ""){
        // declarar variable para almacenar la respuesta
        let respuesta = parseInt(numerouno.value) - parseInt(numerodos.value);
        console.log(respuesta)
        mensajeRespuesta.innerHTML = '<i> La Resta da como resultado: ' + respuesta + '</i>'
    }else{
        swal("Alerta!", " Recuerde seleccionar o digitar los 2 números.!!", "warning");
    }
})


/*  funcion para realizar multiplicacion  */

const multiplicar = document.getElementById("multiplicar");

multiplicar.addEventListener("click", ()=>{
    if(numerouno.value != "" && numerodos.value != ""){
        // declarar variable para almacenar la respuesta
        let respuesta = parseInt(numerouno.value) * parseInt(numerodos.value);
        console.log(respuesta)
        mensajeRespuesta.innerHTML = '<i> La Multiplicación da como resultado: ' + respuesta + '</i>'
    }else{
        swal("Alerta!", " Recuerde seleccionar o digitar los 2 números.!!", "warning");
    }
})


/*  funcion para realizar division  */

const dividir = document.getElementById("dividir");

dividir.addEventListener("click", ()=>{
    if(numerouno.value != "" && numerodos.value != ""){
        if(numerodos.value == 0){
            swal("Alerta!", " No se puede dividir por 0", "error");
        }else{
            // declarar variable para almacenar la respuesta
            let respuesta = parseInt(numerouno.value) / parseInt(numerodos.value);
            console.log(respuesta)
            mensajeRespuesta.innerHTML = '<i> La División da como resultado: ' + respuesta + '</i>'
        }
    }else{
        swal("Alerta!", " Recuerde seleccionar o digitar los 2 números.!!", "warning");
    }
})

/*  funcion para limpiar controles  */

const limpiar = document.getElementById("limpiar");

limpiar.addEventListener("click", ()=>{
    numerouno.value = 0;
    numerodos.value = 0;
})

