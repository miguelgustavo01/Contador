function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res= document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length ==0 || passo.value.length == 0){
        res.innerHTML= ('Contagem irregular')
        window.alert('Campos incorretos, Faltam DADOS!')
        
    }else{
        res.innerHTML = 'Contando... <br>'
        var i = Number(ini.value) //Transformando a variavel inicio,fim e pasos em numeros
        var f = Number(fim.value)
        var p = Number(passo.value)

        if(p <=0 ){
            window.alert('Passo invalido, considerando passo = 1')
            p = 1 
        }

        if(i<f){
            //Menor para maior
            for ( var c= i; c <= f; c+= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F6AB}`
        }else{
            //Maior para menor
            for ( var c= i; c >= f; c-= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F6AB}`
        }

        
    }

}