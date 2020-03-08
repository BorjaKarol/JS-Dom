// console.dir(document);
// document.all[10].textContent = 'Test';
 
//getElementById
var headerTitle = document.getElementById('header-title');
headerTitle.style.webkitTextStroke='2px black'
headerTitle.style.fontSize='50px';

// getElementsByClassName
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);

// //getElementsByClassName Individually
// console.log(items[2]);
// items[2].textContent = 'Test';
// // items[2].style.fontWeight = 'Bold';
// // items[2].style.backgroundColor = '#ffff64';

// for(var i = 0; i < items.length; i++){
//     items[i].style.backgroundColor='#ffff64'
// }

//getElementsByTagName
// var li = document.getElementsByTagName('li');
// console.log(li);

// //getElementsByTagName Individually
// console.log(li[2]);
// li[2].textContent = 'Test';
// // items[2].style.fontWeight = 'Bold';
// // items[2].style.backgroundColor = '#ffff64';

// for(var i = 0; i < li.length; i++){
//     li[i].style.backgroundColor='#ffff64'
// }

//QUERYSELECTOR
var header = document.querySelector('#main-header');

header.style.backgroundColor = '#ffff64'
header.style.borderBottom = 'solid 2px #343a40';

//QUERYSELECTORALL
// var odd = document.querySelectorAll('li:nth-child(odd)');

// for(var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor='#ffff64'
// }

// var button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e){
//     // console.log('Button clicked');
//     // document.getElementById('header-title').textContent='Changed';
//     // var even = document.querySelectorAll('li:nth-child(even)');
//     // for(var i=0; i<even.length; i++){
//     //     even[i].style.backgroundColor='#ffff64'
//     // }

//     // console.log(e.altKey);
//     // console.log(e.ctrlKey);
//     // console.log(e.shiftKey);
//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);
//     // var output = document.getElementById('output');
//     // output.innerHTML ='<h3>'+e.target.id+'</h3>';

//     console.log(e.clientX);
// }

// var main = document.getElementById('main').addEventListener('click', buttonClick);

// function buttonClick(e){
//     console.log(e.clientX);
// }

// var button = document.getElementById('button');
var box = document.getElementById('box');
var itemInput = document.querySelector('input[type=text]');
var form = document.querySelector('form');
var select = document.querySelector('select');

// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);
// itemInput.addEventListener('copy', runEvent);


// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);

box.addEventListener('mousemove', runEvent);

// select.addEventListener('change', runEvent);

// form.addEventListener('submit', runEvent);

function runEvent(e){
    e.preventDefault();
    console.log('EVENT TYPE: '+e.type);
    // console.log(e.target.value)
    // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';

    document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",100)";
}
