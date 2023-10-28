let calculatorValue = "";
let equalsPressed = false;
let displayElement = document.getElementById("display");

let taskList = [];
let historyContainerElement = document.getElementsByClassName("history-container")[0];
let showHistoryPanel = false;
let historyListElement = document.getElementsByClassName("history-list")[0];


function keyPressed (key) { 
    if(key === "="){ 
        equalsPressed = true
        addHistory(calculatorValue)
        calculatorValue = eval(calculatorValue);
    }
    else if(key === "C"){
        calculatorValue = "";
        removeHistory();
    }
    else{
        if(equalsPressed === true){
            calculatorValue = "";
            equalsPressed = false;
        }
        calculatorValue = calculatorValue + key
    }
    displayElement.innerHTML = calculatorValue;
}

function removeHistory() {
    historyListElement.innerHTML = ""
}

function addHistory (taskHistory) { 
    removeHistory()  
    taskList.push(taskHistory);
    for(let i = 0; i < taskList.length; i++) {
        let taskParagraph = document.createElement("p");
        taskParagraph.innerHTML = taskList[i];
        historyListElement.appendChild(taskParagraph);
    }
}

function toggleHistory() {
    showHistoryPanel = !showHistoryPanel;
    if(showHistoryPanel){
        historyContainerElement.style.top = 0;
    }
    else{
        historyContainerElement.style.top = "35%";

    }
}
