const addTask = (taskDesc, container) => {
    var taskDiv = document.createElement("div");

    var descSpan = document.createElement("span");
    var desc = document.createTextNode(taskDesc.value);
    descSpan.appendChild(desc);

    var compBtn = document.createElement('button');
    compBtn.addEventListener("click", (e) => {
        completeTask(e)
    })
    var compText = document.createTextNode("Complete");
    compBtn.appendChild(compText);

    var rmvBtn = document.createElement('button');
    rmvBtn.addEventListener("click", (e) => {
        removeTask(e);
    })
    var rmvText = document.createTextNode("Remove");
    rmvBtn.appendChild(rmvText);

    taskDiv.appendChild(descSpan);
    taskDiv.appendChild(rmvBtn);
    taskDiv.appendChild(compBtn);
    taskDiv.classList.add('subtaskContainer');

    tasksContainer.appendChild(taskDiv);
}

const removeTask = (e) => {
    var parentEl = e.target.parentNode;
    parentEl.parentNode.removeChild(parentEl);

}
const completeTask = (e) => {
    var parentEl = e.target.parentNode;
    parentEl.childNodes[0].style = 'color:gray';
    parentEl.childNodes[1].disabled = true;
    parentEl.childNodes[2].disabled = true;
}

document.addEventListener("DOMContentLoaded", () => {

    const addBtn = document.getElementById('addBtn');
    const taskDesc = document.getElementById('taskDesc');
    const tasksContainer = document.getElementById('tasksContainer');

    addBtn.addEventListener("click", (e) => {
        if (taskDesc.value != '' && taskDesc.value.length > 3) {
            addTask(taskDesc, tasksContainer)
            taskDesc.value = '';
        } else {

        }
    });
});