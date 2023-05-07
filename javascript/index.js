// Example 1: Regular function
const user = {
    name: 'Alice',
    greet: function() {
      console.log('Hello, my name is ' + this.name);
    }
  };
  
  const greetFn = user.greet;
  greetFn();  // Output: Uncaught TypeError: Cannot read property 'name' of undefined
  
  // In this example, we define an object `user` with a `greet` method that uses the `this` keyword to refer to the `name` property of the `user` object. We then assign the `greet` method to a variable `greetFn`, which is called without any context. Since the `this` keyword is not bound to any object, calling `greetFn()` results in an error.
  
  // Example 2: Fat arrow function
  const user2 = {
    name: 'Bob',
    greet: () => {
      console.log('Hello, my name is ' + this.name);
    }
  };
  
  const greetFn2 = user2.greet;
  greetFn2();  // Output: Hello, my name is undefined
  
  // In this example, we define an object `user2` with a `greet` method that uses a fat arrow function to define the function. The `this` keyword inside the arrow function refers to the enclosing scope, which is the global object in this case, since the arrow function is defined outside of any object. When we assign the `greet` method to a variable `greetFn2` and call it without any context, it correctly prints out the string, but the value of `this.name` is `undefined`.
  
  // Example 3: Fat arrow function in a callback
  const numbers = [1, 2, 3, 4, 5];
  
  const doubledNumbers = numbers.map(num => num * 2);
  console.log(doubledNumbers);  // Output: [2, 4, 6, 8, 10]
  
  // In this example, we use the `map()` method of the `numbers` array to apply a function that doubles each element of the array. We pass a fat arrow function as the argument to `map()`, which takes a single parameter `num` and returns the result of `num * 2`. The fat arrow function works well in this case because it does not rely on the `this` keyword and can be easily expressed in a concise way.
  