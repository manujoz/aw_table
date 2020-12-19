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
					<td>Jonathan Bampletiem</div></td>
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

Para hacer que una columna se ordenable tan solo tienes que añadir el atributo `sortable` a la celda de la cabecera de la tabla por la que quieras que se ordene.

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
                <td>Jonathan Bampletiem</div></td>
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
                <td nowrap>Jonathan Bampletiem</div></td>
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
                <td nowrap>Jonathan Bampletiem</div></td>
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

## Sandobox

<a href="https://codesandbox.io/s/nifty-pine-06v5o?file=/public/index.html" targe="_blank">View on sandbox</a>

<iframe src="https://codesandbox.io/embed/nifty-pine-06v5o?fontsize=14&hidenavigation=1&module=%2Fpublic%2Findex.html&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="nifty-pine-06v5o"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>




