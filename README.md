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

|   | Time |   | Activity | Description |
|---|------|---|----------|-------------|
|1  | 5 min| 5 | TT         | What is JavaScript? Where does it live? | 
|2  |10 min|15 | I do, we do| console.log() strings and concatenation (+)|
|3  | 5 min|20 | TT         | The DOM document.getElementById() |
|4  |20 min|40 | I do, we do| JavaScript in action example timer, tip calculator |
|5  | 5 min|45 | TT         | JavaScript is weird with Strings and Numbers |
|5  |10 min|55 |            |          |

### 1 - What is JavaScript and where does it live? 

JavaScript is most often used as a language that scripts the browser. As such it:

- Lives in the front end and is executed locally
- Is not compiled
- Limited by what the browser 

Where does JavaScript live? You can write JavaScript in the <script> tag within an HTML page. Or, you can write JavaScript in external files using the .js extension and link to these files with the <script src=”file.js”> tag. 

### 2 - JavaScript in Action Demo

- JavaScript basic syntax
- Using the console and console.log(). 

Example 1

### 3 - The DOM and ids

Using document.getElementById()

### 4 - Build a simple program tip calculator

### 5 - JavaScript is the wild west when it comes to types

Here is what the internet says: 

> There are just six types in JavaScript: Object, Number, String, Boolean, Null, and Undefined. Objects include arrays,
> functions, and ordinary objects. Numbers may be integers or floating point or the special values NaN and Infinity . 
> Strings include the empty string, "" .

You can assign any type to any variable, no matter what the previouse type was. 

#### - JavaScript is weird with Strings and Numbers

Concatenate strings with the +. There is only one type of number. When combining numbers and strings with + it’s all 
string: 2 + “2” = “22”. 

Due to complicated computer relted mathiness decimal values in JS can sometimes come up with unexpected values. 
For example: 

`6.6 / 0.1 = 65.99999999999999`

Oh yeah and there are a few weird situations with =, ==, and +. Talk more about these later.

Is this good or bad? Depends on your perspective. At the end of the day it is what it is. Give in to JavaScript's loose 
typing it's fun and easy. On occasion you'll end up with odd errors, but other languages all have their own foibles. 

## Projects and Challenges

Everything gets a better reception when it looks good, style your tip calculator. Pay attention to the font styles. Think about the input field, you set the font, you can also set the border and padding (padding sets the space). 

## Resources

- [http://eloquentjavascript.net](http://eloquentjavascript.net)






