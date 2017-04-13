# Angular 2

## Component

### Event binding
**Event binding** is way to pass data from `template` into a `Component`. That mean is the `Event binding` inform **Angular** to call a method of `Component` when user interactive with the element that contain this `Event binding`.

**Event binding** supports to link methods of `Component` directly to DOM events. Don't need custom Angular binding such as `ng-click`, `ng-change`,... just need `(click)`, `(change)` or any event you want.

**For example**
```js
  @Component({
    selector: 'show-name',
    template: `
      <h1>Hello!</h1>
      <button type="button" (click)="show()">Submit</button>
    `,
  })
  export class ShowNameComponent{
    show(){
      console.log("My name is Anh Nguyen");
    }
  }
```
When user click onto the *Submit* button, `Event binding` inform Angular to call *show()* method of *ShowNameComponent*

### Data Binding
**Data binding** in **Angular** is the way to synchronize data between the `Component` and the `Template`. 

**Data binding** allows to create links between the `Component` and the `Template`, include:

- Property Binding: passing data from `Component` to `Template`.
- Event Binding: passing data from `Template` to `Component`.

When having any change at the `Component`, data will reflected immediately to the `Template` and vice-versa.

**Syntax**
```js
  [property_name] = "expression"
  (event_name) = "expression"
  [(target)] = "expression"
```

**For example**
```js
  @Component({
    selector: 'show-name',
    template: `
      <h1>Hello!</h1>
      <input type="text" [(ngModel)]="firstname" name="input">
      <input type="text" [(ngModel)]="lastname" name="input">
      <button (click)="show()">Submit</button>
      <p>My full name is {{fullname}}</p>
    `,
  })
  export class ShowNameComponent{
    fullname: string;
    firstname: string;
    lastname: string;
    constructor(){
      this.fullname = "";
      this.firstname = "";
      this.lastname = "";
    }
    show(){
      this.fullname = "My full name is " + this.firstname + " " + this.lastname;
    }
  }
```

### Event Emitter
**Event Emitter** is an **Angular 2** abstraction and its only purpose is to emit events in `Components`. Specifically, **Event Emitter** creates the `Event` to interact between `Child Component` and `Parent Component`.

#### How does it work?
Firstly, importing `EventEmitter` and `Output` in `Child Component`
```js
  import { Component, EventEmitter, Input, Output } from '@angular/core';
```
And creating `@Output` with a event name.
```js
  @Output() result: EventEmitter<any> = new EventEmitter<any>();
```
With `<any>` is type of parameter.

The second, calling `Child Component` in the `Template` of `Parent Component` with event covered in `()` and receive parameter `$event`.
```js
  template: `
    <h1> Template in Parent Component</h1>
    <information (result)="showName($event)"></information>
  `,
```
The last, Creating a function in the `Child Component` to emit to `Parent Component`.
```js
  show(){
    this.result.emit(this.value);
  }
```

When any activitive happen in `Child Component, `EventEmitter` will activate this event attach value, the value maybe primitive type or complex types such as object, array,...

The `Parent Component` listen this emit and execute its function.
```js
  showName(str: string){
    this.name = "Hi! Welcome " + str;
  }
```
The input parameter of `str: string` is `$event`

**For example**

`Parent Component`
```js
  import { Component } from '@angular/core';

  @Component({
    selector: 'hello-world',
    template: `
      <h1> {{say}} </h1>
      <p>Parent: {{name}} </p>
      <information [value]="say" (result)="showName($event)"></information>
    `,
  })
  export class HelloWorldComponent  { 
    say: string;
    name: string;
    constructor(){
      this.say = "Hello!";
      this.name = "";
    }
    showName(str: string){
      this.name = "Hi! Welcome " + str;
    }
  }
```
`Child Component`
```js
  import { Component, EventEmitter, Input, Output } from '@angular/core';

  @Component({
    selector: 'information',
    template: `
      <input type="text" [(ngModel)]="input_name" name="input">
      <button (click)="show()">Submit</button>
    `,
  })
  export class InformationComponent{
    @Input() value: string = "";
    @Output() result: EventEmitter<any> = new EventEmitter<any>();
    input_name: string;
    constructor(){
      this.input_name = '';
    }

    show(){
      this.value = this.input_name;
      this.result.emit(this.value);
    }
  }
```

### Lifecycle hooks
**Lifecycle hooks** is interfaces in the Angular core library.

Angular calls **lifecycle hook** methods on directives and components as it creates, changes, and destroys them.

Each interface has a single hook method whose name is the interface name prefixed with `ng`. For example, the OnInit interface has a hook method named `ngOnInit()`

No directive or component will implement all of the lifecycle hooks and some of the hooks only make sense for components. Angular only calls a directive/component hook method if it is defined.

### ElementRef in Angular
**ElementRef in Angular** provides access to the underlying native element (DOM element).

**Example**
```js
  import { Directive, ElementRef } from '@angular/core';
  @Component({
    selector: 'hello-world',
    template: `
      <h1> Hello! </h1>
      <p id="name">Anh Nguyen<p>
    `,
  })
  export class HelloWorld {
      constructor(el: ElementRef) {
        el.nativeElement.select("#name")
        el.nativeElement.style.color = 'red';
      }
  }
```
