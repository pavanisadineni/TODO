////method-1
let todo = [];
function addtodo(todos) {
    let isAlreadyPresent = todo.filter(each => each === todos).length > 0;

    if (isAlreadyPresent) {
        document.querySelector('.error').style.display = "block";
    } else {
        todo.push(todos);
        console.log(todo);
        document.querySelector('.error').style.display = "none";
    }
}
let completedArray=[];
function addtoComplete(param) {
    let isAlreadyPresent = completedArray.filter(each => each === param).length > 0;

    if (isAlreadyPresent) {
        document.querySelector('.error').style.display = "block";
    } else {
        completedArray.push(param);
        console.log(param);
        document.querySelector('.error').style.display = "none";
    }
}
if(localStorage.getItem('toDoList')){
    JSON.parse(localStorage.getItem('toDoList')).map(each => {
        addtodo(each)
    });
    addContent();
}
if(localStorage.getItem('completedToDoList')){
    JSON.parse(localStorage.getItem('completedToDoList')).map(each =>{
        addtoComplete(each);
    });
    completedArrayContent();
   
}
let formElement = document.querySelector('form');

formElement.addEventListener('submit', function (event) {
    event.preventDefault();
    if (document.querySelector("input").value.length > 6) {
        addtodo(document.querySelector('.input').value);

    } else {
        alert("Todo item length is too short");
    };
    addContent();
});
document.querySelector('.fa-plus-square').addEventListener('click', () => {

    event.preventDefault();
    if (document.querySelector("input").value.length < 7) {
        alert("Todo item length is too short");
    } else {
        addtodo(document.querySelector('.input').value);
    };
    addContent();
});
function addContent() {
    let formElement = document.querySelector('form');
    formElement.reset();
    document.querySelector("#myUL").innerHTML = todo.map(each => `<li>${each}<input type="button" class="done" value="Done" onclick='removeListItem()'></li>`).join("");
    localStorage.setItem('toDoList',JSON.stringify(todo));
}
function completedArrayContent(){
    document.querySelector("#my-complete-list").innerHTML = completedArray.map(each => `<li><input type="button" value="Add" class="add" onclick='addItem()'>${each}<input type="button"  value="Delete" class="remove" onclick='deleteItem()'></li>`).join("");
};
 

function deleteItem() {
    if (confirm('Are you sure you want to delete?')) {
        var listItem = event.target.parentElement;
        var ul = listItem.parentElement;      
        document.querySelector('.error').style.display = "none";
        ul.removeChild(listItem);
        let index = completedArray.indexOf(event.target.parentElement.textContent);
        document.querySelector('.error').style.display = "none";
        completedArray.splice(index, 1);
        localStorage.setItem('completedToDoList',JSON.stringify(completedArray));
    };
};

function addItem() {
    addtodo(event.target.parentElement.textContent);
    var listItem = event.target.parentElement;
    var ul = listItem.parentElement;    
    document.querySelector('.error').style.display = "none";
    ul.removeChild(listItem);
    console.log(event.target.parentElement.textContent);
    console.log(todo);
    let index = completedArray.indexOf(event.target.parentElement.textContent);
    document.querySelector('.error').style.display = "none";
    completedArray.splice(index, 1);
    addContent();
};
let completeArray = [];
function removeListItem() {
    document.querySelector('.error').style.display = "none";
    var listItem = event.target.parentElement;
    console.log(listItem);
    var ul = listItem.parentElement;       
    ul.removeChild(listItem);
    completedArray.push(event.target.parentElement.textContent);
    let index = todo.indexOf(event.target.parentElement.textContent);
    todo.splice(index, 1);
    console.log(completeArray);
    localStorage.setItem('toDoList', JSON.stringify(todo));
    localStorage.setItem('completedToDoList',JSON.stringify(completedArray));
    completedArrayContent();
 };
/////method-2
//let todo = [];
//function addtodo(todos) {
//    let isAlreadyPresent = todo.filter(each => each === todos).length > 0;
//
//    if (isAlreadyPresent) {
//        document.querySelector('.error').style.display = "block";
//    } else {
//        todo.unshift(todos);
//        console.log(todo);
//        document.querySelector('.error').style.display = "none";
//    }
//}
//let completedArray=[];
//function addtoComplete(param) {
//    let isAlreadyPresent = completedArray.filter(each => each === param).length > 0;
//
//    if (isAlreadyPresent) {
//        document.querySelector('.error').style.display = "block";
//    } else {
//        completedArray.unshift(param);
//        console.log(param);
//        document.querySelector('.error').style.display = "none";
//    }
//}
//
//function addContent() {
//    formElement.reset();
//    document.querySelector("#myUL").innerHTML = todo.map(each => `<li>${each}<input type="button" class="done" value="Done" ></li>`).join("");
//    localStorage.setItem('toDoList',JSON.stringify(todo));
//    
//};
//
//function doneContent(){
//        let completedItem = completedArray.map(each => `<li><input class="add" type="button" value="Add">${each}<input class="remove" type="button" value="Remove"></li>`).join('');
//        document.querySelector('#my-complete-list').innerHTML = completedItem;
//}
//
//document.querySelector('.fa-plus-square').addEventListener('click', () => {
//
//    event.preventDefault();
//    if (document.querySelector("input").value.length < 7) {
//        alert("Todo item length is too short");
//    } else {
//        addtodo(document.querySelector('.input').value);
//    };
//    addContent();
//});
//
//let formElement = document.querySelector('form');
//formElement.addEventListener('submit', function (event) {
//    event.preventDefault();
//    if (document.querySelector("input").value.length > 6) {
//        addtodo(document.querySelector('.input').value);
//
//    } else {
//        alert("Todo item length is too short");
//    };
//    addContent();
//});
//
//
//document.querySelector('.wrapper').addEventListener('click',(event)=>{
//    if(event.target.className == 'done'){
//        document.querySelector('.error').style.display = "none";
//        var listItem = event.target.parentElement;
//        console.log(listItem);
//        var ul = listItem.parentElement;
//        ul.removeChild(listItem);
//        completedArray.unshift(event.target.parentElement.textContent);
//        let index = todo.indexOf(event.target.parentElement.textContent);
//        todo.splice(index, 1);
//        console.log(completedArray);
//        localStorage.setItem('toDoList',JSON.stringify(todo));
//        localStorage.setItem('completedToDo',JSON.stringify(completedArray));
//        doneContent();
//    }
//    else if(event.target.className == 'add'){
//        addtodo(event.target.parentElement.textContent);
//        var listItem = event.target.parentElement;
//        var ul = listItem.parentElement;
//        document.querySelector('.error').style.display = "none";
//        ul.removeChild(listItem);
//        console.log(event.target.parentElement.textContent);
//        console.log(todo);
//        let index = completedArray.indexOf(event.target.parentElement.textContent);
//        document.querySelector('.error').style.display = "none";
//        completedArray.splice(index, 1);
//        addContent();
//        localStorage.setItem('toDoList',JSON.stringify(todo));
//        localStorage.setItem('completedToDo',JSON.stringify(completedArray));
//    }
//    else if(event.target.className == 'remove'){
//        if (confirm('Are you sure you want to delete?')) {
//        var listItem = event.target.parentElement;
//        var ul = listItem.parentElement;
//        document.querySelector('.error').style.display = "none";
//        ul.removeChild(listItem);
//        let index = completedArray.indexOf(event.target.parentElement.textContent);
//        document.querySelector('.error').style.display = "none";
//        completedArray.splice(index, 1);
//        localStorage.setItem('completedToDo',JSON.stringify(completedArray));
//    }
//    }});
//
//if(localStorage.getItem('toDoList')){
//    let localStorageToDoList = JSON.parse(localStorage.getItem('toDoList'));
//    localStorageToDoList.map(each => {
//        addtodo(each);
//    });
//    addContent();
//}
//if(localStorage.getItem('completedToDo')){
//    let localStorageToDoList = JSON.parse(localStorage.getItem('completedToDo'));
//    localStorageToDoList.map(each => {
//        addtoComplete(each);
//    });
//    doneContent();
//}
//    