# HTML
`form` is used to create HTML form expression for users.

`form` is used to transfer data to the server.

`form` is not used to control the layout.

## The required attribute in `form` is `action`

In `form`, an action parameter is required.
```html
	<form action="#"></form>
```
- `form` can contain `input` element such as `text`, `checkbox`, `radio-button`, `button`,...
- `form` can also contain `select`, `textarea`, `fieldset`, `legend` and `lable`.
- Inside the `form` can also contain other tag.
```html
	<form action="#">
		<ul>
			<li>Họ tên: <input type="text" size="30" /></li>
			<li>Email: <input type="text" size="30" /></li>
			<li>Ngày sinh: <input type="text" size="10" /></li>
		</ul>
		<p><input type="submit" value="Gửi" /></p>
	</form>
```

#CSS

## The difference between inline and inline-block
### The similarity
`inline` and `inline-block` elements will be in the same row as the elements next to them.

### The difference
- `inline` elements do not have two css properties `width` and `height`, but the width and height of them are fixed to the size of the content contained within that element. Defining the values for both width and height attributes of the `inline` elements will not work.
- `inline-block` elements will be displayed in a block and have CSS properties `width` `height` so that we can customize the value. The default value for the two attributes is 100%. This means that they will have width and height dimensions equal to the size of the parent element that contains them.
```css
	.inline {
    display: inline;
    width: 100px;/*do not work*/
    height: 100px;/*do not work*/
    font-size: 50px;
	}
	.block {
    display: block;
    width: 100px;
    height: 100px;
	}
```
## The difference between a `relative`, `fixed`, `absolute` and `static` positioned element

### Static position
```css
	position: static;
```
This is a defaul position of all HTML element. The element will be place in its original position, or in other words, it is arranged in the normal flow of the page.

**Ex**
```html
	<a href="#">Link 1</a>
	<a href="#">Link 2</a>
	<a href="#">Link 3</a>
``
The first `a` tag will appear first, followed by the second `a` tag and the third `a` tag.

And this position type is not affected by the `top`, `right`, `bottom` and `right` attributes.

### Fixed position
```css
	position: fixed;
```
The element will be placed in a position relative to the browser window. Use the `top`, `bottom`, `left`, `right` attributes to locate the element.

**Ex**
```css
	position: fixed;
	top: 100px;
	right: 100px;
```
The element will be 100 pixels away from the top edge of the browser window. Same with right edge. The element stays fixed even when you scroll the page up and down, left or right.

### Relative position
```css
	position: relative;
```
The element will be placed in a position relative to itself. Adding `top`, `bottom`, `left`, `right` to change the position of the element.

### Absolute position
Elements whose position is absolute are positioned relative to thier parent element. Parent element having a different `static position`. 

If do not specify what the parent element, `html` is the parent element. 

Elements having absolute position is also not part of the normal flow of the page.

**Ex**
```html
	<div class ="a">
		<div class  ="b"></div>
	</div>
	<div class ="c"></div>
```
```css
	.a{
		position: relative;
	}
	.b{
		position: absolute;
		top: 0;
		right: 0;
	}
	.c{
		position: absolute;
		left: 0;
		bottom: 0;
	}
```
Block `b` will be in the top-right corner of block `a`
Block `c` will be in the bottom-left corner of `html` 

## The difference between a pseudo-class and a pseudo-element

- `pseudo-class` and `pseudo-element` are used to add special effects to some selectors. Both pseudo need not use JavaScript or any Scripting language to create these effects.
- `pseudo-class` is used to add special effects to element selected.
- `pseudo-element` is used to add special effects to text content of element selected.

**Ex**
```css
	p:first-letter { font-size: 5em; }
    p.normal:first-letter { font-size: 10px; }
    div.change-color{ background: red; }
    div.change-color:hover{ background: blue; }
```
```html
	<p class="normal">Uppering the first letter</p>
	<div class=change-color></div>
```

## The difference between `visibility:hidden` and `display:none`
- `visibility:hidden`: The element using `visibility` attribute with `hiden` value will not be seen. That mean, Content of the element will not be showed but space of element still stay.
- `display:none`: The element using `display` attribute with `none` value will not be display. That mean, Both content and space of element wil not be displayed.

**Ex**
```html
	<p>Line 1</p>
	<p class="visibility-hidden">Line 2</p>
	<p>Line 3</p>
	<p class="display-none">Line 4</p>
	<p>Line 5</p>
```
```css
	.visibility-hidden{
		visibility: hidden;
	}
	.display-none{
		display: none;
	}
```
**Result**
```
	Line 1

	Line 3
	Line 5
```