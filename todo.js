const inputBox=document.getElementById('input-box');
const listContainer=document.getElementsByClassName('list-container');
const addTask=document.getElementById('add-task');

addTask.addEventListener('click',()=>{
    if(inputBox.value===''){
        alert(' Write something...!!!');
    }else{
        let li=document.createElement('li');
        li.innerHTML=inputBox.value;
        listContainer[0].appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
})

listContainer[0].addEventListener('click',function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer[0].innerHTML);
}

function showTask(){
    listContainer[0].innerHTML=localStorage.getItem("data");
}
showTask();