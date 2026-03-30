document.addEventListener("DOMContentLoaded", () => {
    const rutaJSON = "/assets/data/faqs.json";
    const lista = document.getElementById("lista-faq");

    fetch(rutaJSON)
        .then(response => {
            
            if (!response.ok) {
                throw new Error("Erro ao cargar o JSON: " + response.status);
            }
            return response.json();
        })
        .then(mostrarJson)
        .catch(error => {
            console.error("Erro na operación fetch:", error);
        });
});


function mostrarJson(datos) {
    const lista = document.getElementById("lista-faq");
    let html = "";

    datos.faqs.forEach(item => {
        html += `
            <li>
                <h3>${item.pregunta}</h3>
                <p>${item.resposta}</p>
            </li>
        `;
    });

    lista.innerHTML = html;
}