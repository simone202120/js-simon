/*

------DESCRIZIONE STEP ESERCIZI-----

1)  GENERARE ARRAY DI NUMERI CASUALI E INSERIRLI NEL DOM
2)  IMPOSTARE TIMER DI 30 SECONDI PER FARLI SPARIRE
3)  TRAMITE PROMPT FARE INSERIRE I NUMERI ALL'UTENTE E SALVARLI IN UN ALTRO ARRAY
4)  CONTROLLARE SE I NUMERI DELL'ARRAY UTENTE SONO CONTENUTI NELL'ARRAY DI NUMERI GENERATI ALL'INIZIO
5)  CREARE UN ARRAY CON I NUMERI CHE SONO UGUALI
6)  MOSTRARE ARRAY DI NUMERI INDOVINATI DALL'UTENTE E NUMERO DI ELEMENTI NELL'ARRAY

 */

let arraynumeri = [];
let arrayutente = [];
let numeriuguali =[];
let numeriGiusti;

generanumeri()
setTimeout(function(){
    document.getElementById('boxnumeri').classList.add('none')
}, 30000);
setTimeout(function(){
recuperanumeri()
controllo()
alert('Hai indovinato '+ numeriuguali.length + ' numeri:' + numeriuguali)

}, 30010);








function generanumeri(){
    while(arraynumeri.length < 8){
        let numero= Math.floor(Math.random() * 101);
        if(!arraynumeri.includes(numero)){
            arraynumeri.push(numero);
            document.getElementById('boxnumeri').innerHTML=arraynumeri;
            console.log(arraynumeri)
        }
    }
}

function recuperanumeri(){
    for(i=0; i<8; i++){
        let numeriutente=parseInt(prompt('inserisci uno alla volta i numeri'));
        arrayutente.push(numeriutente);
        console.log(arrayutente)
    }
}

function controllo(){
    for(x=0; x<arraynumeri.length; x++){
        if(arrayutente.includes(arraynumeri[x])){
            numeriuguali.push(arraynumeri[x]);
        }
        numeriGiusti = numeriuguali.length;
        console.log(numeriuguali)
        console.log(numeriGiusti)
    }
    
}