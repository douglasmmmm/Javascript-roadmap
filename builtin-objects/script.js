function getObjects(){

    const docMath = document.getElementById('math');
    const docString = document.getElementById('string');
    const docDate = document.getElementById('date');
    

    docMath.innerHTML = Math.floor(1.55);
    docString.innerHTML = String("NAMENAME").length
    docDate.innerHTML = Date.now();

}