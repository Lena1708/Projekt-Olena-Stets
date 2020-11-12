"use strict";
function onButtonClick() {       //  creating a function which is working when clicking on a button
    let elem = document.getElementById("elem");    //  create variable with id
    if (elem.value!="") {         // checking that value which we add to input is not empty bcs input doesn't work when empty
        
        console.log(elem.value);     // Array is empty no value have beem added
        todosArr.push(elem.value);   // adding new elements to Array
        console.log(todosArr);       // checkin which elements are inside of our Array
        let json = JSON.stringify(todosArr);    // changing Array into string
        localStorage.setItem("savedTodos", json);  //   saving todo string to local storage

        let checkboxWrapper = document.createElement("LI");   //  creating Li element
        let checkboxNode = document.createElement("INPUT");   // creating Input element
        checkboxNode.setAttribute("type", "checkbox");        // setting attribute type to checkbox
        let textnode = document.createTextNode(elem.value);   // creating text element
        checkboxWrapper.appendChild(checkboxNode);            //  making checkbox to child of Li
        checkboxWrapper.appendChild(textnode);                // making text to child of Li
        document.getElementById("myList").appendChild(checkboxWrapper);     // add Li to Ul using id myList
    }
}
// Executes when website loads 
let todosArr = []     

let temp = localStorage.getItem("savedTodos");    //variable with text value from savedTodos

if (temp != null) {    //checking that variable temp != null bcs saved Todos can be empty
    todosArr = JSON.parse(temp);     // parsing String to Array
    for (let i = 0; i < todosArr.length; i++) {    //   showing checkboxes on page load if todos are in memory

        let checkboxWrapper = document.createElement("LI");    //  creating Li element
        let checkboxNode = document.createElement("INPUT");    // creating Input element
        checkboxNode.setAttribute("type", "checkbox");         // setting attribute type to checkbox
        let textnode = document.createTextNode(todosArr[i]);    // creating text element
        checkboxWrapper.appendChild(checkboxNode);              //  making checkbox to child of Li
        checkboxWrapper.appendChild(textnode);                  // making text to child of Li
        document.getElementById("myList").appendChild(checkboxWrapper);    // add Li to Ul using id myList
    }
 }









