//neste exercício ao invés de usar o "var" está sendo usado o "let"
function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementByTd('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = 'Impossível contar!'

} else {
    res.innerHTML = 'contando: <br>'
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p <= 0) {
        window.alert('Passo inválido! Considerando PASSO 1')
        p = 1
    }
    if (i < f) {
        //contagem crescente
        for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1f449}`
        } 
    } else {
        //contagem regressiva
        for(let c = i; c >= f; c -= p) {
            res.innerHTML += `${c} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3c1}`
    }
}