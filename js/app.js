const inputFecha = document.getElementById("input");
const btnCalcularEdad = document.getElementById("btn");
const resultadoEdad = document.getElementById("resultado");

const calcularAnos = (fechaPasada) => {
    if (!(fechaPasada instanceof Date) || isNaN(fechaPasada)) {
        return "Por favor, ingrese una fecha válida.";
    }

    const hoy = new Date();
   
    let anos = hoy.getFullYear() - fechaPasada.getFullYear();
   
    const diferenciaMeses = hoy.getMonth() - fechaPasada.getMonth();
    const diferenciaDias = hoy.getDate() - fechaPasada.getDate();
 
    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && diferenciaDias < 0)) {
        anos--; 
    }

    return `${anos} años`;
};

btnCalcularEdad.addEventListener("click", () => {
    const valorInput = inputFecha.value; 

    if (!valorInput) {
        resultadoEdad.textContent = "Por favor, seleccione una fecha en el calendario.";
        return;
    }

    const partes = valorInput.split("-");
    const anio = parseInt(partes[0]);
    const mes = parseInt(partes[1]) - 1; 
    const dia = parseInt(partes[2]);

    const fechaObjeto = new Date(anio, mes, dia);

    const resultadoTexto = calcularAnos(fechaObjeto);

    resultadoEdad.textContent = resultadoTexto;

    inputFecha.value = "";
    inputFecha.focus();
});
