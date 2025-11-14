const constGlobal = "222"
var varGlobal = "555"

function getScope(){
    const constGlobal = "111";
    varGlobal = "999";
    let localVar = 10;
    if(true){
        let localVar = 1;

        var docConst = document.getElementById('const');
        var docLet = document.getElementById('let');
        var docVar = document.getElementById('var');

        console.log(localVar);
        console.log(varGlobal);
        console.log(constGlobal);

        docConst.innerHTML = constGlobal;
        docLet.innerHTML = localVar;
        docVar.innerHTML = varGlobal;
    }
}