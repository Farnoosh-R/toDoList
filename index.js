document.getElementById("btn").addEventListener("click", toDoList);
let elList = document.getElementById("list");

let elOutputList1 = document.getElementById("outputList1");
let elOutputList2 = document.getElementById("outputList2");
let elOutputList3 = document.getElementById("outputList3");
let elOutputList4 = document.getElementById("outputList4");

let arrayList = [];
const arrayPriList = ['high', 'middle', 'low'];


// window.onload = function saveData() {
   
//     localStorage.setItem("toDoList", JSON.stringify(arrayList));
//     alert( localStorage.getItem('toDoList') );
//   };

function getCat(){
    let catEl = document.getElementById("cat");
    let catElText = 
    catEl.options[catEl.selectedIndex].text;
    return catElText;
}
function getPeriority(){
    let perEl = document.getElementById("periority");
    let perElText = 
    perEl.options[perEl.selectedIndex].value;
    return perElText;
}
function getPrintPriTitle(priValue){
    return arrayPriList[priValue - 1];
    
}

function sortObjectsByBoolean(arr) {
    arr.sort((a, b) => a.isDone - b.isDone);
    
}

function toDoList(){
    let id = uuid();
 
    let elOutputList = document.createElement('div');
    elOutputList.setAttribute('id', `divoutput_${id}`);
    let elDiv = document.createElement('div');
    elDiv.setAttribute('id', `div_${id}`);
    let elCat = document.createElement('label');
    elCat.setAttribute('id', `cat_${id}`);
    let elPer = document.createElement('label');
    elPer.setAttribute('id', `per_${id}`);
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
        priority: getPeriority(),
        index: 0,
        isDone: false,
        trash : false,
        id: id
    });
  
    
    elLabel.innerHTML  = elList.value;
    elCat.innerHTML = getCat();
    elPer.innerHTML = getPrintPriTitle(getPeriority());
    elDiv.appendChild(checkBox);
    elDiv.appendChild(elCat);
    elDiv.appendChild(elLabel);
    elDiv.appendChild(elPer);
    elDiv.appendChild(i);
    elOutputList.appendChild(elDiv);
    if (getCat() == 'خرید'){
        elOutputList1.appendChild(elOutputList);
    } else if (getCat() == 'پزشکی'){
        elOutputList2.appendChild(elOutputList);
    }else if (getCat() == 'وقت'){
        elOutputList3.appendChild(elOutputList);
    }else if (getCat() == 'برنامه در صف اجرا'){
        elOutputList4.appendChild(elOutputList);
    }

    if (getPeriority() == '1'){

        elPer.classList.add('per-h');
    }else if(getPeriority() == '2'){
        elPer.classList.add('per-m');
    }else if(getPeriority() == '3'){
        elPer.classList.add('per-l');
    }
    
    elList.value = '';

}
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

function trash(id){
    let e = document.getElementById(`divoutput_${id}`);
    let t = document.getElementById(`div_${id}`);
    
    let trashx = arrayList.filter(c => c.id === id)
    trashx[0].trash = true;
    e.removeChild(t);
    
}
function done(id){
    let e = document.getElementById(`divoutput_${id}`);
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
    sortObjectsByBoolean(arrayList);

    //e.innerHTML = "";
    
}


