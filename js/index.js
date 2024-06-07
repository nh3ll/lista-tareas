

agregarTarea = () =>{

    /* OBTENGO EL VALOR DEL CAMPO */
    let nuevaTareaTexto = document.getElementById("input-id").value;

    /* VERIFICO QUE EL CAMPO NO ESTE VACIO */
    if (nuevaTareaTexto === "") {
        alert("Ingrese una tarea");
        return;
    }

    /* CREAR ELEMENTO EN LISTA */
    let nuevoListItem = document.createElement('li');
    nuevoListItem.classList.add("item_list-card");

    nuevoListItem.innerHTML = `
    <div class="list_card-content">
        <div class="list-card-added">${nuevaTareaTexto}</div>
    </div>

    `;


    /* CREAR DIV DONDE ESTEN LOS ICONOS DE BORRAR Y CHEQUEAR */
    let divIcons = document.createElement("div");
    divIcons.classList.add("list-card-icons");

    /* BOTON ELIMINAR */
    let botonBorrar = document.createElement("button");
    botonBorrar.innerHTML = `<i class="fa-solid fa-xmark" id="delete-id"></i>`;
    botonBorrar.classList.add("delete");
    botonBorrar.onclick = function() {nuevoListItem.remove()} ;

    /* BOTON CHEQUEAR */
    let botonChequear = document.createElement("button");
    botonChequear.innerHTML = `<i class="fa-solid fa-check" id="check-id"></i>`;
    botonChequear.classList.add("check");
    botonChequear.addEventListener("click", function(){
        let textoDeLista = nuevoListItem;
        textoDeLista.classList.toggle('complete');
    }) 

    /* AGREGAR BOTON AL DIV Y AGREGAR DIV AL ELEMENTO */
    divIcons.appendChild(botonBorrar);
    divIcons.appendChild(botonChequear);
    nuevoListItem.appendChild(divIcons)

    /* AGREGAR ELEMENTO NUEVO A LA LISTA DE TAREAS */
    document.getElementById("section_list-task").appendChild(nuevoListItem);

}



