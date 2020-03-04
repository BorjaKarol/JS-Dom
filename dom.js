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
header.style.borderBottom = 'solid 4px #343a40';

//QUERYSELECTORALL
var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor='#ffff64'
}