const botao = document.getElementById("btn");

const dataAtual = new Date().getFullYear();

botao.addEventListener("click", function() {
    const ano = Number(document.getElementById("txtn1").value);
    const sexo = document.querySelector('input[name="checkbox"]:checked');
    const texto = document.getElementById("texto");
    
    if ((ano - dataAtual) > 0 || sexo === null || ano === 0 ) {
        alert("Selecione os dados corretamente!");
    } else {
        texto.innerText = `Detectamos ${sexo.value} de ${dataAtual - ano} ano(s).`;
    }
});