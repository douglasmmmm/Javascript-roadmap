function getVars(){
    var one = 1;
    var two = 2;
    var three = 3;
    var doc = document.getElementById('var');
    doc.innerHTML =  one + two + three;
}

function getLet(){
    let one = 1;
    let two = 2;
    let three = 3;
    if(true){
        let one = 10;
        let two = 20;
        let three = 30;
        var doc = document.getElementById('let');
        doc.innerHTML =  one + two + three;
    }
    
}

function getConst(){
    try{
        const one = 1;
        one++;
        one+=1;
        one+=20;
    }catch(exc){
        var doc = document.getElementById('const');
        doc.innerHTML =  exc;
    }
    
}