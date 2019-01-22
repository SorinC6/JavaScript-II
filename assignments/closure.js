// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const greet= "Hey I'm Sorin";
console.log(greet);

function parent(){
    //debugger;
    const parentHello="Hey I'm a parent";
    console.log(parentHello);
    function grandParent(parentHello){
        //debugger;
        const grandParentHello="Hey I'm a grandParent";
        console.log(parentHello);
        console.log(grandParentHello);
        function grandgrandParent(){
            //debugger;
            const grandgrandParentHello="Hey I'm a grandgrandParent";
            console.log(grandgrandParentHello);
            console.log(grandParentHello);
            console.log(parentHello)
        }
        grandgrandParent();
    }
    grandParent();
}
parent();

console.log('==========================================')
// ==== Challenge 2: Create a counter function ====
const counter = () => {
    let x=0;
  // Return a function that when invoked increments and returns a counter variable.
  return function newCounter(){
      return x++;
  }
};
const newCounter = counter();
 newCounter(); // 1
// newCounter(); // 2



/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
