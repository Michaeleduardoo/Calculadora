function adicionarCaracter(caracter) {
    const valorInput = document.querySelector(".display").value

    document.querySelector(".display").value = valorInput + caracter

}

function limpaTela() {
    document.querySelector(".display").value = "0"
}

function calcular() {
    const valorInput = document.querySelector(".display").value

    document.querySelector(".display").value = eval(valorInput)
}

function inverterNumero() {
    const valorInput = document.querySelector(".display").value

    document.querySelector(".display").value = valorInput * -1

}