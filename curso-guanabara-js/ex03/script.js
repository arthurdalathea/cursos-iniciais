const botao = document.querySelector("input[type='button']");
const texto = document.getElementById("contagem");
const corpo = document.getElementById("corpo");
const contagem = document.createElement("p");
corpo.appendChild(contagem);

botao.addEventListener("click", function() {
    let inicio = document.getElementById("inputinicio").value;
    let fim = document.getElementById("inputfim").value;
    let passo = document.getElementById("inputpasso").value;

        if (inicio == "" || fim == "" || passo == "") {
        texto.innerHTML = "<strong>Digite todos os valores corretamente!</strong>";
        } else {
            inicio = Number(inicio);
            fim = Number(fim);
            passo = Number(passo);

            if (passo <= 0) {
                texto.innerHTML = "<strong>O passo deve ser maior que 0!</strong>";
            } else {
                texto.innerHTML = "Contando:";
                contagem.textContent = "";
                
                if (inicio < fim) {
                    
                    for ( let i = inicio; i <= fim; i += passo) {
                        contagem.innerHTML += `${i} &#8594; `  
                    }
                    contagem.innerText += " FIM!";

                } else if (inicio > fim) {

                    for (let i = inicio; i >= fim; i -= passo) {
                        contagem.innerHTML += `${i} &#8594; `  
                    }
                    contagem.innerText += " FIM!";
                
                } else {
                    contagem.innerHTML = `${inicio} &#8594; FIM!`
                }
            }
        } 
})