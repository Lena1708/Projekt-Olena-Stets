"use strict";
let todosArr = []
let temp = localStorage.getItem("savedTodos");

if (temp != null) {
    todosArr = JSON.parse(temp);
    drawTodos();
}

function onServerButtonClick() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000', false);
    xhr.send();
    if (xhr.status != 200) {
        alert( xhr.status + ': ' + xhr.statusText );
    } else {
        let newTodo = {
            todoText: xhr.responseText,
            miniTodoTextArr: [],
        }
        todosArr.push(newTodo);
        drawMainTodo(newTodo);

        let json = JSON.stringify(todosArr);
        localStorage.setItem("savedTodos", json);
    }
}

function onButtonClick() {
    let mainInput = document.getElementById("mainInput");
    if (mainInput.value != "") {

        console.log(mainInput.value);
        let todoObj = {
            todoText: mainInput.value,
            miniTodoTextArr: [],
        };
        todosArr.push(todoObj);
        console.log(todosArr);
        let json = JSON.stringify(todosArr);
        localStorage.setItem("savedTodos", json);
        drawTodos();
    }
}

function drawMainTodo(todoElement, i) {
    let checkboxWrapper = document.createElement("LI");
    let checkboxNode = document.createElement("INPUT");
    checkboxNode.setAttribute("type", "checkbox");
    let textnode = document.createTextNode(todoElement.todoText);

    checkboxWrapper.appendChild(checkboxNode);
    checkboxWrapper.appendChild(textnode);
    document.getElementById("myList").appendChild(checkboxWrapper);

    let ulNode = document.createElement("ul");
    let brNode = document.createElement("br");

    function drawMiniTodo(miniTodo, miniIndex) {
        let miniElementWrapper = document.createElement("LI");
        let textnode = document.createTextNode(miniTodo);
        miniElementWrapper.appendChild(textnode);

        let buttondeleteMiniTodoNode = document.createElement("BUTTON");
        buttondeleteMiniTodoNode.innerText = "Delete Mini Todo";
        buttondeleteMiniTodoNode.className = "delete-mini-todo";
        buttondeleteMiniTodoNode.setAttribute("type", "button");
        miniElementWrapper.appendChild(buttondeleteMiniTodoNode);

        buttondeleteMiniTodoNode.addEventListener("click", function () {
            todoElement.miniTodoTextArr.splice(miniIndex, 1);

            let json = JSON.stringify(todosArr);
            localStorage.setItem("savedTodos", json);
            miniElementWrapper.remove();
    
            console.log(todosArr);
        });

        ulNode.appendChild(miniElementWrapper);
    }

    let buttonDeleteNode = document.createElement("BUTTON");
    buttonDeleteNode.innerText = "Delete";
    buttonDeleteNode.className = "delete-todo";
    buttonDeleteNode.setAttribute("type", "button");
    checkboxWrapper.appendChild(buttonDeleteNode);

    let buttonMiniTodoNode = document.createElement("BUTTON");
    buttonMiniTodoNode.innerText = "Add Mini Todo";
    buttonMiniTodoNode.className = "add-mini-todo";
    buttonMiniTodoNode.setAttribute("type", "button");
    checkboxWrapper.appendChild(buttonMiniTodoNode);

    buttonDeleteNode.addEventListener("click", function () {
        todosArr.splice(i, 1);

        let json = JSON.stringify(todosArr);
        localStorage.setItem("savedTodos", json);

        console.log(todosArr);
        drawTodos();
    })

    buttonMiniTodoNode.addEventListener("click", function () {
        let brNode = document.createElement("br");
        checkboxWrapper.appendChild(brNode);

        let miniTodoInputNode = document.createElement("INPUT");
        miniTodoInputNode.setAttribute("type", "text");
        checkboxWrapper.appendChild(miniTodoInputNode);

        buttonMiniTodoNode.setAttribute("disabled", "true");

        let buttonSaveMiniTodoNode = document.createElement("BUTTON");
        buttonSaveMiniTodoNode.innerText = "Save Mini Todo";
        buttonSaveMiniTodoNode.className = "save-mini-todo";
        buttonSaveMiniTodoNode.setAttribute("type", "button");
        checkboxWrapper.appendChild(buttonSaveMiniTodoNode);

        buttonSaveMiniTodoNode.addEventListener("click", function () {
            let miniInputValue = miniTodoInputNode.value;
            
            if (miniInputValue != "") {
                todoElement.miniTodoTextArr.push(miniInputValue);
                drawMiniTodo(miniInputValue, todoElement.miniTodoTextArr.length - 1);
                let json = JSON.stringify(todosArr);
                localStorage.setItem("savedTodos", json);
            }
        });
    });

    
    checkboxWrapper.appendChild(brNode);
    checkboxWrapper.appendChild(ulNode);

    for (let i = 0; i < todoElement.miniTodoTextArr.length; i++) {
        drawMiniTodo(todoElement.miniTodoTextArr[i], i);
    }
}


function drawTodos() {
    let listWrap = document.getElementById("myList");
    listWrap.innerHTML = '';
    for (let i = 0; i < todosArr.length; i++) {
        drawMainTodo(todosArr[i], i);
    }
}