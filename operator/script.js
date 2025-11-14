function getCalculator(){
    const one = parseInt(document.getElementsByName('one')[0].value, 10);
    const two = parseInt(document.getElementsByName('two')[0].value, 10);
    
    var response = null;
    const operator = document.getElementsByName('operator');

    console.log(operator[0].value)
    console.log(one)
    console.log(two)

    if('+' == operator[0].value) {response = one+two;}
    if('-' == operator[0].value) {response = one-two; }
    if('*' == operator[0].value) { response = one*two; }
    if('/' == operator[0].value) { try{ response = one/two;} catch(exc){ response = exc }}
    if(response == null){
        response = "OPERAÇÃO INVÁLIDA!";
    }

    const doc = document.getElementById('response');
    doc.innerHTML = response;
}
