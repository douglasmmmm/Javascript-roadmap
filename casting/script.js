function getObject(){
    const one = parseInt(document.getElementsByName('one')[0].value, 10);
    const two = parseInt(document.getElementsByName('two')[0].value, 10);
    
    var response = null;

    console.log(one)
    console.log(two)

    const object = new Object({same: "USER", age: one, yearOfBirth: two, surname: "surname"});
    delete object.surname;

    console.log(object);

    const doc = document.getElementById('response');
    doc.innerHTML = " " + object.name + " - " + object.age + " - " + object.yearOfBirth;
}
