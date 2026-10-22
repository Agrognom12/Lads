function fn(){
    const constObject = { name: "Ivan" };
    let letObject = { name: "Panvan" };

    console.log(constObject);
    console.log(letObject);

    constObject.name = "Danya";
    letObject.name = "Valera";

    console.log(constObject);
    console.log(letObject);

    letObject = { name: "letName" };

    console.log(letObject);
}

fn();


function createUser(name, city){
    return {name, city};
}

console.log(createUser('Marcus August', 'Artem' ));
