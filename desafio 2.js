
let familia = {
    receitas:[4000,1300,5000],
    despesas:[4000,1300,5000]
}
function totalDespesas(object) {
    let somaReceitas = soma(object.receitas);
    let somaDespesas = soma(object.despesas);
    total= somaReceitas-somaDespesas;
    if (total>=0) {
        return "saldo positivo" 
    }
    else{
        return "saldo negativo"
    }
}
function soma(array) {
    let total=0;
    for (const i of array) {
        total += i
    }
return total
}
console.log(totalDespesas(familia))
