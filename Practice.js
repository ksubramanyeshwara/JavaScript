const original = { a: 1, b: { c: 2 } };
console.log(original);

// Deep copy
const deepCopy = JSON.parse(JSON.stringify(original));
console.log(deepCopy);

// Modify the original object
original.b.c = 3;
console.log(original);
console.log(deepCopy);
// The deep copy remains unchanged, while the original object has been modified. This demonstrates that the deep copy is a completely independent object, not just a reference to the original object.

// let's modify the deep copy and see what happens to the original object
deepCopy.b.c = 4;
console.log(original);
console.log(deepCopy);
// As you can see, modifying the deep copy does not affect the original object. This further confirms that the deep copy is a completely independent object.