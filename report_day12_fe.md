# Typescript + ES6
## Typescript
TypeScript is a compilers allow type ES6 code and it transpile to ES5

One of the big benefits is to enable IDEs to provide a richer environment for spotting common errors as you type the code.

Secondly, ES6 is the current version of JavaScript, but it not support in most browsers. Consequently, using Typescript to transpile JavaScript into ES5 to run in most browsers.
## Install Typescript
Install the Typescript transpiler using npm:
```
$ npm install -g typescript
```
## Compile Typescript files
Then use `tsc` to manually compile a Typescript source file into ES5
```
  $tsc --watch *.ts *.js
```
## Object Oriented terms are supported by TypeScript
TypeScript is object oriented JavaScript. TypeScript supports object-oriented programming features like classes, interfaces, etc. 

- A class in terms of OOP is a blueprint for creating objects. A class encapsulates data for the object. Typescript gives built in support for this concept called class. JavaScript ES5 or earlier didn’t support classes. Typescript gets this feature from ES6.

**Example**
```js
  class Person{
    name: string;
    birth_year: number;
    constructor(name: string = '', birth_year: number = 0){
      this.name = name;
      this.birth_year = birth_year;
    }
    show(){
      console.log("My name is "this.name);
    }
  }
```

- An interface is a TypeScript artifact. A interface is a way to define a contract on a function with respect to the arguments and their type. Along with functions, an interface can also be used with a Class as well to define custom types.

**Example**
```js
  interface Show{
    name: string;
  }
  let s: Show = {
    name: 'Anh Nguyen';
  }
``` 

## Class Inheritance
A class inherits from another class using the `extends` keyword. Child classes inherit all properties and methods except constructors from the parent class.

**Example**
```js
  class Shape{
    constructor(public width: number = 0, public heigth: number = 0){}
    area(){
      var a = this.width * this.heigth;
      document.write(`area: ${a}<br>`);
    }

    circuit(){
      var c = (this.width + this.heigth) * 2;
      document.write(`circuit: ${c}<br>`);
    }
  }
  class Square extends Shape{
    constructor(public a: number){
      super(a,a);
    }
    hello(){
      document.write('Area<br>');
    } 
  }
  var square = new Square(4);
  square.hello();
  square.area();
  square.circuit();
```

## ES6
### Example about `Template Literals`
Html string previously:
```js
  var $name = 'Anh Nguyen';
  var $html = '<div>' + $name + '</div>';
```
With template strings:
```js
  var $name = 'Anh Nguyen';
  var $html = `<div>${$name}</div>`;
```

### Example about `Multi-line strings`
A new line in JavaScript string:
```js
  var str = "My name is Anh \
  \nI am a Front-End member";
```
With TypeScript:
```js
  var str = `My name is Anh
  I am a Front-End member`;
```

### Example about `Arrow Function`
With JavaScript:
```js
  array.forEach(function(x){
    x += 1;
    console.log(x);
  });
```
With TypeScript:
```js
  array.forEach((x) => {
    x += 1;
    console.log(x);
  });
```
### Example about `For...of`
With JavaScript:
```js
  for (var i = 0, len = $arrayMember.length; i < len; i++) {
    $str += "<li>" + $arrayMember[i] + "</li>";
  }
```
With TypeScript:
```js
  for (var $value of $arrayMember){
    $str += `<li> ${$value} </li>`;
  }
```

### Example about `Default parameters`
```js
  class Person{
    name: string;
    birth_year: number;
    constructor(name: string = '', birth_year: number = 0){
      this.name = name;
      this.birth_year = birth_year;
    }
    show(){
      console.log("My name is "this.name);
    }
  }
```