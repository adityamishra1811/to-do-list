const inputBox=document.getElementById("input-box")
const listContainer=document.getElementById("list-container")

function addTask(){
    if(inputBox.value===''){
        alert("You must write something!")
    }else{
        let li=document.createElement("li")
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement('span')
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    inputBox.value="";
   saveData();// when we will add the new data it will save the updated content
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked").//it will be enable or disable the webPage based on cundition
        saveData();//
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();//it is for if we delede the data the it will save new data
    }
},false )

function saveData() {
    localStorage.setItem("data",listContainer.innerHTML) // we can use this when we cll getIteam data
}

function showTask() { // it is for if we open the website again we will show same data
    listContainer.innerHTML=localStorage.getItem("data")
    
}
showTask();


//window.localStorage.removeItem('data');




// const inputBox=document.getElementById("input-box")
// const listContainer=document.getElementById("list-container")

// function addTask(){
//     if(inputBox.value===''){
//         alert("You must write something!")
//     }else{
//         let li=document.createElement("li")
//         li.innerHTML=inputBox.value;
//         listContainer.appendChild(li);
//     }
//     inputBox.value="";
// }