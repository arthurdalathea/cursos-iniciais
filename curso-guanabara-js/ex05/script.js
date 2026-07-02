const input = document.getElementById("inputnumero");
const adicionar = document.getElementById("adicionar");
const finalizar = document.getElementById("finalizar");
const limpar = document.getElementById("limpar");
const select = document.getElementById("select")
const div = document.getElementById("principal");
let valores = [];

function somar(lista) {
    let soma = 0;
    for (let numero of lista) {
        soma += numero;
    }
    return soma;
}


function media(lista) {
    let soma = 0;
    let valores = 0;
    for (let numero of lista) {
        soma += numero;
        valores++;
    }
    return soma / valores;
}


function removerParagrafos() {
    let ultimoElemento = div.lastElementChild;

    while (ultimoElemento.tagName == "P") {
        ultimoElemento.remove();
        ultimoElemento = div.lastElementChild;
        }
}


input.addEventListener("input", function() {
    if (this.value > 100) this.value = 100;
    if (this.value < 1 && this.value !== '') this.value = 1;
})


adicionar.addEventListener("click", function() {
    let num = document.getElementById("inputnumero").value;
    input.value = "";
    
    if (num != "") {
        num = Number(num);

        if (valores.indexOf(num) !== -1) {
            window.alert("Você já adicionou esse valor!");
        } else {
            valores.push(num);
            let opcao = document.createElement("option");
            opcao.textContent = `Valor ${num} adicionado.`;
            select.appendChild(opcao);
            
        }
    }
    
    input.focus();
})


finalizar.addEventListener("click", function() {
    if (valores.length !== 0) {
        removerParagrafos();
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let p4 = document.createElement("p");
        let p5 = document.createElement("p");
        p1.textContent = `Ao todo, temos ${valores.length} valor(es) cadastrados.`;
        div.appendChild(p1)
        p2.textContent = `O maior valor informado foi ${Math.max(...valores)}.`;
        div.appendChild(p2);
        p3.textContent = `O menor valor informado foi ${Math.min(...valores)}.`;
        div.appendChild(p3);
        p4.textContent = `Somando todos os valores, temos ${somar(valores)}.`
        div.appendChild(p4);
        console.log(valores);
        p5.textContent = `A média dos valores digitados é ${media(valores).toFixed(2).replace(".", ",")}.`;
        div.appendChild(p5);
    }
})


limpar.addEventListener("click", function() {
    removerParagrafos();
    const select = document.getElementById("select");
    select.options.length = 0;

    valores = []
})



