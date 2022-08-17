function tempo(segundos) {   /*Parte onde vai substituir o primeiro paragrafo pelo timer */
    const data = new Date(segundos*1000)
    return data.toLocaleTimeString('pt-Br', {
        hour12: false,
        timeZone: 'UTC'
    });
}




const relogio =  document.querySelector('.relogio');
const iniciar =  document.querySelector('.iniciar');
const parar =  document.querySelector('.parar');
const zerar =  document.querySelector('.zerar');
let segundos = 0;                                       /*Variavel que vai manter os segundos*/
let timer;                                             

function iniciaRelogio() {                              //Função que vai dar inicio ao relogio    
     timer = setInterval(function() {  
        segundos++;                                      // Nessa linha Irá contar os segundos
        relogio.innerHTML =  tempo(segundos)            // Nessa linha ocorre a atualização da hora   
    }, 1000);
};
/*Para pegar o evento do click*/
iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado');                //Remove a classe que dixa a cor do timer vermelho
    clearInterval(timer);                               //Para o relogio não bugar com duas contagens diferentes
    iniciaRelogio();
    
});
parar.addEventListener('click', function(event){
    clearInterval(timer);                               // Vai parar o programa assim que clicar em parar
    relogio.classList.add('pausado');                   // Irá adicionar a classe que deixa o timer na cor vermelha
});
zerar.addEventListener('click', function(event){    
clearInterval(timer);                                     // Vai parar o programa assim que clicar em parar
    relogio.innerHTML =  '00:00:00'                  // Irá atualizar a palavra do paragrafo resetando o programa      
    segundos = 0;                                    // segundos irá retornar do zero                   
    relogio.classList.remove('pausado');
});