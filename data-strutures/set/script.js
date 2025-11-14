function getSet(){
    const set = new Set();
    const str1 = "Hello";
    const str2 = "World";

    set.add(str1); set.add(str1);
    set.add(str2); set.add(str2);

    const setDoc = document.getElementById("set");

    setDoc.innerHTML = set.size;
}
