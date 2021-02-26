

    function myFunction() {
    setInterval(function(){ 
     generateExcuse() 
    }, 3000);
    }
function generateExcuse(){


let who = ['The dog','My granma','His turtle','My bird'];
let action = ['ate','pissed','crushed','broked'];
let what = ['my homework', 'the keys','the car'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

let whoIndex = Math.floor(Math.random() * who.length);
let actionIndex = Math.floor(Math.random() * action.length);
let whatIndex = Math.floor(Math.random() * what.length);
let whenIndex = Math.floor(Math.random() * when.length);

    let msg= who[whoIndex] + ' ' + action[actionIndex] + ' ' + what[whatIndex] + ' ' + when[whenIndex];
    document.querySelector("#theexcuse").innerHTML= msg;
};