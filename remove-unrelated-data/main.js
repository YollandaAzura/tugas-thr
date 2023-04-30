function removeUnrelated(object, key){
    delete object[key];
    return object;
}

const object1 = { name: 'Edo', age: 20, address: 'Jakarta', hobbies: ['coding', 'reading'] };
const object2 = { name: 'Edo', age: 20, address: 'Jakarta', hobbies: ['coding', 'reading'] };
const object3 = { name: 'Edo', age: 20, address: 'Jakarta', hobbies: ['coding', 'reading'] };

console.log(removeUnrelated(object1, 'address')); // Output: { name: 'Edo', age: 20, hobbies: ['coding', 'reading'] }
console.log(removeUnrelated(object2, 'hobbies')); // Output: { name: 'Edo', age: 20, address: 'Jakarta' }
console.log(removeUnrelated(object3, 'name')); // Output: { age: 20, address: 'Jakarta', hobbies: ['coding', 'reading'] }
