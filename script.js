
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

//Creo las variables necesarias para capturar los diferentes eventos de los botones

var botonEncriptar = document.querySelector("#btn-encriptar");
var botonDesencriptar = document.querySelector("#btn-desencriptar");
var botonCopiar = document.querySelector("#btn-copy");
var campoTexto = document.querySelector("#input-texto");
var msgEncriptado;
var msgDesencriptado;

campoTexto.addEventListener("input",function(event){
    var texto = campoTexto.value;
    var texto = texto.toLowerCase()
    console.log(texto);
    
    encriptar(texto);
    desencriptar(texto);
    copiarTexto();
});

//Creo un función la cual es la encargada de encriptar el mensaje 
function encriptar(texto){
    botonEncriptar.addEventListener("click",function(event){  
        event.preventDefault();
        msgEncriptado = texto.replace(/e/g,"enter");
        msgEncriptado = msgEncriptado.replace(/i/g,"imes");
        msgEncriptado = msgEncriptado.replace(/a/g,"ai");
        msgEncriptado = msgEncriptado.replace(/o/g,"ober");
        msgEncriptado = msgEncriptado.replace(/u/g,"ufat");
        console.log(msgEncriptado);
        
        document.getElementById("msg").value = msgEncriptado;
    });
}


//Creo la función encargada de desencriptar el mensaje
function desencriptar(texto){
    botonDesencriptar.addEventListener("click",function(event){
        event.preventDefault();
        msgDesencriptado = texto.replace(/enter/g,"e");
        msgDesencriptado = msgDesencriptado.replace(/imes/g,"i");
        msgDesencriptado = msgDesencriptado.replace(/ai/g,"a");
        msgDesencriptado = msgDesencriptado.replace(/ober/g,"o");
        msgDesencriptado = msgDesencriptado.replace(/ufat/g,"u");
        console.log(msgDesencriptado);
        document.getElementById("msg").value = msgDesencriptado;
    });
}

//Creo la función que me permite copiar el texto
function copiarTexto(){
    botonCopiar.addEventListener("click",function(event){
        event.preventDefault();
        var copiar = document.querySelector("#msg");
        copiar.select();
        document.execCommand("copy");
    });
}



