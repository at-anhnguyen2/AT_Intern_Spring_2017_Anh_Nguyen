# FORM
**Form** is a place for communitication between clients and server.

Properties of **form**:
- Data link
- Data type
- Where data go to

Standard elements of **Form**:
-`Text field`: where to enter data.
-`Select box`: displays the standard data to select.
-`Check box`: displays options that can only be selected yes or no.
-`Radio button`: only selected one and only one option of all options showed.
-`Lable`: displays describes of form.
-`Button`: where to execute some function.

# CSS
**CSS** use to transform HTML to general form for homogeneous UI on all OS and all browser.

**CSS** make HTML file shorter and easy read it.

**CSS** can to create general style for elements which was the same.

## The Difference between classes and IDs in CSS
**Classes** use refers to specific objects with the same attributes. `Objects` on the same `Classes` are inherited from each other. The priority of `Class` is 10.

**IDs** use refers to more specific object and it only appear 1 times on HTML file. The priority of `IDs` is 100.

## FLOAT
**Float** is property used to move a object to a location other than the default location.

**Syntax**
```css
	float: value;
```
`value` is the location where wanted to move to.

Some `value`: `left`, `rigth`, etc.

## The Diference between `padding` and `margin`
The **margin** of a box: outside the boder, and content areas.

The **padding** of a box: inside the margin and border areas, and outside the content area.

## box-sizing
**box-sizing** use to changce width and height of element.

```css
	box-sizing: border-box
```
it use to resetup width and height of element after margin and padding.

## z-index
**z-inder** use to setup the stack order on one position.

which have greater z-index number will on top.

which have lower z-index number will on bottom

Default z-index is 0.

z-inder is only active with position property as the same time.

**Syntax:**
```css
	z-index: giá trị;
```