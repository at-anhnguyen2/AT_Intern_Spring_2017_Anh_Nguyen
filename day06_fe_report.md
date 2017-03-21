<!-- # @Rule
The `@Rule` is a statement that provides CSS with instructions to perform or how to behave
```css
  @[keyword] (RULE);
```
Each statement beginning with an at sign `@`, follewed by an identifier and includes everything up to the next semi-colon `;`, or the next CSS block, whichever comes first.

## Essential Rules
### @import
This rule is inserted at the top of the file and instructs the stylesheet to request and include an external CSS. -->
# CSS
## Properly making initial styles render correctly across brower / platforms
- Firstly, learning about browsers and screen size requirements for each device.
- Secondly, systeming above requirements.
- Using `@media` Rule.

## Media CSS
This rule contains conditinal statements for targeting styles to specific screens. These statements can include screen sizes, which can be useful for adapting styles to devices.

**Syntax**
```css
  @media <media-query-list>{
    <group-rule-body>
  }
```
A `<media-query-list>` is composed of a optional media type or a number of media features.

**Ex**
```css
  @media screen{
    body { font-size: 13px }
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) and (-webkit-min-device-pixel-ratio: 1.0){
    body {
      line-height: 1.4;
      width: 100%;
    }
  }
```
## Font-face
This rule allows us to load custom fonts on a webpage. There are varying levels of support for custom fonts, but this rule accepts statements that create and serve those fonts. By allowing authors to provide their own fonts, `@font-face` eliminates the need to depend on the limited number of fonts users have installed on their computers.

**Syntax**
```css
  @font-face{
    font-family: "family-name";
    src: local('name-local'), url('string-url');
  }
```
**Ex**
```css
  @font-face {
    font-family: MyHelvetica;
    src: local("Helvetica Neue Bold"), url(MgOpenModernaBold.ttf);
    font-weight: bold;
  }
```

## CSS Box model
All HTML elements can be considered as boxes. In CSS, the term `box model` is used when talking about design and layout.

The CSS box model is essentially a box that wraps around every HTML element.

Its CSS properties:

- **Content**: The content of the box, where text and images appear
- **Padding**: Clears an area aroung the content. The padding is transparent.
- **Border**: A border that goes around the padding and content.
- **Margin**: Clears an area outside the border. The margin is transparent.

The box model allows us to add a border around the elements, and to specify the space between the elements.

**Ex**
```css
  .box{
    width: 320px;
    padding: 10px;
    border: 1px solid gray;
    margin: 20px;
  }
```
- Total element width = 382px = width + left padding + right padding + left border + right border + left margin + right margin
- Same with Total element height.

## Clear `float`
If an element is taller than the element containing it, and it is floated, it will overflow outside of its container.

Adding `over: auto;` to the containing element to fix this problem.

But, the best way to fix this problem is `clear: both;`. It is safe to use and the following code is used for most webpages.
```css
  .clear{
    clear: both;
  }
```

# SASS
## Working of SASS
Working of **SASS** is coupling smaller CSS files to a bigger CSS file. Just do on smaller CSS files, so the result will appear in bigger CSS file.
## Advantages when working with SAS
- Managing code is more effective, because the CSS was subdivided.
- Reusable: Can reuse attributes has been declared before.
- Define a general, but allowing transmit variable to change attribute that has been declared before.
## Write `pseudo-` in SASS
Using `@mixin`.

**Ex**
```scss
  @mixin button($border-color, $background){
    background: $background;
    border: 1px solid $border-color;
    color: #FFF;
    cursor: pointer;
    &:hover{
      background: #f3f3f3;
    };
  }
```
A SASS mixin can set all the different `pseudo-` classes and elements to style the color, size, effect, ...

## Rules to working with SASS
- **Nested**: Allowing CSS to be nested within one another. This is a great way to organize CSS and make it more readable.
  
  **Ex**
  ```scss
    #main p{
      color: blue;
      .redbox{
        background-color: red;
        color: #000;
      }
    }
  ```

- **Variable**: Allowing CSS to be created variable general for elements can use.
  
  **Syntax**
  ```scss
    $name: value;
  ```
  **Ex**
  ```scss
    $color-text: #F00;
    $color:(
      text: #333333,
      text-1: #F00
    );
  ```

- **Extend**: Allowing extend classes has been declared before.

  **Syntax**
  ```scss
    @extend .class
  ```
  **Ex**
  ```scss
    .button {
      @extend %sfb;
      @extend %padding;
      color: $color-text;
    }
    %sfb{
      background: #fff;
      border: 1px solid #f3f3f3;
    }
    %padding{
      padding: 20px;
    }
  ```

- **Functionalities**: Creating function having variables that transmitted for attrobutes can use.

  **Syntax**
  ```scss
    @mixin name(option){}
  ```
  `option` is variables

  **Ex**
  ```scss
    @mixin button($border-color, $background){
      background: $background;
      border: 1px solid $border-color;
      color: #FFF;
    }
  ```

# Mobile-first
`mobile-first` approaching in mordern web design is a neccesity.

Because:

- Screen size of Desktop and Mobile is different.
- Designing website on mobile, making sure website friendly with user.
- Helping user have good experience on the mobile.
