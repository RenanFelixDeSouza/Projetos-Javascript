function Mostra() {
    let hora = new Date()
    return hora.toLocaleTimeString('pt-BR', {hour12: false});
}

function funcaoDoInterval(){
    console.log(Mostra())
}
const timer = setInterval(function (){
    console.log(Mostra())
}, 1000);

setTimeout(function (){
clearInterval(timer)
}, 5000)


setTimeout(function (){
    console.log('CABO')
    }, 7000)



    
iniciar.addEventListener('click', setInterval(() => cronometro.innerHTML = contadorSeconds++, 1000))

iniciar.addEventListener('click', setInterval(() => cronometro.innerHTML = contadorMinuts++, 60000))

iniciar.addEventListener('click', setInterval(() => cronometro.innerHTML = contadorHours++, 3600000))


document.write("os")











