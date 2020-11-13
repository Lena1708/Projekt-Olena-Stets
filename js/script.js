"use strict";
function onButtonClick() {       
    let elem = document.getElementById("elem");    
    if (elem.value!="") {         
        
        console.log(elem.value);     
        todosArr.push(elem.value);   
        console.log(todosArr);       
        let json = JSON.stringify(todosArr);    
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

let todosArr = []     

let temp = localStorage.getItem("savedTodos");    

if (temp != null) {    
    todosArr = JSON.parse(temp);     
    for (let i = 0; i < todosArr.length; i++) {   

        let checkboxWrapper = document.createElement("LI");    
        let checkboxNode = document.createElement("INPUT");   
        checkboxNode.setAttribute("type", "checkbox");         
        let textnode = document.createTextNode(todosArr[i]);    
        checkboxWrapper.appendChild(checkboxNode);              
        checkboxWrapper.appendChild(textnode);                  
        document.getElementById("myList").appendChild(checkboxWrapper);    
    }
 }









