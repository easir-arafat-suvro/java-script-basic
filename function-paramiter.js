// function codes are not run without calling it, so at the of debugging "function bringSingara(taka)" will not run and js engin go to the var money > singara > money&replace the value by 250 > put the parameter value into the taka > than goes in the function & calculate > return result > which result than hold by the variable "singara".


function bringSingara(taka) {
    console.log('singara er jonno dise tk', taka);
    console.log('Mama singara dan');
    var singaraPrice = 10;
    var singaraQty = taka / singaraPrice;
    return singaraQty;
}

var money = 250;
var singara = bringSingara(money);
console.log('ae nan shingara', singara);
