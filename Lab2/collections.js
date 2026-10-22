const contactsArray = [
    { name: 'Lando Noris', phone: '+380445554153' },
    { name: 'Ivan Panasenko', phone: '+380123456789' },
    { name: 'Max Verstapen', phone: '+380276111356' }
];

function findPhoneByName(name){
    for(let i of contactsArray){
        if(i.name === name) return i.phone;
    }
    return "Not found";
}

console.log(`Max Verstapen phone: ${findPhoneByName('Max Verstapen')}`);
console.log(`Lando Noris phone: ${findPhoneByName('Lando Noris')}`);
console.log(`Ivan Panasenko phone: ${findPhoneByName('Ivan Panasenko')}`);
console.log(`No name phone: ${findPhoneByName('No name')}`);

const hash = {
    'Max Verstapen': '+380276111356',
    'Ivan Panasenko': '+380123456789',
    'Lando Noris': '+380445554153'
};

function findPhoneByNameHash(name){
    return hash[name] || 'Not found';
}

console.log(`\nMax Verstapen phone: ${findPhoneByNameHash('Max Verstapen')}`);
console.log(`Lando Noris phone: ${findPhoneByNameHash('Lando Noris')}`);
console.log(`Ivan Panasenko phone: ${findPhoneByNameHash('Ivan Panasenko')}`);
console.log(`No name phone: ${findPhoneByName('No name')}`);

