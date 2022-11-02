var closebtns = document.getElementsByClassName("close");
var modal = document.getElementById('popup-modal');
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}

var li = document.createElement("li");
li.innerHTML = "Item";
document.getElementById("myList").appendChild(li);


function remove() {
  var element = document.getElementById("heroId");
  element.remove();
}

function showFunction(){
  modal.style.display = "block";
}

function closeFunction(){
  modal.style.display = "none";
}

