var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filer = document.getElementById('filter');

//form submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click', removeItem);
//filter event
filter.addEventListener('keyup', filterList);

function addItem(e){
    e.preventDefault();

        //Get input value
    var newItem = document.getElementById('item').value;

        //Create new element 
    var li = document.createElement('li');
        //Class of li
        li.className = 'list-group-item';
        //Add text node with input value
        li.appendChild(document.createTextNode(newItem));

    var delButton = document.createElement('button');

        //Add Class to delete button
        delButton.className = 'btn btn-danger btn-sm float-right delete';
        //Append text node
        delButton.appendChild(document.createTextNode('X'));
        //Append button to li
        li.appendChild(delButton);
        //Append li to itemlist
        itemList.appendChild(li);

}

//Remove item function
function removeItem(e){
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//Filter item function
function filterList(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    //Get li's
    var items = itemList.getElementsByTagName('li');
    //convert to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
        }
    });
}