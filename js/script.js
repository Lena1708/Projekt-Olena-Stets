"use strict";
let todosArr = []
let temp = localStorage.getItem("savedTodos");

if (temp != null) {
    todosArr = JSON.parse(temp);
    for (let i = 0; i < todosArr.length; i++) {

        createInput(todosArr[i], i);

    }
}

function onButtonClick() {
    let elem = document.getElementById("elem");
    if (elem.value != "") {

        console.log(elem.value);
        todosArr.push(elem.value);
        console.log(todosArr);
        let json = JSON.stringify(todosArr);
        localStorage.setItem("savedTodos", json);

        createInput(elem.value);

    }
}

function createInput(x, i) {

    let checkboxWrapper = document.createElement("LI");
    let checkboxNode = document.createElement("INPUT");
    checkboxNode.setAttribute("type", "checkbox");
    let textnode = document.createTextNode(x);
    checkboxWrapper.appendChild(checkboxNode);
    checkboxWrapper.appendChild(textnode);
    document.getElementById("myList").appendChild(checkboxWrapper);

    let buttonDeleteNode = document.createElement("BUTTON");
    buttonDeleteNode.innerText = "Delete";
    buttonDeleteNode.className = "delete-todo";
    buttonDeleteNode.setAttribute("type", "button");
    checkboxWrapper.appendChild(buttonDeleteNode);

    buttonDeleteNode.addEventListener("click", function () {
        console.log(todosArr);
        todosArr.splice(i, 1);
        checkboxWrapper.remove();
        //console.log(i);
        console.log(todosArr);

    })

}




