function getCoercion(){
    const one = 1 + "1" + 2;
    const two = 2 * "5";
    const three = true + true;

    const foo = {
        valueOf: () => 2
    }

    const four = 4 + foo;

    const doc1 = document.getElementById("one");
    const doc2 = document.getElementById("two");
    const doc3 = document.getElementById("three");
    const doc4 = document.getElementById("four");

    doc1.innerHTML = one;
    doc2.innerHTML = two;
    doc3.innerHTML = three;
    doc4.innerHTML = four;
}
