let cargarDatos = () => {
  let divInicial = document.getElementById("menub")
  
  fetch("http://localhost:3000/relacional/menu")
  .then((resultado) =>{
      return resultado.json();
  })
  .then((json) =>{
    for(let elemento of json){
      let divPrincipal = document.createElement("div");
      divPrincipal.setAttribute("class","menud");
      divPrincipal.setAttribute("id","menudiv");
      
      let divInformacion = document.createElement("div");
      divInformacion.setAttribute("class","textodiv");
      divInformacion.setAttribute("id","textiodiv");  

      let nombre = document.createElement("h2");
      nombre.textContent = elemento.nombre;
      nombre.setAttribute("class","nombreMenu");
      divInformacion.appendChild(nombre);
      
      let ingredientes = document.createElement("h3");
      ingredientes.setAttribute("class","textom");
      ingredientes.textContent = elemento.ingredientes; 
      divInformacion.appendChild(ingredientes);

      let img = document.createElement("img");
      img.src = elemento.imagenes[0].imgSRC;
      img.setAttribute("class","img");

      let divImagen = document.createElement("div");
      divImagen.setAttribute("class","imagenesmenu");
      divImagen.appendChild(img);

      divPrincipal.appendChild(divInformacion);
      divPrincipal.appendChild(divImagen);
      
      divInicial.appendChild(divPrincipal);
    }
  })
}

document.addEventListener('DOMContentLoaded', function() {
  cargarDatos();

  const buscador = document.getElementById("myInput");
  buscador.addEventListener('input',function(event){
    let frase = event.target.value.toUpperCase()
    let burbujas = document.getElementsByClassName("menud")
    let fondo = document.getElementById("menub")
    if(frase != ""){
      var cont = 0;
      for(let item of burbujas){
        let autor = item.getElementsByTagName("h2")[0].textContent.toUpperCase()
        let texto = item.getElementsByTagName("h3")[0].textContent.toUpperCase()

        if(autor.includes(frase.toUpperCase()) || texto.includes(frase.toUpperCase()) ){
          fondo.style.display = ""
          item.style.display = ""
          item.style.flex = ""
        
          cont++;
          if(cont%2!=0 ){
            fondo.style.display = ""
          }
        }
        else{
            item.style.display = "none"
        }
      }
    }else{
      for(let item of burbujas){
        item.style.display = ""
        fondo.style.display = ""
      }
    }
  });
})