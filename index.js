

function outcome() {

    let valor = Number(document.getElementById('valor').value)
    let total = 0
    const moedas  = {
        dolar : 5.49,
        euro : 6.33,
        yuan : 0.76,
        iene : 0.038
    }
    

    if (document.getElementById('box1').checked)
        total = valor / moedas.dolar
    else if (document.getElementById('box2').checked)
        total = valor / moedas.euro
    else if (document.getElementById('box3').checked)
        total = valor /moedas.yuan
    else
        total = valor / moedas.iene
    document.getElementById('resultArea').innerHTML = 'Result: ' + String(total.toFixed(2))
}