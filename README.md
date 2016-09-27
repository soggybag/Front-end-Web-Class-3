# Front-end Web: Lesson 3

JavaScript an introduction

## Class objectives

students will: 

- Assess your knowledge of JavaScript
- Write JavaScript practice syntax
- Use the console and console.log() for fun and profit
- Use getElementById(), value, innerHTML
- Build simple programs using basic code and events

## Schedule 

|   | Time |   | Activity   | Description |
|---|------|---|------------|-------------|
|1  | 5 min| 5 | TT         | What is JavaScript? Where does it live? | 
|2  |10 min|15 | I do, we do| console.log() strings and concatenation (+)|
|3  | 5 min|20 | TT         | The DOM document.getElementById() |
|4  |20 min|40 | I do, we do| JavaScript in action example timer, tip calculator |
|5  | 5 min|45 | TT         | JavaScript is weird with Strings and Numbers |
|6  |10 min|55 | I do, we do| Adding and removing class names, Drawer |
|7  |10 min|65 | Break      | Relax and plot your world take over |
|8  |10 min|55 | Challenge  | Hiding and showing content |

### 1 - What is JavaScript and where does it live? 

JavaScript is most often used as a language that scripts the browser. As such it:

- Lives in the front end and is executed locally
- Is not compiled
- Limited by what the browser 

Where does JavaScript live? You can write JavaScript in the `<script>` tag within an HTML page. Or, you can write 
JavaScript in external files using the .js extension and link to these files with the `<script src="file.js">` tag. 

### 2 - JavaScript in Action Demo

- JavaScript basic syntax
- Using the console and console.log(). 

#### Demo - console

`console.log("Hello World")`

### 3 - The DOM and ids

Use the id attribute to identify tags for JavaScript. Id names should be unique and only appear __once per page__. 

As a general rule of thumb always use class names for CSS, and id names for JavaScript. 

#### Demo - Using document.getElementById()

Get a reference to a DOM element by it's id name:

`document.getElementById("name")`

Add an event listener to an element by it's id name. In this case a click event: 

```
document.getElementById("click-me").addEventListener("click", function(event){
    console.log("Click!");
});
```

This would react to a click on this element: 

`<button id="click-me">Click me!</button>`

Get the value from an input: 

`document.getElementById("my-input").value`

`<input id="my-input" type="text">`

### 4 - Build a simple program tip calculator

Make a couple inputs one for the tip amount, and another for the bill. Make a button that retrieves the value from 
each input, and calculates the tip. Something like: 

`tip * amount / 100`

### 5 - JavaScript is the wild west when it comes to types

Here is what the internet says: 

> There are just six types in JavaScript: Object, Number, String, Boolean, Null, and Undefined. Objects include arrays,
> functions, and ordinary objects. Numbers may be integers or floating point or the special values NaN and Infinity . 
> Strings include the empty string, "" .

You can assign any type to any variable, no matter what the previouse type was. In other words: 

```
var x = 10;

...
x = "WTF!";
```

is perfectly okay, have fun!

#### - JavaScript is weird with Strings and Numbers

Concatenate strings with the +. There is only one type of number. When combining numbers and strings with + it’s all 
string: 2 + “2” = “22”. 

Due to complicated computer related __mathiness__ decimal values in JS can sometimes come up with unexpected values. 
For example: 

`6.6 / 0.1 = 65.99999999999999`

What should you do? Nothing, until it becomes an issue, at that point you can use one of Math methods to help you out. 

Oh yeah and there are a few weird situations with =, ==, and +. Talk more about these later.

Is this good or bad? Depends on your perspective. At the end of the day it is what it is. Give in to JavaScript's loose 
typing it's fun and easy. On occasion you'll end up with odd errors, but other languages all have their own foibles. 

### 6 - Adding and removing class names

One of these easiest ways to make 'things' happen in the browser is by adding and removing class names. If you think 
about it this makes perfect sense because your CSS should describe the presentation, and styles are easily connected to 
class names. 

Find out if an element with the id name "thing" has the class "fancy-class".

`document.getElementById("thing").classList.contains("fancy-class")`

Remove the class "fancy-class" from th element with the id name "thing".

`document.getElementById("thing").classList.remove("fancy-class");`

Add the class "fancy-class" to the element with the id name "thing".

`document.getElementById("thing").classList.add("fancy-class");`

#### Demo Make a drawer

The "drawer" is element that can be revealed or hidden by tapping on another element like a title or button. 

### 7 - Challenge: Hiding and showing content

Using the ideas from the previous example make a fruit picker. Here are a couple new ideas. 

Make things mpove with CSS with the transition property. With the transition property in place any changes to properties 
of the element will take place over the time set. 

```
#drawer {
  transition: 1s;
}
```

Make a select element. This is a simple drop down menu thing. 

```
<select id="fruit-select">
    <option disabled selected value> -- select an option -- </option>
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
    <option value="cantaloupe">Cantaloupe</option>
</select>
```

Set up a listener for a "change" in the menu. 

```
document.getElementById("fruit-select").addEventListener("change", function(){
  
}
```

Get the value of the currently selected item in the menu: 

```
document.getElementById("fruit-select").value;
```

Go crazy

## Projects and Challenges

Everything gets a better reception when it looks good, style your tip calculator. Pay attention to the font styles. 
Think about the input field, you set the font, you can also set the border and padding (padding sets the space). 

## Resources

- [http://eloquentjavascript.net](http://eloquentjavascript.net)






