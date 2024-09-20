// Função para copiar texto e adicionar animação
function copiarTexto(index) {
    navigator.clipboard.writeText(scriptsEspeciais[index]);
}

// Função para exibir resultados
function mostrarResultados() {
    const input = document.getElementById("meuInput");
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = ""; // Limpa resultados anteriores

    scriptsSalvos.forEach((script, index) => {
        if (script.includes(input.value)) {
            const resultadoDiv = document.createElement("div");
            resultadoDiv.className = "resultado";
            resultadoDiv.textContent = script;

            // Adiciona evento de clique para copiar texto e limpar caixinhas
            resultadoDiv.addEventListener("click", () => {
                copiarTexto(index);
                resultadoDiv.classList.add("clicado"); // Adiciona a classe para animação

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
