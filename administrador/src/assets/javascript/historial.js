document.getElementById('filtro').addEventListener('change', (event) => {

  filtrarPlatillo(event.target.value);

});

function filtrarPlatillo(platillo){
    let tabla = document.getElementById("tablaDatosHistoril");
    let filas = tabla.getElementsByTagName("tr");
    let filasArray = Array.from(filas);
    let filasArraySlice = filasArray.slice(1, filasArray.length)

    for(let tr of filasArraySlice) {
        if(tr.textContent.includes(platillo)){
        tr.style.display = "";
        }else{
        tr.style.display = "none";
        }
    }
};