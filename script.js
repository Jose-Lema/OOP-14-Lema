function Rectangle(name, width, height) {
    this.name = name,
    this.width = width,
    this.height = height;

    this.area = () => this.height * this.width;
}

const rect1 = new Rectangle('Rectangle 1', 12, 13);
console.log(rect1.area());

// String Literal
const strLit = 'Hello';
const strObj = new String('Hello');

console.log(strLit, typeof strLit);
console.log(strObj, typeof strObj);

// Boxing: Wrapping a primitive in an invisible object
console.log(strLit.toUpperCase());
console.log(strLit[0]);

// Unboxing: starting with an object and turning it into a literal
console.log(strObj.valueOf(), typeof strObj.valueOf());

console.log(strLit.constructor);
console.log(strObj.constructor);

console.log(strLit instanceof String);
console.log(strObj instanceof String);