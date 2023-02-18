// set and initialize variables
let toDoListDisplay = false;
let toDoStatusDisplay = false;
let localStorageSupport = localStorageSupportFunction();
let localStorageSupportMessage = null;
let toDoArray = [];
let todoArrayLength = 0;

// functions
// check if browser supports local storage (footnote - reference 1)
function localStorageSupportFunction(){
    let uid = new Date;
	let storage;
	let result;
	try {
		(storage = window.localStorage).setItem(uid, uid);
		result = storage.getItem(uid) == uid;
        storage.removeItem(uid);
        this.localStorageSupportMessage = `The browserstack - ${navigator.userAgent} supports localstorage`;
		return result && storage;
	} catch (exception) {
        this.localStorageSupportMessage = `The browserstack - ${navigator.userAgent} doesn't supports localstorage`;
        return false
    }
}

// function fetch tasks from localstorage
function fetchLocalStorageTasks(){
    console.info('fetchLocalStorageTasks');
    let existinglocalStorageData = window.localStorage.getItem("uniqueTaksIDjinkya");
    if(existinglocalStorageData){
        console.log(JSON.parse(existinglocalStorageData));
        todoArrayLength+= JSON.parse(existinglocalStorageData).length;
        JSON.parse(existinglocalStorageData).forEach((e)=>{
            toDoArray.push(e);
        })
        //todoArrayLength
        this.appendToDOM(toDoArray);
    }else{
        window.localStorage.setItem("uniqueTaksIDjinkya",JSON.stringify([{id: 1, date: String(new Date()).slice(0,15), name:'Conquer the world', status: 'To Do'}]));
        let existinglocalStorageData = window.localStorage.getItem("uniqueTaksIDjinkya");
        todoArrayLength+= JSON.parse(existinglocalStorageData).length;
        JSON.parse(existinglocalStorageData).forEach((e)=>{
            toDoArray.push(e);
        })
        this.appendToDOM(JSON.parse(existinglocalStorageData));
    }
}

// function add todoArray to DOM
function appendToDOM(values){
    console.info('appending toDo Array to DOM');
    values.map((current, index, arr)=>{
        let row = document.createElement("tr"); // Task List row
        let td1 = document.createElement("td"); // sr. no
        let td1val = document.createTextNode(current["id"]);
        td1.appendChild(td1val);
        let td11 = document.createElement("td");
        let td11val = document.createTextNode(current["date"]);
        td11.appendChild(td11val);
        let td2 = document.createElement("td"); // name
        let td2val = document.createTextNode(current["name"]);
        td2.appendChild(td2val);
        let td3 = document.createElement("td"); // status
        let td3val = document.createTextNode(current["status"]);
        td3.appendChild(td3val);
        let td4 = document.createElement("td"); // actions
        let td4button1 = document.createElement("button");
        let td4button2 = document.createElement("button");
        let td4button3 = document.createElement("button");
        let td4button4 = document.createElement("button");
        td4button1.setAttribute("class", "button buttonGreen");
        td4button1.setAttribute("onclick", `actionToDo(${current["id"]})`);
        td4button2.setAttribute("class", "button buttonGray");
        td4button2.setAttribute("onclick", `actionInProgress(${current["id"]})`);
        td4button3.setAttribute("class", "button buttonGray");
        td4button3.setAttribute("onclick", `actionDone(${current["id"]})`);
        td4button4.setAttribute("class", "button buttonRed");
        td4button4.setAttribute("onclick", `deleteTodo(${current["id"]})`);
        let td4button1val = document.createTextNode("To Do");
        let td4button2val = document.createTextNode("In Progress");
        let td4button3val = document.createTextNode("Done");
        let td4button4val = document.createTextNode("Delete");
        td4button1.appendChild(td4button1val);
        td4button2.appendChild(td4button2val);
        td4button3.appendChild(td4button3val);
        td4button4.appendChild(td4button4val);
        td4.appendChild(td4button1);
        td4.appendChild(td4button2);
        td4.appendChild(td4button3);
        td4.appendChild(td4button4);
        row.appendChild(td1);
        row.appendChild(td11);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        row.setAttribute("id", `rowId${current["id"]}`);
        document.querySelector("#toDoListTable").appendChild(row);
    });
}

function addToDo(){
    console.info('addToDo function');
    let singleToDO = {id: todoArrayLength+1, date: String(new Date()).slice(0,15), name: document.querySelector("#todoinput").value, status: 'To Do'};
    toDoArray.push(singleToDO);
    console.info(toDoArray);
    todoArrayLength+=1;
    localStorage.setItem("uniqueTaksIDjinkya", JSON.stringify(toDoArray));
    this.appendToDOM([singleToDO]);
}

function deleteTodo(i){
    //console.log(toDoArray[i-1]);
    //console.info(document.querySelector(`#rowId${i}`));
    console.info(i);
    console.info(document.querySelector(`#toDoListTable`));
    document.querySelector(`#toDoListTable`).deleteRow(i);
    toDoArray.splice(i-1,1);
    window.localStorage.setItem("uniqueTaksIDjinkya",JSON.stringify(toDoArray));
    console.log(toDoArray);
}

function actionToDo(i){
    document.querySelector(`tr#rowId${i}`).children[4].children[0].setAttribute("class", "button buttonGreen");
    document.querySelector(`tr#rowId${i}`).children[4].children[1].setAttribute("class", "button buttonGray");
    document.querySelector(`tr#rowId${i}`).children[4].children[2].setAttribute("class", "button buttonGray");
}

function actionInProgress(i){
    document.querySelector(`tr#rowId${i}`).children[4].children[1].setAttribute("class", "button buttonGreen");
    document.querySelector(`tr#rowId${i}`).children[4].children[0].setAttribute("class", "button buttonGray");
    document.querySelector(`tr#rowId${i}`).children[4].children[2].setAttribute("class", "button buttonGray");
}
function actionDone(i){
    document.querySelector(`tr#rowId${i}`).children[4].children[2].setAttribute("class", "button buttonGreen");
    document.querySelector(`tr#rowId${i}`).children[4].children[0].setAttribute("class", "button buttonGray");
    document.querySelector(`tr#rowId${i}`).children[4].children[1].setAttribute("class", "button buttonGray");
}

// app initialization
function appInitialization(){
    console.info('app init');
    if(Boolean(localStorageSupport)===true){ this.fetchLocalStorageTasks() }
}

// app initiaze
window.onload = function(){
    console.info('window onload');
    this.appInitialization();
}

// logs
console.info(this.localStorageSupportMessage);



// reference
/**
 * 1. The browser localstorage support function - https://mathiasbynens.be/notes/localstorage-pattern 
 */