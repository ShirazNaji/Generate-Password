const pw = document.getElementById('pw');
const copypw = document.getElementById('copy');
const lenpw = document.getElementById('len');
const upperpw = document.getElementById('upper');
const lowerpw = document.getElementById('lower');
const symbolpw = document.getElementById('symbol');
const generatepw= document.getElementById('generate');
const numberpw = document.getElementById('number');


const UppercaseLetters = "ABCDEFJHIGKLMNOPQRSTUWXYZ";
const LowercaseLetters = "abcdefjhigklmnopqrstuwxyz";
const Numbers = "0123456789";
const Symbols = "`!@#$%^&*()_+=|";


function getlower(){
    return LowercaseLetters[Math.floor(Math.random() * LowercaseLetters.length)];
}

function getupper(){
    return UppercaseLetters[Math.floor(Math.random() * UppercaseLetters.length)];
}

function getnumber(){
    return Numbers[Math.floor(Math.random() * Numbers.length)];
}

function getsymbol(){
    return Symbols[Math.floor(Math.random() * Symbols.length)];
}


function generatePASS(){
    
    const len = lenpw.value;
   
    let pass = "";
    
    for(let i=0 ; i<len ; i++){
        
        const x = generateX();
        pass +=x.join("");
        
        
        
    }
    
    pw.innerHTML =pass;
    
    
}

function generateX(){
    
    const res=[];
    
    if(upperpw.checked){
        res.push(getupper());
        
       }
    
    if(lowerpw.checked){
        res.push(getlower());
       }
    
    if(numberpw.checked){
        res.push(getnumber());
       }
    
    if(symbolpw.checked){
        res.push(getsymbol());
       }
    
    return res;
    
}


generatepw.addEventListener("click",function(){
    
    
        generatePASS();
   
    
});

























