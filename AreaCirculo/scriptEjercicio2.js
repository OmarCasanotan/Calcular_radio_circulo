

function calcular(){
    var radio = parseInt(document.getElementById("valor").value)||0;
    if(!isNaN(radio)){
        radio= (Math.PI*radio*radio).toFixed(2);
        document.getElementById("resultado").textContent=`El area es: ${radio} `;
    }
   
};