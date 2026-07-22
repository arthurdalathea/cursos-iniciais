const olhoFechado = document.getElementById("olho-fechado");
const olhoAberto = document.getElementById("olho-aberto");

function mostrarSenha() {
    const input = document.getElementById("isenha");

    if (input.type === "password") {
        input.type = "text";
        olhoFechado.style.display = "none";
        olhoAberto.style.display = "block";
    } else {
        input.type = "password";
        olhoFechado.style.display = "block";
        olhoAberto.style.display = "none";
    }
}

olhoAberto.addEventListener("click", mostrarSenha);
olhoFechado.addEventListener("click", mostrarSenha);
