document.getElementById("btn").addEventListener("click", toDoList);
let elList = document.getElementById("list");
let elOutputList = document.getElementById("outputList");

let arrayList = [];


function getCat(){
    let catEl = document.getElementById("cat");
    let catElText = 
    catEl.options[catEl.selectedIndex].text;
    return catElText;
}

function toDoList(){
    let id = uuid();
 

    let elDiv = document.createElement('div');
    elDiv.setAttribute('id', `div_${id}`);
    let elCat = document.createElement('label');
    elCat.setAttribute('id', `cat_${id}`);
    let elLabel = document.createElement('label');
    elLabel.setAttribute('id', `label_${id}`);
    elLabel.setAttribute('for', `checkbox_${id}`);
    elLabel.classList.add('labelItem');
    let i = document.createElement('i');
    i.classList.add("fa", "fa-trash-o");
    i.addEventListener('click', ()=> trash(id));
    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute('id', `checkbox_${id}`);
    checkBox.classList.add('checkbox');
    checkBox.addEventListener('change', ()=> done(id));
    
    

    arrayList.push({
        title: elList.value,
        cat: getCat(),
        priority: 0,
        index: 0,
        isDone: false,
        trash : false,
        id: id
    });
  
    
    elLabel.innerHTML  = elList.value;
    elCat.innerHTML = getCat();
    elDiv.appendChild(checkBox);
    elDiv.appendChild(elCat);
    elDiv.appendChild(elLabel);
    elDiv.appendChild(i);
    elOutputList.appendChild(elDiv);
    elList.value = '';

}
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

function trash(id){
    let t = document.getElementById(`div_${id}`);
    let trashx = arrayList.filter(c => c.id === id)
    trashx[0].trash = true;
    elOutputList.removeChild(t);
}
function done(id){
    let d = document.getElementById(`div_${id}`);
    let c = document.getElementById(`checkbox_${id}`);
    let donex = arrayList.filter(c => c.id === id)

    if (c.checked){
        donex[0].isDone = true;
        d.classList.add('done');

        
    }else{
        donex[0].isDone = false;
        d.classList.remove('done');
    }
    console.log('hi');
}
