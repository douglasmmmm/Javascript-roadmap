function getTypes(){
    let typeString = "NAME";
    let typeNumber = 123456789;
    let typeBoolean = true;
    let typeUndefined = undefined;
    let typeNull = null;
    let typeBigInt = BigInt(9007199254740991)

    const docString = document.getElementById('string');
    const docNumber = document.getElementById('number');
    const docBoolean = document.getElementById('boolean');
    const docUndefined = document.getElementById('undefined');
    const docNull = document.getElementById('null');
    const docBigInt = document.getElementById('bigint');

    docBigInt.innerHTML = typeBigInt;
    docNull.innerHTML = typeNull;
    docUndefined.innerHTML = typeUndefined;
    docBoolean.innerHTML = typeBoolean;
    docNumber.innerHTML = typeNumber;
    docString.innerHTML = typeString;

}