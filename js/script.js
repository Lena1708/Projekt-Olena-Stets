"use strict";


function onButtonClick() {
    let elem = document.getElementById("elem");
    if (elem.value!="") {        
        
        console.log(elem.value);
        list.push(elem.value);
        console.log(list);
        let json = JSON.stringify(list);
        localStorage.setItem("savedTodos", json);


        let checkboxWrapper = document.createElement("LI");
        let checkboxNode = document.createElement("INPUT");
        checkboxNode.setAttribute("type", "checkbox");
        let textnode = document.createTextNode(elem.value);
        checkboxWrapper.appendChild(checkboxNode);
        checkboxWrapper.appendChild(textnode);
        document.getElementById("myList").appendChild(checkboxWrapper);
    }
}
let list = []

let temp = localStorage.getItem("savedTodos");

if (temp != null) {
    list = JSON.parse(temp);
    for (let i = 0; i < list.length; i++) {
        //console.log(list[i])

        let checkboxWrapper = document.createElement("LI");
        let checkboxNode = document.createElement("INPUT");
        checkboxNode.setAttribute("type", "checkbox");
        let textnode = document.createTextNode(list[i]);
        checkboxWrapper.appendChild(checkboxNode);
        checkboxWrapper.appendChild(textnode);
        document.getElementById("myList").appendChild(checkboxWrapper);
    }
 }









