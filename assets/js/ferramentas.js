document.addEventListener("DOMContentLoaded", () => {
    configurarBoton("btn-plugins", "/assets/data/plugins.xml", "lista-plugins", "plugin");
    configurarBoton("btn-modelos", "/assets/data/modelos.xml", "lista-modelos", "modelo");
    configurarBoton("btn-texturas", "/assets/data/texturas.xml", "lista-texturas", "textura");
});

function configurarBoton(idBoton, rutaXML, idLista, etiquetaItem) {
    const boton = document.getElementById(idBoton);
    if (boton) {
        boton.addEventListener("click", () => {
            boton.style.display = "none";
            cargarContido(rutaXML, idLista, etiquetaItem);
        });
    }
}

function cargarContido(ruta, idLista, etiqueta) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let xmlDoc = this.responseXML;
            let items = xmlDoc.getElementsByTagName(etiqueta);
            visualizaXML(items, idLista);
        }
    };
    xhttp.open("GET", ruta, true);
    xhttp.send();
}

function visualizaXML(datos, idLista) {
    const lista = document.getElementById(idLista);

    for (let i = 0; i < datos.length; i++) {
        let nomeTxt = datos[i].getElementsByTagName("nome")[0].textContent;
        let descTxt = datos[i].getElementsByTagName("descripcion")[0].textContent;

        let novoLi = document.createElement("li");
        let novoH3 = document.createElement("h3");
        let novoP = document.createElement("p");
        let novoH4 = document.createElement("h4");

        novoH3.textContent = nomeTxt;
        novoP.textContent = descTxt;
        novoH4.innerHTML = '<a href="../../assets/docs/Plug_in.zip">Descargar</a>';

        novoLi.appendChild(novoH3);
        novoLi.appendChild(novoP);
        novoLi.appendChild(novoH4);

        lista.appendChild(novoLi);
    }
}