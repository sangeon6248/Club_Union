let taskInput = document.getElementById("task_input");
let addButton = document.getElementById("add_button");
let tabs = document.querySelectorAll(".task_tabs div")
let taskList = [];
let mode='all';
let filterList = [];
addButton.addEventListener("click", addTask);

for(let i = 1; i < tabs.length; i++){
    tabs[i].addEventListener("click", function(event){filter(event)})
}

function addTask(){
    let task ={
        id : randomIDGenerate(),
        taskContent : taskInput.value,
        isComplete : false
    }
    let inputBool = false;
    let inputValue = task.taskContent;
    let dupContent = false;
    for(let i = 1; i < inputValue.length; i++){
        if(inputValue.charAt(i) == " "){
            inputBool = true;
        }else{
            inputBool = false;
            break;
        }
    }
    if(taskList.length > 0){
        if(taskInput.value == ""){
            alert("최소 한글자 이상의 내용을 입력해주세요.")
        }else if(inputBool == true || inputValue == " "){
            alert("공백만 입력할 수 없습니다.")
        }else{
            for(let i = 0; i < taskList.length; i++){
                if(taskList[i].taskContent == inputValue){
                    dupContent = true;
                    break;
                }else{
                    dupContent = false;
                }
            }
            if (dupContent == true){
                alert("이미 리스트에 있는 내용입니다.");
            }else{
                taskList.push(task);
            }
        }
    }else if(taskInput.value == ""){
        alert("최소 한글자 이상의 내용을 입력해주세요.")
    }else if(inputBool == true || inputValue == " "){
        alert("공백만 입력할 수 없습니다.")
    }else{
        taskList.push(task);
    }
    console.log(taskList);
    taskInput.value = "";
    render();
}

function render(){
    let list=[];
    if(mode == 'all'){
        list = taskList;
    } else if (mode == 'notdone' || mode == 'done'){
        list = filterList;
    }

    let resultHtml = '';
    for(let i = 0; i < list.length; i++){
        if(list[i].isComplete == true){
            resultHtml += `
                <div class="task">
                    <div class="task_done">${list[i].taskContent}</div>
                    <div>
                        <button onclick="toggleComplete('${list[i].id}')">Check</button>
                        <button onclick="deleteTask('${list[i].id}')">Delete</button>
                    </div>
                </div>`
        }else{
            resultHtml += `
                <div class="task">
                    <div class="task_text">${list[i].taskContent}</div>
                    <div>
                        <button onclick="toggleComplete('${list[i].id}')">Check</button>
                        <button onclick="deleteTask('${list[i].id}')">Delete</button>
                    </div>
                </div>`
        }
    }
    document.getElementById("task_board").innerHTML = resultHtml;
}

function toggleComplete(id){
    console.log("id : ", id);
    for(let i = 0; i < taskList.length; i++){
        if(taskList[i].id == id){
            taskList[i].isComplete = !taskList[i].isComplete;;
            break;
        }
    }
    console.log(taskList);
    render();
}

function randomIDGenerate(){
    return Math.random().toString(36).substr(2, 16);
}

function deleteTask(id){
    for(let i = 0; i < taskList.length; i++){
        if(taskList[i].id == id){
            taskList.splice(i, 1);
            break;
        }
    }
    console.log(taskList);
    render();
}
function filter(event){
    mode = event.target.id;
    filterList = [];

    document.getElementById("under_line").style.width=
    event.target.offsetWidth+"px";

    document.getElementById("under_line").style.top=
    event.target.offsetTop+event.target.offsetHeight-4+"px";
    
    document.getElementById("under_line").style.left=
    event.target.offsetLeft+"px";

    if(mode == 'all'){
        render();
    }else if (mode == 'notdone'){
        for (let i = 0; i < taskList.length; i++){
            if(taskList[i].isComplete == false){
                filterList.push(taskList[i]);
            }
        }
        render();
    }else if (mode == 'done'){
        for (let i = 0; i < taskList.length; i++){
            if(taskList[i].isComplete == true){
                filterList.push(taskList[i])
            }
        }
        render();
    }
    console.log(filterList);
}