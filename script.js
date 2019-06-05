let data = document.getElementById('data');
let lsdata = document.getElementById('lsdata');
let input = document.getElementById('inp');
let button = document.getElementById('button');
let ls = document.getElementById('ls');
let clear = document.getElementById('clear');
let readls = document.getElementById('readls');
let lsmemory = document.getElementById('lsmemory');
let val = [];

lsdata.innerHTML = JSON.parse(localStorage.getItem('vals'));

button.addEventListener('click', () => {
    val.push(input.value);
    data.innerHTML = val;
})

ls.addEventListener('click', () => {  
    localStorage.setItem('vals', JSON.stringify(val));
})

readls.addEventListener('click', () => {  
    let storeditems = JSON.parse(localStorage.getItem('vals'));
    console.log(storeditems);
})


clear.addEventListener('click', () => {
    localStorage.clear();
    lsdata.innerHTML = "";
})

var _lsTotal = 0;
var _xLen;
var _x;

lsmemory.addEventListener('click', () => {
    for (_x in localStorage){ 
        if (!localStorage.hasOwnProperty(_x)){
            continue;
        } 
        
        _xLen = ((localStorage[_x].length + _x.length) * 2);
        _lsTotal += _xLen; 
        console.log(_x.substr(0, 50) + " = " + (_xLen/1024).toFixed(2) + " KB")
    };
    console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB");
})