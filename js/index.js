const input = document.getElementById("input-id");
let nuevoListItem = document.createElement('li');                     /* VARIABLE GLOBAL IMPORTANTE YA QUE SE USA EN CASI TODAS LAS FUNCIONES */

const funcionEliminar = () =>{                                                          /* BOTON CON EL EVENTO DE REMOVER EL nuevoListItem, SE RETORNA  */
    let botonBorrar = document.createElement("button");
    botonBorrar.innerHTML = `<i class="fa-solid fa-xmark" id="delete-id"></i>`;
    botonBorrar.classList.add("delete");
    botonBorrar.onclick = function() {nuevoListItem.remove()} ;
    return botonBorrar;
    }

    const funcionCheck = ()=>{                                                           /* BOTON CON EL EVENTO DE CAMBIAR LA CLASE DE nuevoListItem, SE RETORNA  */
    let botonChequear = document.createElement("button");
    botonChequear.innerHTML = `<i class="fa-solid fa-check" id="check-id"></i>`;
    botonChequear.classList.add("check");
    botonChequear.addEventListener("click", function(){
        let textoDeLista = nuevoListItem;
        textoDeLista.classList.toggle('complete');
    }) 
    return botonChequear;
    }

const iconsCreate =(nuevoListItem)=>{                            /* CREA UN DIV CON VARIABLES DE LOS RETORNOS PASADOS, ESTAS SE AÑADEN COMO HIJOS Y ESTE SE AGREGA AL nuevoListItem  */
    let divIcons = document.createElement("div");
    divIcons.classList.add("list-card-icons");
    const botonEliminar = funcionEliminar(); 
    const botonChequear = funcionCheck(); 
    divIcons.appendChild(botonEliminar);
    divIcons.appendChild(botonChequear);
    nuevoListItem.appendChild(divIcons);
    }  

    const agregarTarea = () =>{                           /*VE VALOR DEL INPUT, CREA HTML DE nuevoListItem Y PONE EN SECCION , SI ES DISTINTO DE VACIO, HACE LA FUNCION iconsCreate */     
    let nuevaTareaTexto = document.getElementById("input-id").value;
    if (nuevaTareaTexto === "") {
        alert("Ingrese una tarea");
        return;
    }
    nuevoListItem.classList.add("item_list-card");
    nuevoListItem.innerHTML = 
    `
    <div class="list_card-content">
        <div class="list-card-added">${nuevaTareaTexto}</div>
    </div>
    `;
    iconsCreate(nuevoListItem);
    document.getElementById("section_list-task").appendChild(nuevoListItem);
    input.value = "";
    }
