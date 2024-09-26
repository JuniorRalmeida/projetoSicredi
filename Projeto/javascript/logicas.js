// Função para copiar texto e adicionar animação
function copiarTexto(texto) {
    navigator.clipboard.writeText(texto);
}

// Função para exibir resultados
function mostrarResultados() {
    const input = document.getElementById("meuInput");
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = ""; // Limpa resultados anteriores

    const pesquisa = input.value.toLowerCase(); // Converte o texto digitado para minúsculas

    scriptsSalvos.forEach((script, index) => {
        if (script.toLowerCase().includes(pesquisa)) { // Converte cada script para minúsculas
            const resultadoDiv = document.createElement("div");
            resultadoDiv.className = "resultado";
            resultadoDiv.textContent = script; // Apenas o texto do script

            // Adiciona evento de clique para copiar texto e limpar caixinhas
            resultadoDiv.addEventListener("click", () => {
                copiarTexto(script); // Copia o texto do scriptSalvos
                resultadoDiv.classList.add("clicado"); // Adiciona a classe para animação
                input.value = ""; // Limpa o input após o clique

                // Após a animação, remover todas as caixinhas
                setTimeout(() => {
                    const resultados = document.querySelectorAll('.resultado');
                    resultados.forEach((res) => {
                        res.style.transition = 'opacity 0.5s ease';
                        res.style.opacity = '0'; // Começa a desaparecer
                    });

                    setTimeout(() => {
                        resultadosDiv.innerHTML = ""; // Remove todas as caixinhas após a animação
                    }, 500); // Aguarda a animação de 0.5s antes de remover
                }, 300); // Tempo que a caixinha fica clicada
            });

            resultadosDiv.appendChild(resultadoDiv);
        }
    });
}

// Evento de tecla pressionada para detectar ENTER
document.getElementById("meuInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        mostrarResultados();
    }
});
