import { CONSTANTS } from "./constants.js"
const inputField=document.querySelector('#input textarea#text');
const opButtons=document.querySelectorAll('.operator')
function load(){
    fetch(CONSTANTS.serverUrl)
    .then(res=>res.json())
    .then(data=>{
        inputField.innerHTML=data.json.map(r=>r.statement).join("\n");
        fetch('ui.mustache')
        .then((response) => response.text())
        .then((template) => {
            const rendered = Mustache.render(template, data);
            document.getElementById('output').innerHTML = rendered; 
        })
    })
}
function save(e){
    if(e.code!=="Enter"&&e.code!="NumpadEnter") return;
    let start=inputField.value.lastIndexOf("\n",inputField.value.length-1)+1;
    let end=inputField.value.length;
    let data={statement:inputField.value.substr(start,end),start:start, end:end};
    fetch(CONSTANTS.serverUrl,{
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({data})
    })
    .then(res=>res.json())
    .then(data=>{
        fetch('ui.mustache')
        .then((response) => response.text())
        .then((template) => {
            const rendered = Mustache.render(template, data);
            document.getElementById('output').innerHTML = rendered; 
        })
    })

}
function insertspecialcharacter(e){
    inputField.value+=e.target.value;
    inputField.focus();
}
opButtons.forEach(btn=>{
    btn.addEventListener("click",insertspecialcharacter)
})
inputField.addEventListener("keydown",save)
window.addEventListener("DOMContentLoaded",load)
