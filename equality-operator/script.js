function getEqualityOperator(){
    const one = 1;
    const two = "1";
    const three = "-1";

    const four = -1;


    const doc1 = document.getElementById("one");
    const doc2 = document.getElementById("two");
    const doc3 = document.getElementById("three");
    const doc4 = document.getElementById("four");

    doc1.innerHTML = one == one;
    doc2.innerHTML = one === two;
    doc3.innerHTML = three == four;
    doc4.innerHTML = three === four;
}
