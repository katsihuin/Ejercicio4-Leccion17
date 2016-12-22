(function(){
    var formulario = document.getElementByName("formulario")[0],
        elementos = formulario.elements,
        boton = document.getElementById("btn");
    var validarNombre = function(e){
        if (formulario.nombre.value == 0) {
            alert("Completa el campo Monos");
            e.preventDefault();
        }
    };

    var validarRadio = function(e){
        if (formulario.smile[0].checked == true || formulario.smile[1].checked == true){
        } else {
            alert("Completa el campo Smile");
            e.preventDefault();
        }
    }

    var validarCheckbox = function(e){
        if (formulario.monkey.checked == true || formulario.monkey[1].checked == true){
        } else {
            alert ("Completa el campo Monkey");
            e.preventDefault();
        }
    };

    var validar = function(e){
        validarNombre(e);
        validarRadio(e);
    };

    formulario.addEventListener("submit", validar);

}())
