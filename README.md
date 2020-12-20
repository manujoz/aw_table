# AW-TABLE

Component for `aw_polymer_3` that creates a stylish table with various functionalities in a very simple way.

## Install

```npm i aw_table```

## Use

Inside the `aw-table` component you have to write a normal html table to which you can add the following features that will be shown below.

This will create a stylish table with added features saving you a lot of code to write.

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Test page</title>
</head>
<body>
  <aw-table unresolved>
    <table>
      <thead>
        <tr>
          <th>Position</th>
          <th>Name</th>
          <th>Rating</th>
          <th>Details</th>
          <th>Car</th>
          <th>Fruit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2</td>
          <td>Jonathan Bampletiem</td>
          <td>2000</td>
          <td>Details for Jonathan</td>
          <td>Aston Martin</td>
          <td>Watermelon</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Anthony Smith</td>
          <td>2452</td>
          <td>Details for Anthony</td>
          <td>Ferrari</td>
          <td>Strawberry</td>
        </tr>
        <tr>
          <td>3</td>
          <td>David Rajhan Dallara</td>
          <td>3600</td>
          <td>Details for David</td>
          <td>Porsche 911rsr</td>
          <td>Grape</td>
        </tr>
      </tbody>
    </table>
	</aw-table>
    
	<script src="/node_modules/aw_webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
	<script type="module" src="/node_modules/aw_polymer_3/polymer/polymer-element.js"></script>
	<script type="module" async src="/node_modules/aw_table/aw-table.js"></script>
</body>
</html>
```

## Properties

- sticky => `boolean`
- sortbycolumn => `number`
- sortdir => `asc`|`desc`
- mark-row => `boolean`
- mark-column => `boolean`
- row-effect => `boolean`

### sticky

Sets the `<thead>` header fixed.

```html
<aw-table unresolved sticky></aw-table>
```

### sortbycolumn

Sort the table by the column given when rendering the table

```html
<aw-table unresolved sortbycolumn="0"></aw-table>
```

### sortdir

The address in which the table will be sorted if it has the `sortbycolumn` property

```html
<aw-table unresolved sortbycolumn="1" sortdir="desc"></aw-table>
```

### mark-row

Mark even rows with a background color to better differentiate the rows

```html
<aw-table unresolved mark-row></aw-table>
```

### mark-column

Mark even columns with a background color to better differentiate the columns

```html
<aw-table unresolved smark-column></aw-table>
```

### row-effect

Activate the effect in the rows when you hover the mouse over it

```html
<aw-table unresolved row-effect></aw-table>
```

## Features

### Sortable columns

To make a column sortable, you just have to add the attribute `sortable` to the header cell of the table by which you want it to be sorted.

```html
<aw-table unresolved mark-row row-effect>
  <table>
    <thead>
      <tr>
        <th sortable dir="asc">Position</th>
        <th sortable dir="asc">Name</th>
        <th sortable>Rating</th>
        <th>Details</th>
        <th sortable dir="asc">Car</th>
        <th sortable dir="asc">Fruit</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2</td>
        <td>Jonathan Bampletiem</td>
        <td>2000</td>
        <td>Details for Jonathan</td>
        <td>Aston Martin</td>
        <td>Watermelon</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Anthony Smith</td>
        <td>2452</td>
        <td>Details for Anthony</td>
        <td>Ferrari</td>
        <td>Strawberry</td>
      </tr>
      <tr>
        <td>3</td>
        <td>David Rajhan Dallara</td>
        <td>3600</td>
        <td>Details for David</td>
        <td>Porsche 911rsr</td>
        <td>Grape</td>
      </tr>
    </tbody>
  </table>
</aw-table>
```

### Nowraped text

In addition, the `aw-table` has one more interesting feature, you can add the` nowrap` attribute to any cell, so that the text cannot exceed the cell or create a new row, being this trimmed by ...

```html
<aw-table unresolved>
  <table>
    <thead>
      <tr>
        <th width="80px">Position</th>
        <th width="150px">Name</th>
        <th>Rating</th>
        <th>Details</th>
        <th>Car</th>
        <th>Fruit</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2</td>
        <td nowrap>Jonathan Bampletiem</td>
        <td>2000</td>
        <td>Details for Jonathan</td>
        <td>Aston Martin</td>
        <td>Watermelon</td>
      </tr>
      <tr>
        <td>1</td>
        <td nowrap>Anthony Smith</td>
        <td>2452</td>
        <td>Details for Anthony</td>
        <td>Ferrari</td>
        <td>Strawberry</td>
      </tr>
      <tr>
        <td>3</td>
        <td nowrap>David Rajhan Dallara</td>
        <td>3600</td>
        <td>Details for David</td>
        <td>Porsche 911rsr</td>
        <td>Grape</td>
      </tr>
    </tbody>
  </table>
</aw-table>
```

## Javascript

Puedes además ordenar la tabla y acceder a sus elementos por javascript de forma muy sencilla

```html
<aw-table unresolved>
  <table>
    <thead>
      <tr>
        <th width="80px">Position</th>
        <th width="150px">Name</th>
        <th>Rating</th>
        <th>Details</th>
        <th>Car</th>
        <th>Fruit</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2</td>
        <td nowrap>Jonathan Bampletiem</td>
        <td>2000</td>
        <td>Details for Jonathan</td>
        <td>Aston Martin</td>
        <td>Watermelon</td>
      </tr>
      <tr>
        <td>1</td>
        <td nowrap>Anthony Smith</td>
        <td>2452</td>
        <td>Details for Anthony</td>
        <td>Ferrari</td>
        <td>Strawberry</td>
      </tr>
      <tr>
        <td>3</td>
        <td nowrap>David Rajhan Dallara</td>
        <td>3600</td>
        <td>Details for David</td>
        <td>Porsche 911rsr</td>
        <td>Grape</td>
      </tr>
    </tbody>
  </table>
</aw-table>
<script>
const component = document.querySelector( "aw-table" );
console.log( component.table );
console.log( component.head );
console.log( component.body );
console.log( component.footer );

setTimeout(() => {
    component.sort( 1, "desc" );
}, 1500);
</script>
```

See an example on
<a href="https://codesandbox.io/s/nifty-pine-06v5o?file=/public/index.html" targe="_blank">sandbox</a>

## Styling

To style the table you can use these CSS variables. In the following table you can see the variables with their default values.

```css
--aw-table-border-collapse: collapse;
--aw-table-spacing: 0;
--aw-table-font-family: Arial;

--aw-table-header-background-color: transparent;
--aw-table-header-border: none;
--aw-table-header-border-top: --aw-table-header-border | none;
--aw-table-header-border-right: --aw-table-header-border | none;
--aw-table-header-border-bottom: --aw-table-header-border | solid 1px #ddd;
--aw-table-header-border-left: --aw-table-header-border | none;
--aw-table-header-color: #888;
--aw-table-header-font-size: 14px;
--aw-table-header-font-weight: bold;
--aw-table-header-padding: 0.5em 0.5em 0.2em 0.5em;
--aw-table-header-first-padding: 0.5em 0.5em 0.2em 0;
--aw-table-header-text-align: left;

--aw-table-sortable-color-hover: #666;
--aw-table-sortale-icon-bottom: 0.2em;
--aw-table-sortable-icon-color: #999;
--aw-table-sortable-icon-size: 16px;
--aw-table-sortable-icon-right: 5px;

--aw-table-cell-border: none;
--aw-table-cell-border-top: --aw-table-cell-border | none;
--aw-table-cell-border-right: --aw-table-cell-border | none;
--aw-table-cell-border-bottom: --aw-table-cell-border | solid 1px #ddd;
--aw-table-cell-border-left: --aw-table-cell-border | none;
--aw-table-cell-color: #333;
--aw-table-cell-font-size: 16px;
--aw-table-cell-padding: 0.5em;
--aw-table-cell-first-padding: 0.5em 0.5em 0.2em 0;
--aw-table-row-mark-color: --aw-table-cell-color | #333;
--aw-table-row-mark-background-color: #f6f6f6;
--aw-table-column-mark-color: --aw-table-cell-color | #666;
--aw-table-column-mark-background-color: #f6f6f6;
--aw-table-cell-background-color-hover: #e6e6e6;
```

## Limitations:

Since the table is rendered in a `ShadowDom`, we have certain limitations if we introduce elements that are styled outside of this` ShadowDom`. In the case of the example below it will not work and the `spam` with the class that gives it the green color will not be reflected in the final result.

```html
<style>
  .spam {
    color: green;
  }
</style>
<aw-table unresolved>
  <table>
    <thead>
      <tr>
        <th>Position</th>
        <th>Name</th>
        <th>Rating</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2</td>
        <td><span class="spam">Jonathan Bampletiem</span></td>
        <td>2000</td>
      </tr>
      <tr>
        <td>1</td>
        <td><span class="spam">Anthony Smith</span></td>
        <td>2452</td>
      </tr>
      <tr>
        <td>3</td>
        <td><span class="spam">David Rajhan Dallara</span></td>
        <td>3600</td>
      </tr>
    </tbody>
  </table>
</aw-table>
```

To solve the previous problem we can introduce a patch that will solve it, although it is not the correct way to work with web composts, we can follow the following example to solve the problem.

```html
<aw-table unresolved>
  <table>
    <style>
      .spam {
        color: green;
      }
    </style>
    <thead>
      <tr>
        <th>Position</th>
        <th>Name</th>
        <th>Rating</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2</td>
        <td><span class="spam">Jonathan Bampletiem</span></td>
        <td>2000</td>
      </tr>
      <tr>
        <td>1</td>
        <td><span class="spam">Anthony Smith</span></td>
        <td>2452</td>
      </tr>
      <tr>
        <td>3</td>
        <td><span class="spam">David Rajhan Dallara</span></td>
        <td>3600</td>
      </tr>
    </tbody>
  </table>
</aw-table>
```

As we can see now in the example above we have introduced the `<style>` tag inside the `<table>` tag so that now those styles will also be loaded into the `ShadowDom`. It would also work if we entered a `<link rel ="stylesheet"/>`. **IMPORTANT**: This only works if we enter the styles right after the `<table>` tag.

### Trabajando correctamente

It should be noted that working with web components is intended to work together with other web components. This problem won't happen if you put another component inside it instead:

`components/user-name/user-name.js`
```javascript
import {
  PolymerElement,
  html,
} from "/node_modules/aw_polymer_3/polymer/polymer-element.js";

class UserName extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: inline-block;
          color: green;
        }
      </style>
      {{name}}
    `;
  }

  static get properties() {
    return {
      name: { type: String, value: "" },
    };
  }

  connectedCallback() {
    super.connectedCallback();

    //Resolvemos el componente

    this.removeAttribute("unresolved");
  }
}

window.customElements.define("user-name", UserName);
```

Now that we have created our component to enter the username, we just have to enter it in the table:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Test page</title>
</head>
<body>
  <aw-table unresolved>
    <table>
      <thead>
        <tr>
          <th>Position</th>
          <th>Name</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2</td>
          <td><user-name unresolved name="Jonathan Bampletiem" /></td>
          <td>2000</td>
        </tr>
        <tr>
          <td>1</td>
          <td><user-name unresolved name="Anthony Smith" /></td>
          <td>2452</td>
        </tr>
        <tr>
          <td>3</td>
          <td><user-name unresolved name="David Rajhan Dallara" /></td>
          <td>3600</td>
        </tr>
      </tbody>
    </table>
    </aw-table>
    
	<script src="/node_modules/aw_webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
	<script type="module" src="/node_modules/aw_polymer_3/polymer/polymer-element.js"></script>
	<script type="module" async src="/node_modules/aw_table/aw-table.js"></script>
	<script type="module" async src="/components/user-name/user-name.js"></script>
</body>
</html>
```

In this way we can take advantage of the full potential of web components offered by polymer 3 without the need to make bundles or introduce web components only in the parts of the web that we want to make use of.




