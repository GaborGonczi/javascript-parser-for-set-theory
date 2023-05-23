import { CONSTANTS } from "./constants.js"
const backbtn=document.getElementById("back");
const downloadbtn=document.getElementById("download");
const inputField=document.querySelector('#input textarea#text');
const opButtons=document.querySelectorAll('.operator');
const mode=document.querySelector('.switch input')
const loadfile=document.getElementById('load');
function getData(fetchFrom){
   return fetch(fetchFrom)
    .then(res=>res.json())
}
function getEncodedData(fetchFrom){
    return fetch(fetchFrom)
    .then(res=>res.blob())
}
function postData(data,postTo){
    return fetch(postTo,{
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({data})
    })
    .then(res=>res.json())
}
function postEncodedData(data,postTo){
    const blob=new Blob([data])
    return fetch(postTo,{
        method:'POST',
        headers:{
            'Content-Type': 'application/octet-stream'
        },
        body:blob
    }).then(res=>res.json())
}
function fillTemplate(data){
    return fetch('ui.mustache')
    .then((response) => response.text())
    .then((template) => {
        const rendered = Mustache.render(template, data);
        document.getElementById('output').innerHTML = rendered; 
    })
}
function loadUi(){
    const container=document.querySelector(".button-grid-container")
    container.style.setProperty('--grid-column','3')
    container.style.setProperty('--grid-row',(opButtons.length/window.getComputedStyle(container).getPropertyValue('--grid-column'))+1);
    opButtons.forEach(btn=>{
        btn.addEventListener("click",insertspecialcharacter)
    })
    inputField.addEventListener("keydown",save)
}
function load(){
    loadUi()
    getData(CONSTANTS.serverUrl).then(data=>{
        inputField.value=data.json.map(r=>r.statement).join("\n");
        fillTemplate(data)
    })
    
}
function save(e){
    if(e.code!=="Enter"&&e.code!="NumpadEnter") return;
    let cursorPos=inputField.selectionStart;
    let start=inputField.value.lastIndexOf("\n",cursorPos)+1;
    let end=inputField.value.indexOf("\n",start)!==-1?inputField.value.indexOf("\n",start):inputField.value.length;
    let noparse=mode.checked
    let data={statement:inputField.value.substr(start,end),start:start, end:end,noparse:noparse};
    postData(data,CONSTANTS.serverUrl).then(data=>{
        fillTemplate(data)
        inputField.value=data.json.map(r=>r.statement.trim()).join("\n");
        if(end===inputField.value.length) inputField.value+="\n";
    })

}
function insertspecialcharacter(e){
    inputField.value+=e.target.value;
    inputField.focus();
}

backbtn.addEventListener("click",e=>{
    window.location.href="./index.html";
})
function saveToFile(){
    getEncodedData(CONSTANTS.saveUrl).then(data=>{
        const blob= new Blob([data]);
        const url=URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download="saved.jpfm";
        link.click()

    })
}
downloadbtn.addEventListener("click",saveToFile);
function loadFromFile(){
    const fileToSend=loadfile.files[0];
    fileToSend.arrayBuffer().then(data=>{
        postEncodedData(data,CONSTANTS.loadUrl).then(data=>{
            fillTemplate(data)
            inputField.value=data.json.map(r=>r.statement.trim()).join("\n");
            inputField.value+="\n";
        })
    })
}
loadfile.addEventListener("change",loadFromFile)
window.addEventListener("DOMContentLoaded",load)
