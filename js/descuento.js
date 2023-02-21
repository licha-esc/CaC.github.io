function operaciones() {
    let opcion = document.querySelector("#opciones_nuevo").value;
    let cantidad = parseFloat(document.getElementById("cantidad").value);
    let resultado = document.querySelector("#resultado");
    let ticket = 200;

    if(opcion == 'Trainee') {
        resultado.value = cantidad * (ticket - (ticket * 0.5));
    }

    if(opcion == 'Junior') {
        resultado.value = cantidad * (ticket - (ticket * 0.15));
    }

    if(opcion == 'Estudiante') {
        resultado.value = cantidad * (ticket - (ticket * 0.8));
    }
    
    if(isNaN(cantidad)) {
        alert('Ingrese una cantidad válida.');
        resultado.value = '';
    }

    if (resultado.value == undefined) {
        alert('Ingrese una cantidad válida.');
        resultado.value = '';
    }

    resultado.innerHTML = "<em>Total a pagar: $"+resultado.value+"</em>";

    // console.log(resultado);
    // console.log(resultado.value);
    // console.log(opcion);
    // console.log(cantidad);
    // console.log(ticket);
}

function clean_all() {
    const btn = document.getElementById('boton1-form2');

    btn.addEventListener('click', function handleClick(event) {
        event.preventDefault();
    
        const inputs = document.querySelectorAll('#opciones_nuevo, #cantidad');
    
        inputs.forEach(input => {
        input.value = '';
        });
    });
}


let discountStudent = document.querySelector(".Trainee");
discountStudent.addEventListener("click", updateCategory);
let discountTrainee = document.querySelector(".trainee");
discountTrainee.addEventListener("click", updateCategory);
let discountJunior = document.querySelector(".junior");
discountJunior.addEventListener("click", updateCategory);