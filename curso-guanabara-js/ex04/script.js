const botao = document.querySelector("input[type='button']");
console.log(botao);
const select = document.getElementById("select"); 

botao.addEventListener("click", function() {
    const input = document.getElementById("inputnumero");

    if (input.value === "" ) {
        window.alert("Digite um número válido!");
    } else {
        const num = Number(input.value);
        select.textContent = "";

        for (let i = 1; i <= 10; i++) {
            let opcao = document.createElement("option");
            opcao.textContent = `${num} x ${i} = ${num * i}`;
            select.appendChild(opcao);  
        }
    }
})