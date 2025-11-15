async function fetchJSON(){
    const response = 
        await fetch('https://raw.githubusercontent.com/douglasmmmm/Javascript-roadmap/refs/heads/main/example.json') 
    return response.json(); 
    
}


async function getJSON(){

    const person = await fetchJSON();


    let strFinal = "";
    strFinal += person.name + " - " + person.age + " - " + person.skills[1];

    const doc = document.getElementById("json");
    doc.innerHTML = strFinal;
}
