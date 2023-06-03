const nombre = document.getElementById("name")
const email = document.getElementById("email")
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const form = document.getElementById("form")
const salarioInput = document.getElementById('salarioInput')
const divOfertas = document.getElementById("ofertas")

form.addEventListener("submit", e => {
    e.preventDefault();
    if(nombre.value === '') {
        alert('Por favor, ingrese su nombre en el formulario.');
        e.preventDefault(); 
    }
    
    if(!regexEmail.test(email.value)) {
        alert('Por favor, ingrese un corre electrónico válido.')
        e.preventDefault() 
        }

    const salario = parseFloat(salarioInput.value);

    if(salario === '') {
        alert('Por favor, ingrese el monto.')
        e.preventDefault() 
    }
    
    if (salario < 100000) {
        alert('El monto del salario es mínimo. Debe ser mayor a $100000.')
        e.preventDefault() 
    } else {
        const nuevaOferta = document.createElement('div')
        nuevaOferta.textContent = `Nombre: ${nombre.value} || Salario: ${salario.toFixed(2)}`;
        divOfertas.appendChild(nuevaOferta)

        salarioInput.value = '';
        nombre.value = '';
        email.value = '';
    } 

    divOfertas.scrollTop = divOfertas.scrollHeight;

    const salarioGuardado = salario;

    const salarioMostrado = document.getElementById('salarioMostrado');
    salarioMostrado.textContent = salarioGuardado.toFixed;
})

