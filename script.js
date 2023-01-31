function calcular() {
    var num = document.querySelector('input#numero')
    var numero = Number(num.value)
    var tab = document.querySelector('select#tabhtml')
    
    if (num.value.length == 0) {
        alert('[ERRO] DIGITE UM NUMERO VALIDO')
    } else {
        var aux = 1
        tab.innerHTML =""

        while (aux <= 10) {
            var item = document.createElement('option')    
            item.text = `${numero} X ${aux} = ${numero*aux}`
            item.value = `tabhtml${aux}`
            
            tab.appendChild(item)
            aux++
        }
    }
}