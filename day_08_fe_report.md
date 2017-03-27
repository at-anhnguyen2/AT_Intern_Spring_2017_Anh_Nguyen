# HTML and JavaScript
## The difference between `null` and `undefined` variable
In JavaScript, `undefined` variable is a variable that declared but it is not assigned value.
```js
  var a;
  console.log(a); // => undefined
  console.log(typeof a); // => undefined
```
`null` variable is a special keyword denoting a null value. However, it is not the same as Null, NULL or any other variant.
```js
  var a = null;
  console.log(a); // => null
  console.log(typeof a); => object
```
`null` variable and `undefined` variable are considered two different types. While `undefined` is declared to be able to use for all types, `null` is considered to be a special object value.

## "use strict";
`"use strict";` used to check variables, JavaScripts code in **Strict mode**.

With **strict mode**, you can not use undeclared variables.

- In block, it is used to check variables in block.
- In Script, it is used to check all variables in script code.

**Ex**
```js
  "use strict"
  name = 'Anh Nguyen T.'; // Will cause an error
```
```js
  "user strict"
  setBirthday();

  function setBirthday() {
    birthday = '30/04/1992'; // Will cause an error
  }
```

**The advantages** using `"use strick";`
- Show variables that undeclared.
- Saving time when debuging.
- Making sure all variables declared.

**The disadvantages** using `"use strick";`
Using too more `"use strick";` will make script code expanded.

## DOM tree
**DOM** (Document Onbject Model), with it, JavaScript can assecc and change all the elements of an HTML document.

When a web page is loaded, the brower chreates a DOM of the page. The DOM is constructed as a tree also called **DOM tree**.

```html
  <!DOCTYPE html>
  <html>
  <head>
    <title>My HTML</title>
  </head>
  <body>
    <a href="#">Link</a>
    <h1>Text header</h1>
  </body>
  </html>
```
**DOM tree**
```mermaid
graph TD
  A[Document] --- B[Root element: <html>]
  B --- C[Element: <header>]
  B --- D[Element: <body>]
  C --- E[Element: <title>]
  E --- F[Text: "My HTML"]
  D --- G[Element: <a>]
  D --- H[Element: <h1>]
  G --- I[Attribute: "href"]
  G --- J[Text: "Link"]
  H --- K[Text: "Text Header"]
```
## The difference between `==` and `===`
`==` and `===` have a basic similarity between them is that they are both comparable and return true or false.

`==` used to compare value of two variables. That is the most common and most common way in most programming languages.

`===` used to compare not only value but also type of two variables.

**Ex**
```js
  var a = 5;
  var b = "5";
  console.log(a == b); // => true
  console.log(a === b); // => false
```

## `function foo() {}` and `var foo = function() {}`
`function foo() {}` is the most basic way to declare a function. Declared functions are not executed immediately. They are saved for later use, and will be executed later, when they are invoked.
```js
  function area(width, height) {
    return width * height;
  }
```
`var foo = function() {}` is a definition using an expression. A function expression can be stored in a variable.
```js
   var area = function (width, height) {
    return width * height;
  }
```
- It is a part of an executable statement.
- Function expression has been stored in a variable.
- Function is invoked by using name of variable.

## Storing a Javascript variable at client side
There are 2 way to store JavaScript variable at client side: **Cookie** and **Local Storage**

However, the best way is using **HTML Local Storage**

With `local storage`, web applications can store data locally within the user's browser.

Unlike cookies, the storage limit is far larger (at least 5MB) and information is never transferred to the server.

Local storage is per origin. All pages, from one origin, can store and access the same data.

**Ex**
```js
  //set value
   localStorage.setItem('todoData', this.innerHTML);
   
  //read value
   if ( localStorage.getItem('todoData') ) {
      edit.innerHTML = localStorage.getItem('todoData'); 
   }
```