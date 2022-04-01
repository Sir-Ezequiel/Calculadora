function dividir(numero1, numero2){
    if(numero1 !== 0  && numero2 !== 0){
        return numero1 / numero2
    } else {
        return "no se puede dividir por 0"
    }
    
    
}

module.exports = dividir;
