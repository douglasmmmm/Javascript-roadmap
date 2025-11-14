function getArray(){
    const arrayVar = [1, "NAME", true, -999]

    const doc1 = document.getElementById("one");
    const doc2 = document.getElementById("two");
    const doc3 = document.getElementById("three");
    const doc4 = document.getElementById("four");

    doc1.innerHTML = arrayVar[0];
    doc2.innerHTML = arrayVar[1];
    doc3.innerHTML = arrayVar[2];
    doc4.innerHTML = arrayVar[3];
}
