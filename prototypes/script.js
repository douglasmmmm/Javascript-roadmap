function getPrototype(){
    const one = document.getElementsByName('one')[0].value;
    const two = document.getElementsByName('two')[0].value;
    
    var response = null;

    console.log(one)
    console.log(two)

    const object = new Object({name: one, surname: "surname"});
    delete object.surname;

    console.log(object);

    let finalObject = Object.create(object);
    finalObject.surname = two;

    console.log(finalObject);

    const doc = document.getElementById('response');
    doc.innerHTML = " " + finalObject.name + " - " + finalObject.surname;
}
