function mensagem(hash){
    document.getElementById('imc').style.cssText = `color: ${hash}`
}


function calcular() {

    var altura = document.getElementById('altura').value

    var peso = document.getElementById('peso').value

    var alturaVerificada = altura.trim()

    var pesoVerificado = peso.trim()

    if (alturaVerificada == '' || pesoVerificado == '') {
        document.getElementById('imc').innerText = 'Os campos não podem estar vazios!'
        mensagem('#ccff33')
    } else {

        var calculo = pesoVerificado / (alturaVerificada * alturaVerificada)

        var imc = calculo.toFixed(2)

        if (isNaN(imc)) {
            document.getElementById('imc').innerText = 'Um ou mais dados informados são inválidos.'
            mensagem('#ccff33')
        } else {
            if (imc <= 18.5) {
                var resultado = 'abaixo do peso'
                mensagem('#fbff00')
            } else if (imc > 18.4 && imc <= 24.99) {
                var resultado = 'normal'
                mensagem('#1bf308')
            } else if (imc > 25 && imc <= 29) {
                var resultado = 'sobrepeso'
                mensagem('#fda500')
            } else {
                var resultado = 'obeso'
                mensagem('#dd0a0a')
            }

            document.getElementById('imc').innerText = `Indíce IMC de ${imc} e você está ${resultado}.`
        }
    }

}

