/**
 * Local Scope
*/
function scopeLocal() {
  let localVar = 20; // It have a local scope and can only be accessed within the function
  console.log(localVar);
}
scopeLocal();
console.log(localVar); // ReferenceError: localVar is not defined

/**
 * nested fucntion
*/
function scopeLocal1() {
    let localVar1 = "scope level 1";
    function scopeLocal2() {
        let localVar2 = "scope level 2";
        console.log(localVar1); // scope level 1 - executed because localVar1 is in global scope for scopeLocal2 function
    }
     console.log(localVar2); // ReferenceError: localVar2 is not defined because localVar2 have local scope of scopeLocal2 function
    scopeLocal2();
}
scopeLocal1();