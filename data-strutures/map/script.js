function getMap(){
    const newMap = new Map();
    newMap.set("Hello", "World");
    newMap.set("Foo", "Bar");
    newMap.set("Cpp", "Java");

    const mapDoc = document.getElementById("map");

    let strFinal = "";

    for(const [key, value] of newMap){
        strFinal += key + " - " + value + "<br>";
    }


    mapDoc.innerHTML = strFinal;
}
