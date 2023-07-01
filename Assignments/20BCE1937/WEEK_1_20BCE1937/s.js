// // About Console API -------->
// console.log('Hello World!!', 4 + 1, 2, "hello another")   // --> MOSTLY USED
// alert('Welcome to javascipt')   // alerts are not used much in current days
// document.write('hello java script')  // to write content in page (avoid this)
// console.warn('this is warning')  // in yellow color
// console.error('error occurred')  // in red color
// // console.clear()  // clears the console
// console.assert(4 == 6)  // if assert fails it will show error else nothing
// console.assert(4 == (6 - 2))

// All of the above opens the dailog box before loading the entore apfe                                                                                                                                        
// // Alert in JS
// alt = alert ("This is maessage")
// console.log (alt)    // return type os alert is undifined
// // // Prompt in JS 
// var nam  = prompt ("Enter Name : ", "Guest")   // takes/returns the deafault values as
// console.log (nam)
// let deletePost = confirm ("Do u really want to delete the post?")     // confirm returns the bolean value 
// if (deletePost) {
//     console.log ("post deleted")
// }
// else {
//     console.log ("post rescued")
// }


// var type1 = 12    // var -> variable declaration
// let type2 = 34    // let -> has limited scope
// const type3 = 12   // const -> constant value 

// // Variables ---------->
// var num1 = 23
// var num2 = 34
// var sum = num1 + num2 
// // console.log(sum)

// // Data types --------->
// // 2 types of datatypes 
// // 1. primitive: boolean, integer, string, undifined, null, symbol
// // 2. reference: arrays and objects

// //primitive
// var num = 23.34
// var string = 'i am string'
// var a = true
// var b = false
// var x  // by deafault the varaible is undifinrd
// var y = undefined
// var n = null

// // console.log(num, string, a, b, x, y, n)

// // reference
// var objects = {
//     siddh: 90.23,
//     supan: 89,
//     chaitya: 98.44
// }

// var arr = [1, 'siddh', 3, 5, 'r']

// // console.log(objects, arr)
// // console.log(arr[3])    // prints index 3 of array

// // Opreators ------------>
// // Arithmetic operator-->
// var a1 = 100
// var b1 = 10
// console.log("sum", a1+b1)
// console.log("difference", a1-b1)
// console.log("multiply", a1*b1)
// console.log("divide", a1/b1)

// // Assignment operator -->
// var c = a  
// console.log(c += a)  // c = c + a
// console.log(c -= b)
// console.log(c *= a)
// console.log(c /= a)

// // Comparision operator -->
// var c1 = 34
// var c2 = 56
// console.log(x == y)
// console.log(x >= y)
// console.log(x <= y)
// console.log(x > y)
// console.log(x < y)

// // Logical operator -->
// // and operator(&&)
// console.log(true && false)

// // or operator
// console.log(false || true)

// // not operator
// console.log(!false) 

// Functions ------------------------>

// WAY 1 -->
// function avg(num1, num2){
//     return (num1 + num2)/2
// }

// // WAY 2 -->
// avg2 = (num1, num2) => {
//     return (num1 + num2)/2
// }

// console.log(avg2(12,4))

// // conditional statements ------------------->

// age = 25  
// if (age > 38){
//     console.log('age is greater than 38')
// }
// else if (age > 26) {
//     console.log('age is greater than 18')
// }
// else{
//     console.log('u r kid')
// }

// const cups = 43
// switch (cups) {
//     case 23:
//         console.log ("value is 43")
//         break
//     case 43 :
//         console.log ("value is 44")
//         break
//     case 53:
//         console.log ("value is 56")
//         break
//     default :
//         console.log ("value not matched")
//         break
// }

// LOOPs  ------------>
// for loop 
// var arr = [1, 2, 3, 4, 5]
// for (var i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// for (element of arr) {
//     console.log (element)
// }

// // for-each loop
// arr.forEach(function(ele){
//     console.log(ele)
// })

// // while loop
// let j = 0
// while (j < 6){
//     console.log(`${j} is value`)
//     j++
// } 

// // do-while 
// let k=0
// do{
//     console.log(arr[k])
//     k++
// } while(k < arr.length)

// break and continue ----------->
// var arr = [1, 2, 3, 4, 5]
// //break -> breaks and stop loop
// for (var i = 0; i < arr.length; i++){
//     if (arr[i] == 3){
//         break;
//     }
//     console.log(arr[i])
// }

// // continue -> skip that iteration and  continue
// for (var i = 0; i < arr.length; i++){
//     if (arr[i] == 3){
//         continue;
//     } 
//     console.log(arr[i])
// }

// Array methods (expolre more on MDN reference)------------->
// let arr = [1, "siddh", true, null, "shah"]
// console.log(arr.length)             // returns arr length
// arr.push("tejaskumar"); console.log(arr)  // pushes the element at end 
// arr.pop(); console.log(arr)   // pops element form end
// arr.shift(); console.log(arr)   // removes element from start
// arr.unshift("tejaskumar"); console.log(arr)  // replace the first element
// console.log(arr.unshift("tejaskumar"))  // returns the length (BE CAREFULL)
// arr.toString(); console.log(arr)
// let names = new Array(23);
//         console.log(names.length);
//         names = names.sort();
//         names.push("this is pushed");
//         console.log(names);

// let arr2 = [1, 333, 5, 23, 7]
// arr2.sort(); console.log(arr2) 
// // sort -> converts each element in string and then sort dictionary wise

// String methods (expolre more on MDN reference)------------->
// let str = "welcome to javascript web development web course"
// console.log(str.length)
// console.log(str.indexOf("web"))  // returns the index of first letter from str (of 1st detected wrod only)
// console.log(str.lastIndexOf("web"))  // dectects for input from end of str
// console.log(str.slice(3, 9))   // gives the string from index 3 to index 8(n-1) 
// console.log(str.replace("web", "app")) // replace 1st occurrence only
// var sub = str.substring (1, 7)    // same as the slice
// var sub = str.substr (1, 7)     // again same as slicing
// var spacedStr = '  hey    therer   !!'
// console.log (spacedStr.trim())      // trims the string


// // DATE and it's method
// let today = new Date();
// console.log(today)
// console.log(today.getTime());   // time passed in seconds
// console.log(today.getFullYear());  // returns year
// console.log(today.getDay());   // day no. (sun mon ...)
// console.log(today.getHours());  // hour of the day
// console.log(today.getMinutes());  // minute 

// DOM manipulation  (explore MORE)-------------->
 
// let ele = document.getElementById('para1')  // it  gets the elemet by id
// console.log(ele)

// let eleClass = document.getElementsByClassName('container')  // gets all the element of class 
// console.log(eleClass)   

// eleClass[0].classList.add("bg-primary")   // adding new style class to ele 0 of class container  
// eleClass[0].classList.remove("bg-primary") // removes the class
// // eleClass[0].style.background = 'red'  // manipulation 

// console.log(eleClass[1].innerHTML)  // returns the inner html in class
// console.log(eleClass[1].innerText)  // returns the text content in class
 
// tn = document.getElementsByTagName('div')   // gets the elements by tag name
// console.log(tn)

// newEle = document.createElement('p')    // cerating the new element
// newEle.innerText = "Newly created element"   // adding text/content
// tn[0].appendChild(newEle)   // adding child in first div container

// newEle1 = document.createElement('b')   
// newEle1.innerText = "Replaced created element"   
// tn[0].replaceChild(newEle1, newEle)  // replace the (new, old)

// document methods -->
// console.log(document.location)
// console.log(document.title)
// console.log(document.URL)
// console.log(document.scripts)
// console.log(document.links)
// console.log(document.images)
// console.log(document.domain)

// Selecting using query  -->  
// sel = document.querySelector('.container')  // gives the first element of container
// console.log(sel)

// sel1 = document.querySelectorAll('.container')  // returns all the elements in container
// console.log(sel1)

// Events ---------->
// ID of the element is used to add the event listener**
// para1.addEventListener('click', function(){  // executed on clicking
//     para1.style.background = "cyan"
// })

// para2.addEventListener('mouseover',function(){  // executed when mouse comes over element
//     para2.style.background = "yellow"
// })

// para2.addEventListener('mouseout',function(){  // executed when mouse left element
//     para2.style.background = "green"
// })

// para2.addEventListener('mouseup',function(){  // executed when mouse over element and clicked
//     para2.style.background = "blue"
//     console.log("up executed")
// })

// para2.addEventListener('mousedown',function(){  // executed when mouse over element and clicked and kept pressed
//     para2.style.background = "cyan"
//     console.log("down executed")
// })

// None of them return the property of previous state after executing
// ALSO SEE drag event

// example -->
// let prevText = document.querySelectorAll('.container')[0].innerHTML
// para1.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[0].innerHTML = prevText
// })

// para1.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[0].innerHTML = "<b> We have clicked </b>"
// })

// SetTimeOut AND setInterval  ----------------->
// (function, time in ms)) -> arguments in both 

// changeBg = ()=>{
//     para1.style.background = "red"
//     para2.style.background = "blue"
//     console.log("fired")
// }

// changeBg2 = ()=>{
//     para2.style.background = "red"
//     para1.style.background = "blue"
//     console.log("fired")
// }

// // setTimeout and setInterval --------------------> 

// setTimeout(changeBg, 2000);
// setInterval(changeBg, 2000)
// setInterval(changeBg2, 2000)

// // use clearInterval(clr)/clearTimeout(clr) to stop setInterval/setTimeout

// // localStorage -------------->
// console.log(localStorage.clear())  // clears the localStorage
// console.log(localStorage)  // displays complete localStorage
// localStorage.setItem('1', 'siddh')  // insert the item in the localStorage
// localStorage.setItem('2', 'shah')
// console.log(localStorage)
// console.log(localStorage.getItem('2'))  // gets the element by id
// localStorage.removeItem('1')   // to remove item by id
// console.log(localStorage)  
// localStorage.clear()


// // JSON (learn more)---------------------->
// var obj = {
//     name : "siddh", 
//     reg : "20bce1937",
//     sub : "cse",
//     a : { 
//         name : "supan",
//         reg : "20BCE1857",
//         sub : "css"
//     }
// } 

// console.log(obj.reg)
// console.log(obj.a.name)
// console.log(typeof obj)
// console.log(obj)

// jso = JSON.stringify(obj)   // converting the object to string
// console.log(typeof jso)    // data type of varaible
// console.log(jso)
 
// parsed = JSON.parse(jso)   // converting the string to obj
// console.log(typeof parsed)
// console.log(parsed)